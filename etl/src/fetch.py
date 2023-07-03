import logging
import pathlib
from datetime import datetime, timedelta

import gitlab
import requests
from src.config import SKIP_REPOS
from src.process import clone_and_process_repo
from src.utils import (
    add_to_report,
    check_run_time,
    current_folder,
    test_sparql_endpoint,
)


def fetch_from_lod(shapes_graph):
  """Fetch and test SPARQL endpoints from LOD dataset (JSON file)"""
  lod_datasets_count = 0
  lod_endpoints_count = 0
  added_endpoints_count = 0
  lod_obj = requests.get('https://lod-cloud.net/lod-data.json').json()
  for dataset_id, dataset_obj in lod_obj.items():
    lod_datasets_count += 1
    if 'sparql' in dataset_obj:
      for sparql_obj in dataset_obj['sparql']:
        lod_endpoints_count += 1
        print('Testing endpoint: ' + str(sparql_obj['access_url']))
        shapes_graph = test_sparql_endpoint(str(sparql_obj['access_url']), shapes_graph)
        # if endpoint_added:
        #   added_endpoints_count += 1
  add_to_report('Datasets in LOD: ' + str(lod_datasets_count) +
    '\nSPARQL endpoints in LOD: ' + str(lod_endpoints_count))
    # '\nActive SPARQL endpoints: ' + str(added_endpoints_count))
  return shapes_graph


def fetch_from_yummydata(shapes_graph):
  """Fetch and test SPARQL endpoints from http://yummydata.org/api"""
  lod_datasets_count = 0
  lod_endpoints_count = 0
  added_endpoints_count = 0
  lod_obj = requests.get('https://yummydata.org/api/endpoint/search', headers={'accept': 'application/json'}).json()
  for dataset_obj in lod_obj:
    lod_datasets_count += 1
    if 'endpoint_url' in dataset_obj:
      shapes_graph = test_sparql_endpoint(str(dataset_obj['endpoint_url']), shapes_graph)
      # if endpoint_added:
      #   added_endpoints_count += 1
  add_to_report('Datasets in LOD: ' + str(lod_datasets_count) +
    '\nSPARQL endpoints in LOD: ' + str(lod_endpoints_count))
    # '\nActive SPARQL endpoints: ' + str(added_endpoints_count))
  return shapes_graph

# curl -L -H 'Accept: application/json' https://yummydata.org/api/endpoint/search


# Retrieve releases in projects returned by the GraphQL calls
def fetch_from_github(shapes_graph, client, oauth_token, search_topic):
    """Fetch shapes files from GitHub using the GraphQL API.
    We filter repositories by topics provided as argument
    """
    time_start = datetime.now()
    # for github_topic in topics:
    has_next_page = True
    after_cursor = None
    while has_next_page:
        data = client.execute(
            query=github_graphql_get_shapes(search_topic, after_cursor),
            headers={"Authorization": "Bearer {}".format(oauth_token)},
        )
        for repository in data["data"]["search"]["repositories"]:
            check_run_time(time_start, data["data"]["search"]["repositories"], repository)
            repo_json = repository["repo"]
            repo_url = repo_json["url"]
            if repo_url in SKIP_REPOS:
              continue
            try:
              branch = repo_json['defaultBranchRef']['name']
              repo_description = repo_json["description"]
            except Exception as e:
              logging.error(e)
              logging.warning('🕊 No default_branch found for ' + repo_url + ', using master')
              branch = 'master'
              repo_description = ''
            repo_description = repo_json["description"]
            # repo_description = repo_json["shortDescriptionHTML"]
            shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, 'github')
        has_next_page = data["data"]["search"]["pageInfo"][
            "hasNextPage"
        ]
        after_cursor = data["data"]["search"]["pageInfo"]["endCursor"]

    return shapes_graph


# Get all shapes for all repos with shacl-shapes tag
def github_graphql_get_shapes(github_topic, after_cursor=None):
    return """
query {
  search(query:"GITHUB_TOPIC", type:REPOSITORY, last: 100, after:AFTER) {
    pageInfo {
      hasNextPage
      endCursor
    }
    repositories: edges {
      repo: node {
        ... on Repository {
          url
          shortDescriptionHTML
          name
          description
          defaultBranchRef {
            name
          }
        }
      }
    }
  }
}
""".replace(
    "AFTER", '"{}"'.format(after_cursor) if after_cursor else "null"
).replace(
    "GITHUB_TOPIC", github_topic
)


def fetch_from_github_extra(shapes_graph, client, oauth_token, filename):
  """Fetch additional Shapes files from a list of GitHub repos
  """
  extra_shapes_repositories = []
  with open(f'{str(current_folder)}/../{str(filename)}', 'r') as f:
    for line in f:
      extra_shapes_repositories.append(line.rstrip('\n').strip())

  for extra_repo in extra_shapes_repositories:
    data = client.execute(
        query=github_graphql_get_extra(extra_repo),
        headers={"Authorization": "Bearer {}".format(oauth_token)},
    )
    repo_json = data["data"]["repository"]
    repo_url = repo_json["url"]
    try:
      branch = repo_json['defaultBranchRef']['name']
      repo_description = repo_json["description"]
    except Exception as e:
      logging.error(e)
      logging.warning('🕊 No default_branch found for repo_url, using master')
      branch = 'master'
      repo_description = ''
    shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, 'github')
  return shapes_graph

def github_graphql_get_extra(repo):
  """Generate GraphQL query for repos in the list extra_shapes_repositories
  """
  if repo:
    owner=repo.split('/')[0]
    repo_name=repo.split('/')[1]
    return '''query {
      repository(name:"''' + repo_name + '''", owner:"''' + owner + '''"){
        url
        shortDescriptionHTML
        name
        description
        defaultBranchRef {
          name
        }
      }
    }'''

def fetch_from_gitlab(shapes_graph, gl, search_topic):
    """Fetch files from GitLab"""
    # for search_topic in topics:
    gitlab_repos_list = gl.search(gitlab.SEARCH_SCOPE_PROJECTS, search_topic)
    for repo_json in gitlab_repos_list:
      try:
        repo_url = repo_json["web_url"]
        if repo_url in SKIP_REPOS:
          continue
        if 'default_branch' in repo_json:
          branch = repo_json['default_branch']
        else:
          branch = 'master'
          logging.warning('🕊 No default_branch found for ' + repo_url + ', using master')
        repo_descriptions = []
        if repo_json["name"]:
          repo_descriptions.append(repo_json["name"])
        if repo_json["description"]:
          repo_descriptions.append(repo_json["description"])

        repo_description = ' - '.join(repo_descriptions)
        shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, 'gitlab')
      except Exception as e:
        add_to_report(f'Issue processing GitLab: {str(repo_json)}\n\n{str(e)}')

    return shapes_graph

def fetch_from_gitee(shapes_graph, token, search_topic):
    """Fetch files from Gitee"""
    # Record time to avoid hitting GitHub Actions limits
    time_start = datetime.now()
    # for search_topic in topics:
    gitee_repos_list = requests.get('https://gitee.com/api/v5/search/repositories?access_token=' + token + '&page=1&per_page=100&order=desc&q=' + search_topic).json()
    for repo_json in gitee_repos_list:
      check_run_time(time_start, gitee_repos_list, repo_json)

      repo_url = repo_json["html_url"].rstrip('.git')

      if repo_url in SKIP_REPOS:
        continue
      if 'default_branch' in repo_json:
        branch = repo_json['default_branch']
      else:
        branch = 'master'
        logging.warning('🕊 No default_branch found for repo_url, using master')
      repo_descriptions = []
      if repo_json["name"]:
        repo_descriptions.append(repo_json["name"])
      if repo_json["description"]:
        repo_descriptions.append(repo_json["description"])

      repo_description = ' - '.join(repo_descriptions)
      # repo_description = repo_json["shortDescriptionHTML"]
      shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, 'gitee')
    return shapes_graph
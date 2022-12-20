import { component$, useMount$, useStore, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

import config from '../components/Config'


export default component$(() => {
  const store = useStore({ repos: {} });


  const getSearchQuery = (limit: number = 1000, searchText: string|null = null) => {
    const searchBlock = searchText ? `${searchText}` : ""

    return `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX schema: <https://schema.org/>
    PREFIX sh: <http://www.w3.org/ns/shacl#>
    PREFIX shex: <http://www.w3.org/ns/shex#>
    PREFIX void: <http://rdfs.org/ns/void#>
    SELECT DISTINCT * WHERE {
      GRAPH ?graph {
        ?file_url a schema:SoftwareSourceCode ;
            a ?file_type ;
            rdfs:label ?file_label ;
            schema:codeRepository ?repo_url .
        OPTIONAL { ?repo_url rdfs:comment ?repo_description }
      }
    } LIMIT ${limit}`
  }

  useMount$(async () => {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
    };
    fetch(`${config.sparql_endpoint}?query=${encodeURIComponent(getSearchQuery())}`, options)
      .then(response => response.json())
      .then(data => {
        const sparqlRes = data.results.bindings
        sparqlRes.map((res: any): any =>  {
          const repo_url = res.repo_url.value;
          // Add repo if not already added
          if (!store.repos[repo_url]) {
            store.repos[repo_url] = {
              'url': repo_url,
              'files': [],
            }
            if (res.repo_description) {
              store.repos[repo_url]['description'] = res.repo_description.value
            }
          }
          // Add file to repo
          store.repos[repo_url].files.push({
            url: res.file_url.value,
            type: res.file_type.value,
            label: res.file_label.value,
          })
        })
        console.log(store.repos)
      });
  });

  return (
    <div>
      {Object.entries(store.repos).map(([repo_url, repo]) => (
        <p>
          {repo_url}
        </p>
      ))}

      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>

      <ul>
        <li>
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li>
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
      </ul>

      <h2>Commands</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run dev</code>
          </td>
          <td>Start the dev server and watch for changes.</td>
        </tr>
        <tr>
          <td>
            <code>npm run preview</code>
          </td>
          <td>Production build and start preview server.</td>
        </tr>
        <tr>
          <td>
            <code>npm run build</code>
          </td>
          <td>Production build.</td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add</code>
          </td>
          <td>Select an integration to add.</td>
        </tr>
      </table>

      <h2>Add Integrations</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run qwik add cloudflare-pages</code>
          </td>
          <td>
            <a href="https://developers.cloudflare.com/pages" target="_blank">
              Cloudflare Pages Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add express</code>
          </td>
          <td>
            <a href="https://expressjs.com/" target="_blank">
              Nodejs Express Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add netlify-edge</code>
          </td>
          <td>
            <a href="https://docs.netlify.com/" target="_blank">
              Netlify Edge Functions
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add static</code>
          </td>
          <td>
            <a
              href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
              target="_blank"
            >
              Static Site Generation (SSG)
            </a>
          </td>
        </tr>
      </table>

      <h2>Community</h2>

      <ul>
        <li>
          <span>Questions or just want to say hi? </span>
          <a href="https://qwik.builder.io/chat" target="_blank">
            Chat on discord!
          </a>
        </li>
        <li>
          <span>Follow </span>
          <a href="https://twitter.com/QwikDev" target="_blank">
            @QwikDev
          </a>
          <span> on Twitter</span>
        </li>
        <li>
          <span>Open issues and contribute on </span>
          <a href="https://github.com/BuilderIO/qwik" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <span>Watch </span>
          <a href="https://qwik.builder.io/media/" target="_blank">
            Presentations, Podcasts, Videos, etc.
          </a>
        </li>
      </ul>
      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

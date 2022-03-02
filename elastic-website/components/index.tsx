import React from 'react';
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import { HitsList, HitsGrid } from './searchkit/Hits'
// import { HitsList, HitsGrid } from './components/Hits'
import { useSearchkitVariables, useSearchkit, useSearchkitQueryValue } from '@searchkit/client'
import {
  FacetsList,
  Pagination,
  ResetSearchButton,
  SelectedFilters
} from '@searchkit/elastic-ui'
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
  EuiHorizontalRule,
  EuiFieldSearch,
  EuiButtonEmpty,
  EuiButton,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiImage
} from '@elastic/eui'
// import { useEffect } from 'react'

const graphqlQuery = gql`
  query resultSet($query: String, $filters: [SKFiltersSet], $page: SKPageInput, $sortBy: String) {
    results(query: $query, filters: $filters) {
      summary {
        total
        appliedFilters {
          id
          identifier
          display
          label
          ... on DateRangeSelectedFilter {
            dateMin
            dateMax
          }
          ... on NumericRangeSelectedFilter {
            min
            max
          }
          ... on ValueSelectedFilter {
            value
          }
        }
        sortOptions {
          id
          label
        }
        query
      }
      hits(page: $page, sortBy: $sortBy) {
        page {
          total
          totalPages
          pageNumber
          from
          size
        }
        sortedBy
        items {
          ... on RegistryEntry {
            id
            exampleUrl
            identifiersUrl
            orcidUrl
            highlight {
              title 
              description
            }
            fields {
              preferredPrefix
              altPrefix
              identifiersPrefix
              providerBaseUri
              alternativeBaseUri
              title
              description
              type
              keywords
              organization
              homepage
              exampleId
              providerHtmlUrl
              regex
              yearLastAccessible
              waybackUrl
              lastUpdated
              lastUpdatedBy
              lastUpdatedByOrcid
            }
          }
        }
      }
      facets {
        identifier
        type
        label
        display
        entries {
          # id
          label
          count
        }
      }
    }
  }
`

const Page = () => {
  const variables = useSearchkitVariables()
  const [query, setQuery] = useSearchkitQueryValue()
  const api = useSearchkit()
  const { previousData, data = previousData, loading } = useQuery(graphqlQuery, {
    variables: variables
  })

  const [ viewType ] = useState('grid')
  const Facets = FacetsList([])

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const onButtonClick = () => setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const getIconType = (size: number) => {
    return size === api.searchState.page.size ? 'check' : 'empty';
  };
  const changePageSize = (size: number) => {
    closePopover();
    api.setPage({ size: size, from: 0 })
    api.search()
  };

  const [isSortOpen, setIsSortOpen] = useState(false);
  const onSortClick = () => setIsSortOpen((isSortOpen) => !isSortOpen);
  const closeSort = () => setIsSortOpen(false);
  const getSortOptionStatus = (sortOption: string) => {return sortOption === api.searchState.sortBy ? 'check':'empty'}
  const changeSortOption = (sortOption: string) => {
    closeSort();
    api.setSortBy(sortOption)
    api.search()   
  }

  const button = (
    <EuiButtonEmpty
      size="s"
      color="text"
      iconType="arrowDown"
      iconSide="right"
      onClick={onButtonClick}>
      Rows per page: {api.searchState.page.size}
    </EuiButtonEmpty>
  );

  const sortButton = (
    <EuiButtonEmpty
      size="s"
      color="text"
      iconType="arrowDown"
      iconSide="right"
      onClick={onSortClick}>
      Sort: {api.searchState.sortBy}
    </EuiButtonEmpty>
  );

  const sortOptions = [
    <EuiContextMenuItem
      key="relevance"
      icon={getSortOptionStatus("relevance")}
      onClick={() => {changeSortOption("relevance")}}>
      Relevance
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="ascending"
      icon={getSortOptionStatus("ascending")}
      onClick={() => {changeSortOption("ascending")}}>
      Ascending Pref. Prefix
  </EuiContextMenuItem>,
      <EuiContextMenuItem
      key="descending"
      icon={getSortOptionStatus("descending")}
      onClick={() => {changeSortOption("descending")}}>
      Descending Pref. Prefix
    </EuiContextMenuItem>,
  ];

  const items = [
    <EuiContextMenuItem
      key="10 rows"
      icon={getIconType(10)}
      onClick={() => {
        changePageSize(10)
      }}>
      10 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="20 rows"
      icon={getIconType(20)}
      onClick={() => {
        changePageSize(20)
      }}>
      20 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="50 rows"
      icon={getIconType(50)}
      onClick={() => {
        changePageSize(50)
      }}>
      50 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="100 rows"
      icon={getIconType(100)}
      onClick={() => {
        changePageSize(100)
      }}>
      100 rows
    </EuiContextMenuItem>,
  ];

  return (
    <EuiPage>
      <EuiPageSideBar>
        {/* Reload search bar onChange */}
        <EuiFieldSearch
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            api.setQuery(e.target.value)
            api.search()
          }}
          isLoading={loading}
          onSearch={(value) => {
            setQuery(value)
            api.setQuery(value)
            api.search()
          }}
          isClearable
          aria-label="Search"
        />

        <EuiHorizontalRule margin="m" />
        <Facets data={data?.results} loading={loading} />
      </EuiPageSideBar>
      <EuiPageBody component="div">
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiFlexGroup>
              {/* <EuiFlexItem>
                <EuiTitle size="s">
                  <h2 style={{whiteSpace: "nowrap"}}>Bio2KG Registry</h2>
                </EuiTitle>
              </EuiFlexItem> */}
              <EuiFlexItem>
                <EuiTitle size="xxxs">
                  <SelectedFilters data={data?.results} loading={loading} />
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <ResetSearchButton loading={loading} />
          </EuiPageHeaderSection>
        </EuiPageHeader>

        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle size="xs">
                <h2>{data?.results.summary.total} Results</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
            <EuiPageContentHeaderSection>
              <EuiFlexGroup>
                <EuiFlexItem grow={1}>
              
                </EuiFlexItem>
                {/* Sort Option */}
                <EuiFlexItem grow={1}>
                  <EuiPopover
                    button={sortButton}
                    isOpen={isSortOpen}
                    closePopover={closeSort}>
                    <EuiContextMenuPanel items={sortOptions} />
                  </EuiPopover>
                </EuiFlexItem>

                {/* Page size */}
                <EuiFlexItem grow={1}>
                  <EuiPopover
                    button={button}
                    isOpen={isPopoverOpen}
                    closePopover={closePopover}>
                    <EuiContextMenuPanel items={items} />
                  </EuiPopover>
                </EuiFlexItem>
                {/* <EuiFlexItem grow={1}>
                  <EuiButton href="/api/graphql?query=query%20%7B%0A%20%20results%20%28%0A%20%20%20%20query%3A%22go%22%0A%20%20%20%20filters%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7Bidentifier%3A%20%22type%22%2C%20value%3A%20%22dataset%22%7D%0A%20%20%20%20%5D%0A%20%20%20%20%29%7B%0A%20%20%20%20summary%20%7B%0A%20%20%20%20%20%20query%0A%20%20%20%20%20%20total%0A%20%20%20%20%20%20appliedFilters%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20identifier%0A%20%20%20%20%20%20%20%20display%0A%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20...%20on%20DateRangeSelectedFilter%20%7B%0A%20%20%20%20%20%20%20%20%20%20dateMin%0A%20%20%20%20%20%20%20%20%20%20dateMax%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20...%20on%20NumericRangeSelectedFilter%7B%0A%20%20%20%20%20%20%20%20%20%20min%0A%20%20%20%20%20%20%20%20%20%20max%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20...%20on%20ValueSelectedFilter%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20sortOptions%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20hits%20%28%0A%20%20%20%20%20%20page%3A%7Bfrom%3A%200%2C%20size%3A5%7D%0A%20%20%20%20%20%20sortBy%3A%20%22relevance%22%0A%20%20%20%20%29%7B%0A%20%20%20%20%20%20page%20%7B%0A%20%20%20%20%20%20%20%20total%0A%20%20%20%20%20%20%20%20totalPages%0A%20%20%20%20%20%20%20%20pageNumber%0A%20%20%20%20%20%20%20%20from%0A%20%20%20%20%20%20%20%20size%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20sortedBy%0A%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20RegistryEntry%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20%20%20organization%0A%20%20%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20%20%20keywords%0A%20%20%20%20%20%20%20%20%20%20%20%20homepage%0A%20%20%20%20%20%20%20%20%20%20%20%20yearLastAccessible%0A%20%20%20%20%20%20%20%20%20%20%20%20waybackUrl%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20preferredPrefix%0A%20%20%20%20%20%20%20%20%20%20%20%20identifiersPrefix%0A%20%20%20%20%20%20%20%20%20%20%20%20altPrefix%0A%20%20%20%20%20%20%20%20%20%20%20%20providerBaseUri%0A%20%20%20%20%20%20%20%20%20%20%20%20alternativeBaseUri%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20exampleId%0A%20%20%20%20%20%20%20%20%20%20%20%20regex%0A%20%20%20%20%20%20%20%20%20%20%20%20providerHtmlUrl%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20lastUpdated%0A%20%20%20%20%20%20%20%20%20%20%20%20lastUpdatedBy%0A%20%20%20%20%20%20%20%20%20%20%20%20lastUpdatedByOrcid%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20exampleUrl%0A%20%20%20%20%20%20%20%20%20%20orcidUrl%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7Dfacets%20%7B%0A%20%20%20%20%20%20identifier%0A%20%20%20%20%20%20type%0A%20%20%20%20%20%20label%0A%20%20%20%20%20%20display%0A%20%20%20%20%20%20entries%20%7B%0A%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                      size="s" iconType="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" target="_blank">
                    GraphQL API
                  </EuiButton>
                </EuiFlexItem> */}
                {/* <EuiFlexItem grow={1}>
                  <EuiButton href="/apidocs" size="s" 
                      iconType="https://symbols.getvecta.com/stencil_90/33_openapi-initiative-icon.4d337e4f39.svg" target="_blank">
                    OpenAPI
                  </EuiButton>
                </EuiFlexItem> */}
                {/* <EuiFlexItem grow={1}>
                  {/* https://elastic.github.io/eui/#/display/icons 
                  <EuiButton href="https://elastic.registry.bio2kg.org/_search"
                      size="s" iconType="logoElastic" target="_blank">
                    ElasticSearch API
                  </EuiButton>
                </EuiFlexItem> */}
                {/* <EuiFlexItem grow={1}>
                  <SortingSelector data={data?.results} loading={loading} />
                </EuiFlexItem> */}
                {/* <EuiFlexItem grow={2}>
                <EuiButtonGroup
                  legend=""
                  options={[
                    {
                      id: `grid`,
                      label: 'Grid'
                    },
                    {
                      id: `list`,
                      label: 'List'
                    }
                  ]}
                  idSelected={viewType}
                  onChange={(id) => setViewType(id)}
                />
                </EuiFlexItem> */}
              </EuiFlexGroup>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            {viewType === 'grid' ? <HitsGrid data={data} /> : <HitsList data={data} />}
            <EuiFlexGroup justifyContent="spaceAround" style={{marginTop: '25px'}}>
              <Pagination data={data?.results} />
            </EuiFlexGroup>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  )
}

export default Page

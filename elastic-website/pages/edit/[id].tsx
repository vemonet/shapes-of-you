import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import withApollo from '../../hocs/withApollo'
import { InMemoryCache, ApolloClient, createHttpLink, gql } from '@apollo/client'
import { Container, Typography, Chip, Card, Button, Grid } from "@mui/material";
import { TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material";

import DownloadJsonIcon from '@mui/icons-material/GetApp';
import NavBar from '../../components/NavBar'
import {JSONLD_CONTEXT, BASE_URI, GRAPHQL_URL, ELASTIC_URL} from '../../components/Config'

// import Image from 'next/image'

// https://ngdc.cncb.ac.cn/databasecommons/database/id/184

// Add authentication: https://github.com/panva/node-openid-client
// Nextjs example: https://github.com/nextauthjs/next-auth-example/tree/main/pages
// GitHub login: https://github.com/nextauthjs/next-auth-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts
// Nextjs OAuth docs: https://next-auth.js.org/configuration/providers/oauth

const Resource = ({ data }) => {
  const router = useRouter();
  const resourceId = router.asPath.split('/').pop() ?? '';
  const title = `${resourceId} - Bio2KG registry`;

  if (data.errorMessage) {
    return <>
      <Container className='mainContainer'>
        <Typography variant="body2">
          ❌ {data.errorMessage}
        </Typography>
      </Container>
    </>
  }

  const displayField = (fieldName: string, fieldValue: any, prefix: string = '') => {
    if (fieldValue) {
      return <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row" style={{
            whiteSpace: 'nowrap',
            width: '50px'}}>
          {prefix} <i>{fieldName}</i>:
        </TableCell>
        <TableCell align="left">
          {fieldValue}
        </TableCell>
      </TableRow>
    }
  }
  const displayLink = (urlString: string) => {
    if(/^(?:node[0-9]+)|((https?|ftp):.*)$/.test(urlString)) {
      return <a href={urlString} target="_blank" rel="noopener noreferrer">{urlString}</a>
    } else {
      return urlString
    }
  }
  const downloadJson  = (event: React.FormEvent) => {
    event.preventDefault();
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/ld+json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data['jsonld'], null, 4)));
    element.setAttribute('download', 'bio2kg-' + data.results.id + '.jsonld');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const hit = data.results

  return <Container className='mainContainer'>
    <Head>
      <title>{title}</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data['jsonld']) }}
      />
    </Head>
    {/* <Image src="/openapi_logo.svg" alt="OpenAPI docs" layout='fill' /> */}
    <Typography variant="h4">
      <Chip label={hit.id} variant="filled" /> {hit.fields.title}
    </Typography>
    <Card className='paper'>
      <Typography gutterBottom variant="h6" component="div">
        General informations
      </Typography>
      <TableContainer >
        <Table size="small" aria-label="simple table">
          <TableBody>
            { hit.fields.description && 
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={{whiteSpace: 'nowrap'}}>
                  ℹ️ <i>Description:</i>
                </TableCell>
                <TableCell align="left">
                  {hit.fields.description}
                </TableCell>
              </TableRow>
            }
            { displayField('Resource type', hit.fields.type, '🗃️') }
            { displayField('Keywords', hit.fields.keywords.join(', '), '🏷️') }
            { displayField('Organization', hit.fields.organization, '🏛️') }
            { displayField('Website', displayLink(hit.fields.homepage), '🏠️') }
          </TableBody>
        </Table>
      </TableContainer>
      {hit.fields.yearLastAccessible &&
        <Typography variant="body2" style={{marginTop: '20px'}} className='text'>
          🏚️ <i>Not available anymore, last accessible in</i> {hit.fields.yearLastAccessible} &nbsp;
          {hit.fields.waybackUrl && 
            <>[ <a target="_blank" rel="noopener noreferrer" href={hit.fields.waybackUrl}>archived website</a> ]</>
          }
        </Typography>
      }
      {/* TO REMOVE: same using Grid */}
      {/* <Grid container>
        { hit.fields.description && 
          <>
            <Grid item xs={2}>
              ℹ️ <i>Description:</i>
            </Grid>
            <Grid item xs={10}>
              {hit.fields.description}
            </Grid>
          </>
        }
      </Grid> */}
    </Card>

    <Card className='paper'>
      <Typography gutterBottom variant="h6" component="div">
        Identifiers informations
      </Typography>
      <TableContainer >
        <Table size="small" aria-label="simple table">
          <TableBody>
            { displayField('Preferred prefix', hit.fields.preferredPrefix, '🥇') }
            { displayField('Alternative prefixes', hit.fields.altPrefix, '🥈') }
            { displayField('Identifiers prefix', hit.fields.identifiersPrefix, '📶') }
            { displayField('Provider base URI', hit.fields.providerBaseUri, '🔗') }
            { displayField('Alternative base URI', hit.fields.alternativeBaseUri, '🖇️') }
            { hit.fields.regex &&
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={{whiteSpace: 'nowrap'}}>
                  🔣 <i>Identifier Regex</i>: 
                </TableCell>
                <TableCell align="left">
                  <code className='code'>{hit.fields.regex}</code>
                </TableCell>
              </TableRow>
            }
            { hit.fields.exampleId && hit.exampleUrl &&
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={{whiteSpace: 'nowrap'}}>
                  📋️ <i>Example Identifier:</i>
                </TableCell>
                <TableCell align="left">
                  <a target="_blank" rel="noopener noreferrer" href={hit.exampleUrl}>{hit.fields.exampleId}</a>
                </TableCell>
              </TableRow>
            }
            { displayField('Template URL', hit.fields.providerHtmlUrl, '🗜️')}
          </TableBody>
        </Table>
      </TableContainer>

    </Card>
    
    {hit.fields.lastUpdated && 
      <Typography variant="body2" className='text' style={{marginTop: '20px'}}>
        📆 <i>Entry last updated on</i> {hit.fields.lastUpdated}&nbsp;
        {hit.fields.lastUpdatedBy && hit.orcidUrl && 
          <>by <a target="_blank" rel="noopener noreferrer" href={hit.orcidUrl}>{hit.fields.lastUpdatedBy}</a></>
        }
      </Typography>
    }

    <div style={{textAlign: 'center'}}>
      <Button variant="contained" 
        style={{margin: '20px 20px', textTransform: 'none'}}
        onClick={downloadJson}
        color='inherit'
        startIcon={<DownloadJsonIcon />}>
          Download metadata as JSON-LD
      </Button>
    </div>
  </Container>
};

// TODO: improve
const mapResourceTypes = {
  'dataset': 'http://www.w3.org/ns/dcat#Dataset',
  'terminology': 'http://semanticscience.org/resource/Terminology',
  'warehouse': 'http://semanticscience.org/resource/Collection',
  'registry': 'http://semanticscience.org/resource/Catalog',
  'software': 'http://semanticscience.org/resource/SoftwareEntity',
}


// Function executed on the server to prepare the HTML with the data
// (Server Side Rendering - SSR)
export async function getServerSideProps(ctx: any) {
  const resourceId = ctx.query.id
  console.log(ELASTIC_URL);
  // We can't use the useQuery hook with SSR,
  // so we need to reinstantiate the GraphQL client
  const graphqlClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: GRAPHQL_URL,
      // uri: 'http://localhost:3000/api/graphql',
      // uri: '/api/graphql',
      // An absolute URL is required this time...
      credentials: 'same-origin',
      // headers: {
      //   cookie: headers?.cookie
      // }
    }),
    cache: new InMemoryCache(),
    // defaultOptions: {query: defaultQuery}
  })

  const graphqlQuery = gql`
  query resultSet {
    results (
      query: "${resourceId}"
      ){
      hits {
        items {
          ... on RegistryEntry {
            id
            fields {
              title
              description
              organization
              type
              keywords
              homepage
              yearLastAccessible
              waybackUrl
              preferredPrefix
              identifiersPrefix
              altPrefix
              providerBaseUri
              alternativeBaseUri
              exampleId
              regex
              providerHtmlUrl
              lastUpdated
              lastUpdatedBy
              lastUpdatedByOrcid
            }
            exampleUrl
            orcidUrl
          }
        }
      }
    }
  }`
  
  const { data } = await graphqlClient.query({query: graphqlQuery});
  // console.log("Got data from the GraphQL endpoint:", data);

  const res: any = {}
  // Build the resource JSON-LD
  if (!data.results.hits.items[0] || data.results.hits.items[0].id !== resourceId) {
    res['errorMessage'] = 'Resource not found'
  } else {
    res['results'] = data.results.hits.items[0]
    const hit = data.results.hits.items[0]
    // Note: the ... (spread) copy the object to be able to edit it
    const jsonld = {...hit.fields}
    jsonld['@id'] = BASE_URI + '/resource/' + hit.id
    jsonld['@context'] = JSONLD_CONTEXT
    jsonld['@type'] = mapResourceTypes[hit.fields.type]
    jsonld['exampleUrl'] = hit.exampleUrl
    jsonld['orcidUrl'] = hit.orcidUrl
    delete jsonld['__typename']
    // Remove null values:
    res['jsonld'] = Object.fromEntries(Object.entries(jsonld).filter(([_, v]) => v != null));
  }
  
  // Perform quick content-negociation and sends JSON-LD if requested
  if (ctx.req.headers['accept'] && (ctx.req.headers['accept'].startsWith('application/json') || ctx.req.headers['accept'].startsWith('application/ld+json'))) {
    ctx.res.setHeader('Content-Type', 'application/ld+json')
    ctx.res.write(JSON.stringify(res['jsonld']))
    ctx.res.end()
    return { props: {} }
  }

  return { props: { data: res } }
}

export default withApollo(Resource)
// export default withApollo(withSearchkit(withSearchkitRouting(Resource)))
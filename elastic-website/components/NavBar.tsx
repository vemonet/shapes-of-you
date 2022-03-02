import React, { useContext } from "react";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Icon, Container, Typography, Tooltip, Chip, Paper, Button, CircularProgress  } from "@mui/material";
import HomeIcon from '@mui/icons-material/Biotech';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import Link from 'next/link';
import Image from 'next/image'

export default function NavBar() {
  const theme = useTheme();

  // Light grey: #f5f5f5
  return <AppBar title="" position='static' style={{backgroundColor: '#e0f2f1'}}>
    <Toolbar variant='dense'>
      <Link href="/">
        <a>
          <Tooltip title='Go back to the Registry'>
            <Button className='navButton' style={{textTransform: 'none'}}>
              <HomeIcon style={{marginRight: theme.spacing(1)}}/>Bio2KG Registry
            </Button>
          </Tooltip>
        </a>
      </Link>
      <div style={{flexGrow: 1}}></div>
      <Link href="/api/graphql?query=query%20%7B%0A%20%20results%20%28%0A%20%20%20%20query%3A%22go%22%0A%20%20%20%20filters%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7Bidentifier%3A%20%22type%22%2C%20value%3A%20%22dataset%22%7D%0A%20%20%20%20%5D%0A%20%20%20%20%29%7B%0A%20%20%20%20summary%20%7B%0A%20%20%20%20%20%20query%0A%20%20%20%20%20%20total%0A%20%20%20%20%20%20appliedFilters%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20identifier%0A%20%20%20%20%20%20%20%20display%0A%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20...%20on%20DateRangeSelectedFilter%20%7B%0A%20%20%20%20%20%20%20%20%20%20dateMin%0A%20%20%20%20%20%20%20%20%20%20dateMax%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20...%20on%20NumericRangeSelectedFilter%7B%0A%20%20%20%20%20%20%20%20%20%20min%0A%20%20%20%20%20%20%20%20%20%20max%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20...%20on%20ValueSelectedFilter%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20sortOptions%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20hits%20%28%0A%20%20%20%20%20%20page%3A%7Bfrom%3A%200%2C%20size%3A5%7D%0A%20%20%20%20%20%20sortBy%3A%20%22relevance%22%0A%20%20%20%20%29%7B%0A%20%20%20%20%20%20page%20%7B%0A%20%20%20%20%20%20%20%20total%0A%20%20%20%20%20%20%20%20totalPages%0A%20%20%20%20%20%20%20%20pageNumber%0A%20%20%20%20%20%20%20%20from%0A%20%20%20%20%20%20%20%20size%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20sortedBy%0A%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20RegistryEntry%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20%20%20organization%0A%20%20%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20%20%20keywords%0A%20%20%20%20%20%20%20%20%20%20%20%20homepage%0A%20%20%20%20%20%20%20%20%20%20%20%20yearLastAccessible%0A%20%20%20%20%20%20%20%20%20%20%20%20waybackUrl%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20preferredPrefix%0A%20%20%20%20%20%20%20%20%20%20%20%20identifiersPrefix%0A%20%20%20%20%20%20%20%20%20%20%20%20altPrefix%0A%20%20%20%20%20%20%20%20%20%20%20%20providerBaseUri%0A%20%20%20%20%20%20%20%20%20%20%20%20alternativeBaseUri%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20exampleId%0A%20%20%20%20%20%20%20%20%20%20%20%20regex%0A%20%20%20%20%20%20%20%20%20%20%20%20providerHtmlUrl%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20lastUpdated%0A%20%20%20%20%20%20%20%20%20%20%20%20lastUpdatedBy%0A%20%20%20%20%20%20%20%20%20%20%20%20lastUpdatedByOrcid%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20exampleUrl%0A%20%20%20%20%20%20%20%20%20%20orcidUrl%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7Dfacets%20%7B%0A%20%20%20%20%20%20identifier%0A%20%20%20%20%20%20type%0A%20%20%20%20%20%20label%0A%20%20%20%20%20%20display%0A%20%20%20%20%20%20entries%20%7B%0A%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D">
        <a target='_blank'>
          <Tooltip title='GraphQL API'>
            <Button className='navButton' style={{textTransform: 'none'}}>
              <Icon style={{display: 'flex', marginRight: theme.spacing(1)}}>
                <img src='/graphql_logo.svg' />
                {/* <Image src="/graphql_logo.svg" alt="OpenAPI docs" layout='fill' /> */}
              </Icon> GraphQL API
            </Button>
          </Tooltip>
        </a>
      </Link>
      <Link href="/apidocs">
        <a>
          <Tooltip title='OpenAPI Swagger UI'>
            <Button className='navButton' style={{textTransform: 'none'}}>
              <Icon style={{display: 'flex', marginRight: theme.spacing(1)}}>
                  <img src='/openapi_logo.svg'/>
              </Icon> RESTful API
            </Button>
          </Tooltip>
        </a>
      </Link>
      <Link href="https://elastic.registry.bio2kg.org/_search">
        <a target='_blank'>
          <Tooltip title='GraphQL API'>
            <Button className='navButton' style={{textTransform: 'none'}}>
              <Icon style={{display: 'flex', marginRight: theme.spacing(1)}}>
                <img src='/elasticsearch_logo.svg'/>
              </Icon> ElasticSearch API
            </Button>
          </Tooltip>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <Tooltip title='About'>
            <Button className='navButton' style={{textTransform: 'none'}}>
              <InfoIcon />
            </Button>
          </Tooltip>
        </a>
      </Link>

    </Toolbar>
  </AppBar>

}
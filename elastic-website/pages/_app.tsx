import '@elastic/eui/dist/eui_theme_light.css'
import Head from 'next/head'
import './app.scss';
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

const app = ({ Component, pageProps }) => {

  // TO REMOVE: was used to add google analytics tag to all pages
  // const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //     // if (gtag && gtag.pageview) gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  const appJsonld = {
    "@context": [
      "http://schema.org/"
    ],
    "@id": "https://w3id.org/bio2kg/registry",
    "@type": "WebApplication",
    "name": "Bio2KG Registry",
    "applicationCategory": "Dataset Catalog",
    "operatingSystem": "Any",
    "url": "https://w3id.org/bio2kg/registry",
    "mainEntity": "https://w3id.org/bio2kg/registry",
    "codeRepository": "https://github.com/bio2kg/bio2kg-registry",
    "license": "https://opensource.org/licenses/MIT",
    "description": "A registry of datasets of relevance to the life sciences. The registry contains dataset metadata, and assigns namespaces, identifier patterns, and URL templates for link outs. The web application provides GraphQL, REST API, and Elasticsearch DSL API.",
    "keywords": "Biomedical data, registry, FAIR data",
    "sourceOrganization": [
      {
        "@type": "Organization",
        "name": "Institute of Data Science",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Maastricht University"
        }
      }
    ],
    "author": [
      {
        "@type": "Person",
        "@id": "https://orcid.org/0000-0002-1501-1082",
        "name": "Vincent Emonet",
        "email": "vincent.emonet@gmail.com",
      },
      {
        "@type": "Person",
        "@id": "https://orcid.org/0000-0003-4727-9435",
        "name": "Michel Dumontier"
      }
    ]
  }

  return (<>
    <Head>
      <title>Bio2KG Registry</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonld) }}
      />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default app
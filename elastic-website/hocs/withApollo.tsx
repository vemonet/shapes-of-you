import React from 'react'
import withApollo from 'next-with-apollo'
import { InMemoryCache, ApolloProvider, ApolloClient, createHttpLink, gql } from '@apollo/client'


export default withApollo(
  ({ initialState, headers }) => {
    const cache = new InMemoryCache({}).restore(initialState || {})

    // @ts-ignore
    if (typeof window !== 'undefined') window.cache = cache

    return new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: '/api/graphql',
        // uri: 'http://localhost:3000/api/graphql',
        credentials: 'same-origin',
        headers: {
          cookie: headers?.cookie
        }
      }),
      cache,
      // defaultOptions: {query: defaultQuery}
    })
  },
  {
    render: ({ Page, props }) => (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    )
  }
)



// import { createWithApollo } from "./createWithApollo";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { NextPageContext } from "next";
// import { createUploadLink } from "apollo-upload-client";

// const createClient = (ctx: NextPageContext) =>
//     new ApolloClient({

//         cache: new InMemoryCache(),
//         link: createUploadLink({
//             uri: process.env.NEXT_PUBLIC_SERVER_URL as string,
//             credentials: "include",
//             headers: {
//                 cookie:
//                     (typeof window === "undefined"
//                         ? ctx?.req?.headers.cookie
//                         : undefined) || "",
//             },
//         })
//     });

// export const withApollo = createWithApollo(createClient);
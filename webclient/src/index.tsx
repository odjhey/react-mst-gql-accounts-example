import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { apolloClient } from './utils/accounts'
import Router from './Router'
import gql from 'graphql-tag'

import { StoreContext, RootStore } from './models'

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: {
    request: (query: any, variables: any) =>
      apolloClient
        .query({
          query: gql`
            ${query}
          `,
          variables,
          //fetchPolicy: "network-only",
        })
        .then((d) => {
          if (d.errors) {
            throw d.errors
          }

          console.log('apollo data', d)
          return d.data
        }),
  },
})

ReactDOM.render(
  <StoreContext.Provider value={rootStore}>
    <Router />
  </StoreContext.Provider>,
  document.getElementById('root') as HTMLElement,
)

//@ts-ignore
window.store = rootStore

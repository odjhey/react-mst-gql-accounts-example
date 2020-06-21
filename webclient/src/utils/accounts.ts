import { AccountsClient } from '@accounts/client'
import { AccountsClientPassword } from '@accounts/client-password'
import GraphQLClient from '@accounts/graphql-client'
import { accountsLink } from '@accounts/apollo-link'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { from } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

// This auth link will inject the token in the headers on every request you make using apollo client
const authLink = accountsLink(() => accountsClient)

const { REACT_APP_ACCOUNTS_SERVER_URI } = process.env
const httpLink = new HttpLink({
  uri: REACT_APP_ACCOUNTS_SERVER_URI,
})

const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
})

const accountsGraphQL = new GraphQLClient({ graphQLClient: apolloClient })
const accountsClient = new AccountsClient({}, accountsGraphQL)
const accountsPassword = new AccountsClientPassword(accountsClient)

export { accountsClient, accountsGraphQL, accountsPassword, apolloClient }

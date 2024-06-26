import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

 export const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/graphql",
    cache: new InMemoryCache(),
  });

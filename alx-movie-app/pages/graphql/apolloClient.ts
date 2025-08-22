// alx-movie-app/graphql/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql", // replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

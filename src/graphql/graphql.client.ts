import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/react-hooks";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql.org/swapi-graphql",
    headers: {
      authorization: `bearer ${process.env.APOLLO_KEY}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;

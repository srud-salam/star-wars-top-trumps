import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/react-hooks";

const link = new HttpLink({
  uri: "http://localhost:43491/graphiql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([link]),
});

export default client;

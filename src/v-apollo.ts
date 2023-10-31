import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import { store } from "./services/store";
import { split } from "@apollo/client/core";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

// Create an http link:
const httpLink = createHttpLink({
  uri: "http://178.128.224.133/graphql/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `JWT ${store.state.core.token}`,
  },
});

// Create a WebSocket link:
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://127.0.0.1:8000/graphql/",
    on: {
      connected: () => console.log("ws connected"),
      error: (e) => console.log("ws error", e),
      closed: () => console.log("ws closed"),
      connecting: () => console.log("ws connecting"),
      ping: () => console.log("ws ping"),
      pong: () => console.log("ws pong"),
    },
    connectionParams: () => ({
      Authorization: `JWT ${store.state.core.token}`,
    }),
    shouldRetry: (error) => {
      console.log("ws shouldRetry", error);
      return true;
    },
  })
);

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache,
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

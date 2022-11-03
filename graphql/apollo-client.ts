import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import withApollo from "next-with-apollo";

// Update the GraphQL endpoint to any instance of GraphQL that you like
export const GRAPHQL_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4400/graphql"
    : "https://foglie-dialloro-api.herokuapp.com/graphql";

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_BASE_URL,
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {}),
    }),
);

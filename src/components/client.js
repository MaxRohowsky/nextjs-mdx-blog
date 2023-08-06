import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://hosting189589.a2f4e.netcup.net/graphql'//'https://hosting168647.ae855.netcup.net/graphql' //'http://localhost/Wordpress/graphql'//'https://skipthequeue.net/graphql/' //process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  });
}
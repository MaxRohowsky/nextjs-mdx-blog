import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';


let client;
const API_URL = process.env.WORDPRESS_API_URL

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: API_URL//'https://hosting168647.ae855.netcup.net/graphql' //'http://localhost/Wordpress/graphql'//'https://skipthequeue.net/graphql/' //process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  });
}


export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}



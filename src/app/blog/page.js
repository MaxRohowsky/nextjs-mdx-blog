import { gql } from '@apollo/client';
import { getApolloClient } from '../../components/client';
import Client from './client.js';


export const metadata = {
  title: "Blog",
  description:  "Blog posts about tech, programming, and entrepreneurship."
}

export async function getPosts() {

    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: gql`
        {
          posts(first: 10) {
            edges {
              node {
                id
                excerpt
                title
                slug
                date
                featuredImage{
                  node{
                    mediaItemUrl
                  }
                }
  
              }
            }
          }
        }
      `,
    });
  
    return data?.data.posts.edges.map(({ node }) => node).map(post => {
      // The first map creates a new array with node items. The second map returns the posts and path.
      return {
        ...post,
        path: `/blog/${post.slug}`
      }
    })
  
  }
  

export default async function BlogEntires() {

  const posts = await getPosts();

  return (

    <Client posts={posts} />
   

  )
}


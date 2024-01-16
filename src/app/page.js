'use server'
import Client from './client';
import { gql } from '@apollo/client';
import { getApolloClient } from '../../src/components/client';


async function getPosts() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
    {
      posts(first: 4) {
        edges {
          node {
            id
            link
            slug
            uri
            title
            date
            excerpt
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
  });

  return { ...data?.data.posts };
}





async function getCourses() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
    {
      courses(first: 4) {
        edges {
          node {
            categories {
              nodes {
                description
                name
                categoryImages {
                  categoryImage {
                    sourceUrl
                  }
                }
              }
            }
            date
            uri
            title
            excerpt
          }
        }
      }
    }
    `

  });

  return { ...data?.data.courses };
}



/*

Try getting the 4 most recent categories instead of individual course. - Looks better at bttom of screen

{
  categories(first: 4) {
    edges {
      node {
        categoryImages {
          categoryImage {
            sourceUrl
          }
        }
      }
    }
  }
}

*/




export default async function Home() {

  const posts = await getPosts();
  const courses = await getCourses();




  return (
    <>

      < Client posts={posts} courses={courses} />


    </>
  )
}


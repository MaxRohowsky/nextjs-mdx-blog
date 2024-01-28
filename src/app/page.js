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
      categories(where: {childOf: 17, name: ["ChatGPT", "PyCharm", "Django", "PyGame"]}) {
        edges {
          node {
            id
            name
            slug
            uri
            description
            courses(where: { orderby: { field: MENU_ORDER, order: ASC } },first: 1) {
              edges {
                node {
                  id
                  uri
                  date
                  title
                }
              }
            }
            count
          }
        }
      } 
    }
    `

  });

  return { ...data?.data.categories };
}


/*
query NewQuery {
  categories(where: {childOf: 17, name: ["ChatGPT", "PyCharm"]}) {
    edges {
      node {
        id
        name
        slug
        uri
        description
        courses(first: 1) {
          edges {
            node {
              id
              date
              title
            }
          }
        }
        count
      }
    }
  }
}

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

*/




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


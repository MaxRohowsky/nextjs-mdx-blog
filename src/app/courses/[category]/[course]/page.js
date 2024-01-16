'use server'
import Client from './client';
import { gql } from "@apollo/client";
import { getApolloClient } from '../../../../components/client';


export async function getCourse(params) {

  const { category, course } = params || {};
  
  const apolloClient = getApolloClient();

  const raw_course_data = await apolloClient.query({
    query: gql`
      query GetCourseData($slug: String!){
        courses(where: {name: $slug}) {
            edges {
            node {
              slug
              title
              content
              excerpt
              id
              categories{
                nodes{
                  id
                  name
                  categoryId
                  uri
                }
              }
              githubRef {
                githubReference
              }
              date
            }
          }
        }
      }
      `,
    variables: {
      slug: course
    }
  });

  const raw_sidebar_data = await apolloClient.query({
    query: gql`
    query GetSidebarData($slug: [String]){
      categories(where: {slug: $slug}){
          nodes {
              courses(first: 50) {
                  edges {
                      node {
                          id
                          title
                          slug
                          menuOrder
                          uri
                          link
                      }
                  } 
              }
          }
      }
  }
      `,
    variables: {
      slug: category
    }
  });

  const courseData = raw_course_data?.data.courses.edges[0].node

  const sidebarData = raw_sidebar_data?.data.categories.nodes[0].courses.edges

  return { courseData, sidebarData }
}


export default async function Course({params}) {

  const { courseData, sidebarData } = await getCourse(params);

  return (

    < Client courseData={courseData} sidebarData={sidebarData} />

  );
}




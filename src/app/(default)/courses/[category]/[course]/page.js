'use server'
import Client from './client';


async function getCourse(params) {
  const { category, course } = params || {};

  const courseResponse = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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
        slug: course,
      },
    }),
  });

  const sidebarResponse = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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
        slug: category,
      },
    }),
  });

  const raw_course_data = await courseResponse.json();
  const raw_sidebar_data = await sidebarResponse.json();

  const courseData = raw_course_data?.data?.courses?.edges[0]?.node;
  const sidebarData = raw_sidebar_data?.data?.categories?.nodes[0]?.courses?.edges;

  return { courseData, sidebarData };
}

export default async function Course({params}) {

  const { courseData, sidebarData } = await getCourse(params);

  return (

    < Client courseData={courseData} sidebarData={sidebarData} />

  );
}




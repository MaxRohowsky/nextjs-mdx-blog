import Client from './client';

export const metadata = {
  title: "Projects",
  description: "Portfolio Projects by Max on Tech"
}


async function getCourses() {
  const response = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getPosts($before: String, $after: String, $first: Int = null, $last: Int = null) {
          category(id: "dGVybToxNw=") {
            name
            children (first: $first, last: $last, before: $before, after: $after){
              nodes {
                name
                slug
                id
                description
                categoryImages {
                  categoryImage {
                    sourceUrl
                  }
                }
                courses(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 1) {
                  edges {
                    node {
                      id
                      uri
                      title
                      slug
                      menuOrder
                      link
                    }
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }
        }
      `,
      variables: {
        first: 18, // Use the updated first value for pagination
        after: null, // Use the updated after value for pagination
      },
    }),
  });

  const data = await response.json();

  const courses = data?.data?.category?.children?.nodes;
  const pageInfo = data?.data?.category?.children?.pageInfo;

  return { courses, pageInfo };
}


export default async function Courses() {

  const { courses, pageInfo } = await getCourses();

  return (

    < Client courses={courses} pageInfo={pageInfo} />

  );
}



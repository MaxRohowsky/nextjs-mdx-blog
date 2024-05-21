'use server'
import Client from './client';


async function getPosts() {
  const response = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    query: `
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
    }),
  });

  const data = await response.json();


  return { ...data?.data.posts };
}




export default async function Home() {
 
  const posts = await getPosts();


  return (
    <>

      < Client posts={posts} />

    </>
  )
}



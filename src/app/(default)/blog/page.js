
import Client from './client.js';
import getViews from '@/lib/supabase/getViews.js'

export const revalidate = 5;

export const metadata = {
  title: "Blog",
  description: "Blog posts about Modern Web Development"
}

async function getPosts() {
  const response = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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
    }),
  });

  const data = await response.json();

  const initViews = await getViews();


  const posts = data?.data?.posts?.edges.map(({ node }) => node).map(post => {
    return {
      ...post,
      path: `/blog/${post.slug}`,
    };
  });

  // Return both posts and ana
  return { posts, initViews };
}


export default async function BlogEntires() {

  const { posts, initViews } = await getPosts();


  return (

    <Client posts={posts} initViews={initViews} />


  )
}


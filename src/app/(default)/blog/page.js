
import Client from './client.js';
import supabase from '@/lib/supabase/public'

export const revalidate = 5

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

  const { data: views, error } = await supabase
    .from('ana')
    .select('slug, views')

  
  const posts = data?.data?.posts?.edges.map(({ node }) => node).map(post => {
    return {
      ...post,
      path: `/blog/${post.slug}`,
    };
  });

  // Return both posts and ana
  return { posts, views };
}


export default async function BlogEntires() {

  const { posts, views } = await getPosts();


  return (

    <Client posts={posts} ana={views} />


  )
}


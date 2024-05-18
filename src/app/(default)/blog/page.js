
import Client from './client.js';
import supabase from '@/lib/supabase/public'
import getViews from '@/lib/supabase/getViews.js'

export const revalidate = 10

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
  /*
  let { data: views, error } = await supabase
    .from('ana')
    .select('slug, views', { 'cache': false })


  if (error) {
    views = []
  }*/

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
  console.log("posts")
  console.log(posts)
  console.log("views")
  console.log(initViews)
  /*
  const channels = supabase.channel('custom-update-channel')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'ana' },
      (payload) => {
        //console.log('Change received!', payload)
      }
    )
    .subscribe()

    console.log(channels)*/

  return (

    <Client posts={posts} initViews={initViews} />


  )
}



import Client from './client.js';


export const metadata = {
  title: "Blog",
  description: "Blog posts about tech, programming, and entrepreneurship."
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

  return data?.data?.posts?.edges.map(({ node }) => node).map(post => {
    // The first map creates a new array with node items. The second map returns the posts and path.
    return {
      ...post,
      path: `/blog/${post.slug}`,
    };
  });
}


export default async function BlogEntires() {

  const posts = await getPosts();

  return (

    <Client posts={posts} />


  )
}


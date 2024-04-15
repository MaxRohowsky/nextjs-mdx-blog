import Client from './client';
import he from 'he';

export async function generateMetadata({ params }) {
  const { postSlug } = params;
  const response = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query PostBySlug($slug: String!) {
          postBy(slug: $slug) {
            title
            excerpt
          }
        }
      `,
      variables: {
        slug: postSlug,
      },
    }),

  });

  const data = await response.json();
  const title =  data?.data?.postBy?.title;
  
  // Remove the HTML tags from the excerpt
  let description = data?.data?.postBy?.excerpt;
  description = he.decode(description);
  description = description.replace(/<[^>]+>/g, '');
  
  return {
    title,
    description,
  }
}


export async function getPost(params) {
  const { postSlug } = params;

  const response = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query PostBySlug($slug: String!) {
          postBy(slug: $slug) {
            id
            content
            title
            slug
            excerpt
          }
        }
      `,
      variables: {
        slug: postSlug,
      },
    }),

  });

  const data = await response.json();

  const post = data?.data?.postBy;

  return {
    post,
    status: response.status,
  };
}

export default async function Post({ params }) {

  const { post, status } = await getPost(params);

  return (

    <Client post={post} />

  )
}
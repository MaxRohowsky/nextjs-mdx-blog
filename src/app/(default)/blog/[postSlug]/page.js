
import Client from './client';
import he from 'he';
import getViews from '@/lib/supabase/getViews.js'

export async function generateMetadata( params ) {
  const { params: { postSlug } } = params;
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
    description
  }
}




async function getPost(params) {
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

  const initViews = await getViews();

  return {
    post,
    status: response.status,
    initViews
  };
}


export default async function Post({ params }) {

  const { post, status, initViews } = await getPost(params);

  const obj = initViews.find(view => view.slug === "/blog/"+post.slug);



  return (

    <Client post={post} views={obj?.views} />

  )
}
import { notFound } from 'next/navigation';
import Client from './client';





export async function getPost(params) {
  const { postSlug } = params;

  const response = await fetch("https://hosting189589.a2f4e.netcup.net/graphql", {
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
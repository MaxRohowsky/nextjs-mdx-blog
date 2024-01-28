'use server'
import Client from './client';
import { gql } from "@apollo/client";
import { getApolloClient } from '../../../components/client';


export async function getPost(params) {

  const { postSlug } = params; // the params contains the slug and since the page is called [course] the const here needs to be called course too.

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    /* Remember that name = slug */
    query: gql`
      query PostBySlug($slug: String!) {

        postBy(slug: $slug) {
          id
          content
          title
          slug
          excerpt
      }
    }`,
    variables: {
      slug: postSlug
    }
  });

  const post = data?.data.postBy; 
  
  return post
}


export default async function Post({params}) {

  const post = await getPost(params);

  console.log("post!", post.content);

  return (

    <Client post={post} />

  )
}
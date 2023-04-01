import { useRouter } from 'next/router'
//import { ApolloClient, InMemoryCache } from "@apollo/client";
//import { ApolloProvider } from "@apollo/client";
import { gql } from "@apollo/client";
//import client from "../lib/client";
import { getApolloClient } from '../lib/client';
import Socials from '@/components/Socials';
//import { FaGithub } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import Script from 'next/script'


export default function Course({ title, content }) {
  //const router = useRouter()
  //slug = router.query.course

  console.log(typeof content)

  //console.log(econtent)

  return (
    <>
      <main className="post wp-embed-responsive" >
      {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/obsidian.min.css"/>*/}
        <div className="post__content">
          <h1 className="post__title" dangerouslySetInnerHTML={{ __html: title }} />

          <div className="post__text" dangerouslySetInnerHTML={{ __html: content }} />

          {/*<div className="post__text" dangerouslySetInnerHTML={{ __html: content }} />*/}
          {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
          <script>hljs.highlightAll();</script>*/}
          <Socials />
          
        </div>
        <div className="post__sidebar">
          <Sidebar course={title}/>
        </div>
      </main>
    </>
  )
}



export async function getStaticProps({ params = {} } = {}) {
  const { course } = params; // the params contains the slug and since the page is called [course] the const here needs to be called course too.
  const apolloClient = getApolloClient();


  const data = await apolloClient.query({
    query: gql`
      query GetContent($slug: String!){
        courses(where: {name: $slug}) {
            edges {
              node {
                slug
                title
                content
                id
              }
            }
          }
        }
      `,
    variables: {
      slug: course
    }
  });


  function execute(content){
    const cont = content
    return(
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js">
      
      <div className="post__text" dangerouslySetInnerHTML={{ __html: cont }} />
      <script>hljs.highlightAll();</script>
      </Script>
      
    )
  
  }


  {/*<>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
  <div className="post__text" dangerouslySetInnerHTML={{ __html: content }} />
  <script>hljs.highlightAll();</script>
  </>*/}

  const title = data?.data.courses.edges[0].node.title;

  const content = data?.data.courses.edges[0].node.content;

  console.log(typeof content)

  const econtent = String(execute(content));

  //const data_a = { content };
  //const data_b = { course };



  //const content = 



  return {
    props: {
      title,
      content
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

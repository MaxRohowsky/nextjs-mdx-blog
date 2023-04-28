//import { useRouter } from 'next/router'
import { gql } from "@apollo/client";
import { getApolloClient } from '../../../components/client';
import Socials from '@/components/Socials';
import Sidebar from '@/components/Sidebar';
import styles from '../../../styles/Course.module.scss'


export default function Course({ courseData, sidebarData }) {
  //console.log(sidebarData.length)
  //console.log(courseData)
  
  let showSidebar = true;
  
  if (sidebarData.length <= 1) {
    showSidebar = false;
  } else {
    showSidebar = true;
  }
  

  return (
    <>
      <main className={`${styles.post} wp-embed-responsive`} >

        <div className={styles.post__content}>
          <h1 className={styles.post__title} dangerouslySetInnerHTML={{ __html: courseData.title }} />

          <div className={styles.post__text} dangerouslySetInnerHTML={{ __html: courseData.content }} />

          <Socials />

        </div>
        
        {showSidebar && (<div className={styles.post__sidebar}>
          <Sidebar data={sidebarData} />
        </div>)}
      </main>
    </>
  )
}
//category={category}


export async function getStaticProps({ params = {} } = {}) {
  const { category, course } = params; // the params contains the slug and since the page is called [course] the const here needs to be called course too.
  const apolloClient = getApolloClient();


  const data = await apolloClient.query({
    query: gql`
      query GetCourseData($slug: String!){
        courses(where: {name: $slug}) {
            edges {
            node {
              slug
              title
              content
              id
              categories{
                nodes{
                  id
                  name
                  categoryId
                  uri
                }
              }
            }
          }
        }
      }
      `,
    variables: {
      slug: course
    }
  });

  // For the sidebar. For a category, get *50* courses with corresp. title, link, menuO.
  const data2 = await apolloClient.query({
    query: gql`
    query GetSidebarData($slug: [String]){
      categories(where: {slug: $slug}){
          nodes {
              courses(first: 50) {
                  edges {
                      node {
                          id
                          title
                          slug
                          menuOrder
                          uri
                          link
                      }
                  } 
              }
          }
      }
  }
      `,
    variables: {
      slug: category
    }
  });


  /*function execute(content){
    const cont = content
    return(
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js">
      
      <div className="post__text" dangerouslySetInnerHTML={{ __html: cont }} />
      <script>hljs.highlightAll();</script>
      </Script>
      
    )
  
  }*/

  const courseData = data?.data.courses.edges[0].node

  const sidebarData = data2?.data.categories.nodes[0].courses.edges
  //const sidebarData = data2
  //const title = data?.data.courses.edges[0].node.title;
  //const content = data?.data.courses.edges[0].node.content;
  //const category = data?.data.courses.edges[0].node.categories.nodes[0].id;
  //const sidebarData = data2?.data.categories.nodes

  //const econtent = String(execute(content));





  return {
    props: {
      courseData,
      sidebarData
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

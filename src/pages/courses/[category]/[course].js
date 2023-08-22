import { gql } from "@apollo/client";
import { getApolloClient } from '../../../components/client';
import Socials from '@/components/Socials';
import Sidebar from '@/components/Sidebar';
import styles from '../../../styles/Course.module.scss'
import Head from "next/head";
import parse from "node-html-parser";
import Breadcrumbs from '@/components/Breadcrumbs';
import { dateTime } from '@/components/datetime.js';


export default function Course({ courseData, sidebarData }) {
  let showSidebar = true;

  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: courseData.title , path: courseData.slug },
  ];

  /* Only show sidebar if necessary */
  if (sidebarData.length <= 1) {
    showSidebar = false;
  } else {
    showSidebar = true;
  }

  /* Get the description from the course - but only what's within the p tag */
  const doc = parse(courseData.excerpt);
  const excerptTextPre = doc.querySelector("p");
  const excerptTextPost = excerptTextPre ? excerptTextPre.text : '';


  return (
    <>
      <Head>
        <title>{courseData.title}</title>
        <meta name="description" content={excerptTextPost} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.post} wp-embed-responsive`} >
        <div className={styles.post__content}>
        <div className={styles.post__meta}>
        <Breadcrumbs crumbs={crumbs} />
        <p className={styles.post__date}>Published {dateTime(courseData.date)}</p>
        </div>
          <h1 className={styles.post__title} dangerouslySetInnerHTML={{ __html: courseData.title }} />
          
          <Socials githubReference={courseData.githubRef.githubReference}/>
          <div className={styles.post__text} dangerouslySetInnerHTML={{ __html: courseData.content }} />
        </div>

        {showSidebar && (
          //<div className={styles.post__sidebar}>
            <Sidebar data={sidebarData} />
          //</div>
          )
        }
          
      </div>
    </>
  )
}


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
              excerpt
              id
              categories{
                nodes{
                  id
                  name
                  categoryId
                  uri
                }
              }
              githubRef {
                githubReference
              }
              date
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

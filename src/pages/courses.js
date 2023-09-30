import Card from "@/components/Card"
import styles from '../styles/Courses.module.scss'
import { gql } from "@apollo/client";
import { getApolloClient } from '../components/client';
import Head from "next/head";
import { useState } from "react";



const GET_POSTS_QUERY_NEW = gql`
  query getPosts($before: String, $after: String, $first: Int = null, $last: Int = null) {
    category(id: "dGVybToxNw=") {
      name
      children (first: $first, last: $last, before: $before, after: $after){
        nodes {
          name
          slug
          id
          description
          categoryImages {
            categoryImage {
              sourceUrl
            }
          }
          courses(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 1) {
            edges {
              node {
                id
                uri
                title
                slug
                menuOrder
                link
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;


export default function Courses({ catedata, pageData }) {
  
  var items = []
  const first = 8
  const last = 8

  const [dataToDisplay, setDataToDisplay] = useState(catedata);
  const [after, setAfter] = useState(pageData.endCursor);
  const [before, setBefore] = useState(pageData.startCursor);
  const [hasNextPage, setHasNextPage] = useState(pageData.hasNextPage);
  const [hasPreviousPage, setHasPreviousPage] = useState(pageData.hasPreviousPage);

  /*console.log("Initial Data:");
  console.log(pageData);
  useEffect(() => {
    console.log("-------------------");
    console.log("hasPreviousPage = " + hasPreviousPage);
    console.log("before = " + before);
    console.log("---");
    console.log("hasNextPage =" + hasNextPage);
    console.log("after = " + after);
  }, [hasPreviousPage, before, hasNextPage, after]);*/


  for (var i = 0; i < dataToDisplay.length; i++) {
    if (dataToDisplay[i].courses.edges.length > 0) {
      items.push(
        <Card
          key={i}
          title={dataToDisplay[i].name}
          img={dataToDisplay[i].categoryImages.categoryImage.sourceUrl}
          body={dataToDisplay[i].description}
          link={dataToDisplay[i].courses.edges[0].node.uri.replace('/courses/', '/')} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />
      )
    }
  }

  async function handlePriorClick() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
      query: GET_POSTS_QUERY_NEW,
      variables: {
        last: last,
        before: before,
      },
    });

    setDataToDisplay(data.category.children.nodes)
    setAfter(data.category.children.pageInfo.endCursor);
    setHasNextPage(true)
    setBefore(data.category.children.pageInfo.startCursor);
    setHasPreviousPage(data.category.children.pageInfo.hasPreviousPage)
  }


  async function handleNextClick() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({ //needs to be called data!
      query: GET_POSTS_QUERY_NEW,
      variables: {
        first: first,
        after: after,
      },
    });

    setDataToDisplay(data.category.children.nodes)
    setAfter(data.category.children.pageInfo.endCursor);
    setHasNextPage(data.category.children.pageInfo.hasNextPage)
    setBefore(data.category.children.pageInfo.startCursor);
    setHasPreviousPage(true)
  }


  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Max On Tech - Exploring Tech - Courses</title>
        <meta property="og:title" content="Max On Tech - Exploring Tech - Courses" />

        <meta name="description" content="Fast, Fun, and Free Coding Tutorials"  />
        <meta property="og:description" content="Fast, Fun, and Free Coding Tutorials"  />

        <meta property="og:image" content="https://www.maxontech.io/transparent-logo.png" />
        {/*<meta property="og:url" content={currentPage} />*/}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <h1 className={styles.title}> Courses </h1>
      <h4 className={styles.subtitle}>Tech Tips, Tutorials & How-to Guides</h4>
      <hr className={styles.sepparator} />
      <div className={styles.cards}>
        {items}
      </div>
      <div className={styles.pagination}>
        <button className={styles.button} onClick={handlePriorClick} disabled={!hasPreviousPage}>⬅ Previous Page</button>
        <button className={styles.button} onClick={handleNextClick} disabled={!hasNextPage}>Next Page ➡</button>
      </div>
    </>
  );
}



export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: GET_POSTS_QUERY_NEW, // Use the GET_POSTS_QUERY variable
    variables: {
      first: 8, // Use the updated first value
      after: null, // Use the updated after value
    },
  });

  const catedata = data.data.category.children.nodes
  const pageData = data.data.category.children.pageInfo


  return {
    props: {
      catedata,
      pageData
    },
    revalidate: 10,
  }
}



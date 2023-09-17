import Card from "@/components/Card"
import styles from '../styles/Courses.module.scss'
import { gql } from "@apollo/client";
import { getApolloClient } from '../components/client';
import Head from "next/head";
import { useState } from "react";

export default function Courses({ catedata, pageData }) {

  
  let startCursor = pageData.startCursor
  //console.log(pageData)

  const first = 4
  //const [first, setFirst] = useState(4);
  const [after, setAfter] = useState(pageData.startCursor);
  const [data, setCateData] = useState(catedata);



  async function handleClick() {
    //setFirst(10);  // Change the value of first
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
      query: gql`
          query getPosts($after: String, $first: Int = null) {
            categories(first: $first, after: $after) {
              pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
              }
              nodes {
                id
                name
                slug
                description
                categoryImages {
                  categoryImage {
                    sourceUrl
                  }
                }
                courses(where: {orderby: {field: MENU_ORDER, order: ASC}}, first: 1) {
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
            }
          }
        `,
      variables: {
        first: first, // Use the updated first value
        after: after, // Use the updated after value
      },
    });

    setAfter(data.categories.pageInfo.endCursor);
    setCateData(data.categories.nodes);
    console.log(data.categories)
  }


  var items = []

  // This for loop goes through all the categories
  for (var i = 0; i < data.length; i++) {
    if (data[i].courses.edges.length > 0 && !(catedata[i].name == 'Uncategorized')) { // category > one child and not uncategorized -> create card.
      items.push(
        <Card
          key={i}
          title={data[i].name}
          img={data[i].categoryImages.categoryImage.sourceUrl}
          body={data[i].description}
          link={data[i].courses.edges[0].node.uri} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />
      )
    }
  }



  return (
    <>
      <Head>
        <title>Courses</title>
        <meta name="description" content="Free Tech Tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}> Courses </h1>
      <h4 className={styles.subtitle}>Tech Tips, Tutorials & How-to Guides</h4>
      <hr className={styles.sepparator} />
      <div className={styles.container}>
        <div className={styles.cards}>
          {items}
        </div>
      </div>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>


    </>

  );
}



export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
    query getPosts($after: String, $first: Int = null) {
      categories(first: $first, after: $after) {
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          slug
          description
          categoryImages {
            categoryImage {
              sourceUrl
            }
          }
          courses(where: {orderby: {field: MENU_ORDER, order: ASC}}, first: 1) {
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
      }
    }
    `,
    variables: {
      first: 4,
      after: null
    }
  });

  let catedata = data.data.categories.nodes
  const pageData = data.data.categories.pageInfo

  return {
    props: {
      catedata,
      pageData
    },
    revalidate: 10,
  }
}




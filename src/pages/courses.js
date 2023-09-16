import Card from "@/components/Card"
import styles from '../styles/Courses.module.scss'
import { gql } from "@apollo/client";
import { getApolloClient } from '../components/client';
import Head from "next/head";

export default function Courses({ catedata }) {

  var items = []

  // This for loop goes through all the categories
  for (var i = 0; i < catedata.length; i++) {
    if (catedata[i].courses.edges.length > 0 && !(catedata[i].name == 'Uncategorized')) { // category > one child and not uncategorized -> create card.
      items.push(
        <Card
          key= {i}
          title={catedata[i].name}
          img={catedata[i].categoryImages.categoryImage.sourceUrl}
          body={catedata[i].description}
          link={catedata[i].courses.edges[0].node.uri} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />
      )
    }
  }


  return (
    <>
      <Head>
        <title>Courses</title>
        <meta name="description" content="Free Tech Tutorials"/>
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

    </>

  );
}



export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
    {
      categories {
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
    `
  });

  const catedata = data.data.categories.nodes

  return {
    props: {
      catedata
    },
    revalidate: 10,
  }
}




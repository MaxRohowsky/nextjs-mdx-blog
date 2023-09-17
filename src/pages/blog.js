import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client';
import { getApolloClient } from '../components/client';
import { dateTime } from '../components/datetime.js';
import styles from '../styles/Blog.module.scss'
import Card from "@/components/Card"


export default function BlogEntires({ page, posts }) {
  const { title, description } = page;
  var items = []
  console.log(posts[0].featuredImage.node.mediaItemUrl)

  for (var i = 0; i < posts.length; i++) {
    items.push(
      <Card
        key={i}
        title={posts[i].title}
        date={dateTime(posts[i].date)}
        img={posts[i].featuredImage.node.mediaItemUrl}
        body={posts[i].excerpt}
        link={posts[i].path} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
      />
    )
  }



  return (
    <div>

      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className={styles.main}>
        <h1 className={styles.title}> Blog </h1>
        <h4 className={styles.subtitle}>My Humble Opinion on Tech & Finance</h4>

        <hr className={styles.sepparator} />
        <div className={styles.container}>
          <div className={styles.cards}>
            {items}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        generalSettings {
          title
          description
        }
        posts(first: 10000) {
          edges {
            node {
              id
              excerpt
              title
              slug
              date
              featuredImage{
                node{
                  mediaItemUrl
                }
              }

            }
          }
        }
      }
    `,
  });


  const page = {
    ...data?.data.generalSettings
  }

  const posts = data?.data.posts.edges.map(({ node }) => node).map(post => {
    // The first map creates a new array with node items. The second map returns the posts and path.
    return {
      ...post,
      path: `/blog/${post.slug}`
    }
  });


  return {
    props: {
      page,
      posts
    },
    revalidate: 10,
  }
}

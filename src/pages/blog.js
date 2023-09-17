import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client';
import { getApolloClient } from '../components/client';
import { dateTime } from '../components/datetime.js';
import styles from '../styles/Blog.module.scss'
//import Socials from '@/components/Socials';


export default function BlogEntires({ page, posts }) {
  const { title, description } = page;
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

        <ul className={styles.list}>
          {posts && posts.length > 0 && posts.map(post => {
            return (
              <li key={post.slug}>
                <Link className={styles.link} href={post.path}>
                  <div className={styles.card}>

                    <div className={styles.post__image} style={{ backgroundImage: `url(${post.featuredImage.node.mediaItemUrl})` }}></div>

                    <div className={styles.post__description}>
                    <p className={styles.post__date}>{dateTime(post.date)}</p>
                      <h3 className={styles.post__title} dangerouslySetInnerHTML={{
                        __html: post.title
                      }} /> 
                      
                      <hr className={styles.post_sepparator} />
                      <p className={styles.post__excerpt} dangerouslySetInnerHTML={{
                        __html: post.excerpt
                      }} />
                    </div>

                  </div>
                </Link>
              </li>

            );
          })}

          {!posts || posts.length === 0 && (
            <li>
              <p>
                Oops, no posts found!
              </p>
            </li>
          )}
        </ul>
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

  /* Removed image from blog
                featuredImage{
                node{
                  mediaItemUrl
                }
              }
  */

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
    }
  }
}

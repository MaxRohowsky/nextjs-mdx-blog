import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { gql } from '@apollo/client';
import { getApolloClient } from '../components/client';
import Link from 'next/link'
import Card from "@/components/Card" 
import { dateTime } from '../components/datetime.js';



export default function Home({ Posts, Courses}) {

  const iconColors = {
    "fab fa-react": "#61DAFB",
    "fab fa-js": "#F0DB4F",
    "fab fa-html5": "#E44D26",
    "fab fa-css3": "#1572B6",
    "fab fa-github": "#181717",
    "fab fa-angular": "#DD0031",
    "fab fa-java": "#092E20"
  };

  const possibleClasses = [
    "fab fa-react",
    "fab fa-js",
    "fab fa-html5",
    "fab fa-css3",
    "fab fa-github",
    "fab fa-angular",
    "fab fa-java"
  ];

  const randomClass = () => {
    const randomIndex = Math.floor(Math.random() * (possibleClasses.length));
    const iconClass = possibleClasses[randomIndex];
    const iconColor = iconColors[iconClass];
    return { iconClass, iconColor };
  };

  return (
    <>
      <Head>
        <title>max on tech homepage</title>
        <meta name="description" content="Quality Code Tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrap}>
        <div className={styles.hero}>
          <div className={styles.bottomparticles}>
            {
              Array(20).fill().map((_, index) => {
                const { iconClass, iconColor } = randomClass(); // Store the result
                return (
                  <i
                    key={index}
                    className={`${styles.bubble} ${iconClass}`}
                    style={{ color: iconColor }}
                  ></i>
                )
              }
              )}



          </div>
          <div className={styles.hero__container}>
            <div className={styles.hero__circle}>
              <svg className={styles.circle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" />
              </svg>
              <div className={styles.hero__main}>
                <h1>Simplifying Tech.<br /> Frontend to Backend!</h1>
                <h2>Free, Fast, and Fun lessons to <br /> level up your font- and backend stack! </h2>

                <div className={styles.hero__cta}>
                  <Link style={{ textDecoration: 'none' }} href="/courses" >
                    <span className={styles.learnCta}>
                      <span className={styles.learnCta__content}>
                        <i className="fas fa-graduation-cap" />
                        Learn
                      </span>
                    </span>
                  </Link>

                  <Link style={{ textDecoration: 'none' }} href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw?sub_confirmation=1" >
                    <span className={styles.subCta}>
                      <span className={styles.subCta__content}>
                        <i className="fab fa-youtube" />
                        Subscribe
                      </span>
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className={styles.content__blog}>

          <div className={styles.content__container}>


            <div className={styles.content__left}>
              <h2 className={styles.content__header}>Latest Blog Posts</h2>
              <hr className={styles.content__line} />

              <div className={styles.content__wrap}>

                {Posts.edges.map((post, index) => (
                  <Card
                    key={index}
                    title={post.node.title}
                    date={dateTime(post.node.date)}
                    img={post.node.featuredImage?.node?.mediaItemUrl ?? ""}
                    body={post.node.excerpt}
                    link={"blog" + post.node.uri}
                  />
                ))}

              </div>




            </div>




          </div>
        </div>
        <div className={styles.content__courses}>
          <div className={styles.content__container}>
            <div className={styles.content__right}>
              <h2 className={styles.content__header}>Latest Courses</h2>
              <hr className={styles.content__line} />
              <div className={styles.content__wrap}>


                {Courses.edges.map((course, index) => (
                  <Card
                    key={index}
                    title={course.node.title}
                    img={course.node.categories.nodes[0].categoryImages.categoryImage.sourceUrl}
                    body={course.node.excerpt}
                    link={course.node.uri}
                  />
                ))}


              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  )
}


export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
    {
      posts(first: 4) {
        edges {
          node {
            id
            link
            slug
            uri
            title
            date
            excerpt
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
  });

  const data2 = await apolloClient.query({
    query: gql`
    {
      courses(first: 4) {
        edges {
          node {
            categories {
              nodes {
                description
                name
                categoryImages {
                  categoryImage {
                    sourceUrl
                  }
                }
              }
            }
            date
            uri
            title
            excerpt
          }
        }
      }
    }
    `
  });

  const Posts = { ...data?.data.posts }

  const Courses = { ...data2?.data.courses }



  return {
    props: {
      Posts,
      Courses
    },
    revalidate: 10,
  }
}

import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { gql } from '@apollo/client';
import { getApolloClient } from '../components/client';
import Link from 'next/link'
import Card from "@/components/Card"
import { dateTime } from '../components/datetime.js';



export default function Home({ Posts, Courses }) {

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
        <meta charSet='utf-8' />
        <title>Max On Tech - Exploring Tech</title>
        <meta property="og:title" content="Max On Tech - Exploring Tech" />

        <meta name="description" content="Fast, Fun, and Free Coding Tutorials" />
        <meta property="og:description" content="Fast, Fun, and Free Coding Tutorials" />

        <meta property="og:image" content="https://www.maxontech.io/transparent-logo.png" />
        <meta property="og:url" content="https://www.maxontech.io/" />

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

              <div className={styles.hero__main}>
                <h1>Exploring Tech. </h1>



                <div className={styles.process}>
                  <div className={styles.processstep1}>
                    <div className={styles.processsteptitlecontainer}>
                      <h1 className={styles.processsteptitle}>Frontend</h1>
                      <h1 className={styles.processsteptitleoverlay}>Frontend
                      </h1>
                    </div>
                  </div>
                  <div className={styles.processstep2}>
                    <div className={styles.processsteptitlecontainer}>
                      <h1 className={styles.processsteptitle}>to</h1>
                      <h1 className={styles.processsteptitleoverlay}>to
                      </h1>
                    </div>
                  </div>
                  <div className={styles.processstep3}>
                    <div className={styles.processsteptitlecontainer}>
                      <h1 className={styles.processsteptitle}>Backend!</h1>
                      <h1 className={styles.processsteptitleoverlay}>Backend!
                      </h1>
                    </div>
                  </div>
                </div>





                <h2>Hi, I'm Max. I'm a researcher and coder. <br />Here you'll find my blog and tech tutorials.</h2>


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

        <div className={styles.blog}>
          <div className={styles.prelim}>
            <h2 className={styles.content__header}>Latest Blog Posts</h2>
            <hr className={styles.content__line} />
          </div>
          <div className={styles.content__cards}>
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

          <Link className={styles.content__button} href="/blog" >
            <span className={styles.content__button__outer}>
              <span className={styles.content__button__inner}>
                View More
                <i className="fas fa-arrow-right" />
              </span>
            </span>
          </Link>

        </div>


        <div className={styles.courses}>
          <div className={styles.prelim}>
            <h2 className={styles.content__header}>Latest Courses</h2>
            <hr className={styles.content__line} />
          </div>
          <div className={styles.content__cards}>
            {Courses.edges.map((course, index) => (
              <Card
                key={index}
                title={course.node.title}
                img={course.node.categories.nodes[0].categoryImages.categoryImage.sourceUrl}
                body={course.node.excerpt}
                link={course.node.uri.replace('/courses/', '/')}
              />
            ))}
          </div>

          <Link className={styles.content__button} href="/courses" >
            <span className={styles.content__button__outer}>
              <span className={styles.content__button__inner}>
                View More
                <i className="fas fa-arrow-right" />
              </span>
            </span>
          </Link>
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
   
   
   
   
    /*query: gql`
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
    `*/
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



/*

Try getting the 4 most recent categories instead of individual course. - Looks better at bttom of screen

{
  categories(first: 4) {
    edges {
      node {
        categoryImages {
          categoryImage {
            sourceUrl
          }
        }
      }
    }
  }
}



*/
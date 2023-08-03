import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { gql } from '@apollo/client';
import { getApolloClient } from '../components/client';
import Socials from '@/components/Socials';
import Link from 'next/link'
import { dateTime } from '../components/datetime.js';
//import { subscribe } from 'graphql';

//const inter = Inter({ subsets: ['latin'] })

export default function Home({ firstPost, firstCourse, secondPost, secondCourse }) {

  function MyButton(link) {
    return (
      <Link style={{ textDecoration: 'none' }} className={styles.cta} href={link}>
        Start Learning
      </Link>
    );
  }


  return (
    <>
      <Head>
        <title>Max Teaches Tech Homepage</title>
        <meta name="description" content="Quality Code Tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles.hero__left}>
            <h1>Simplifying the fundamentals of Finance & Computer Science</h1>
            <h2>I'm Max. An Engineer with a Ph.D. in Finance. Here, I'll break down 'mission critical' concepts in Finance & Computer Science </h2>

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

          <div className={styles.hero__right}>
            <div className={styles.myImage}>
              <Image src="/heroGIF.gif" alt="Data Inform Illustration by Nadeem Javed" fill={true} style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.content__container}>

          <div className={styles.content__left}>
            <h2 className={styles.content__header}>Latest Opinion</h2>

            <Link style={{ textDecoration: 'none' }} className={styles.content__link} href={"/blog" + firstPost.uri}>
              <div className={styles.content__card}>
                <div className={styles.featured__img}>
                  <img src={firstPost.featuredImage.node.mediaItemUrl} />
                </div>
                <div className={styles.featured__text}>
                  <h2 className={styles.featured__title}> {firstPost.title} </h2>
                  <h4 className={styles.featured__date}> Blog | {dateTime(firstPost.date)} </h4>
                  <h3 className={styles.featured__excerpt} dangerouslySetInnerHTML={{
                    __html: firstPost.excerpt
                  }} />
                </div>
              </div>
            </Link>

            <Link style={{ textDecoration: 'none' }} className={styles.content__link} href={"/blog" + secondPost.uri}>
              <div className={styles.content__card}>
                <div className={styles.featured__img} >
                  <img src={secondPost.featuredImage.node.mediaItemUrl} />
                </div>
                <div className={styles.featured__text}>
                  <h2 className={styles.featured__title}> {secondPost.title} </h2>
                  <h4 className={styles.featured__date}> Blog | {dateTime(secondPost.date)} </h4>
                  <h3 className={styles.featured__excerpt} dangerouslySetInnerHTML={{
                    __html: secondPost.excerpt
                  }} />
                </div>
              </div>
            </Link>


          </div>



          <div className={styles.content__right}>
            <h2 className={styles.content__header}>Latest Courses</h2>

            <Link style={{ textDecoration: 'none' }} className={styles.content__link} href={firstCourse.uri}>
              <div className={styles.content__card}>
              <div className={styles.featured__img} >
              <img src={firstCourse.categories.nodes[0].categoryImages.categoryImage.sourceUrl} />
                </div>
                
                <div className={styles.featured__text}>
                  <h2 className={styles.featured__title}> {firstCourse.title} </h2>
                  <h4 className={styles.featured__date}> Courses | {dateTime(firstCourse.date)} </h4>
                  <h3 className={styles.featured__excerpt} dangerouslySetInnerHTML={{
                    __html: firstCourse.categories.nodes[0].description
                  }} />
                </div>
              </div>
            </Link>

            <Link style={{ textDecoration: 'none' }} className={styles.content__link} href={secondCourse.uri}>
              <div className={styles.content__card}>
              <div className={styles.featured__img} >
              <img src={secondCourse.categories.nodes[0].categoryImages.categoryImage.sourceUrl} />
                </div>
                <div className={styles.featured__text}>
                  <h2 className={styles.featured__title}> {secondCourse.title} </h2>
                  <h4 className={styles.featured__date}> Courses | {dateTime(secondCourse.date)} </h4>
                  <h3 className={styles.featured__excerpt} dangerouslySetInnerHTML={{
                    __html: secondCourse.categories.nodes[0].description
                  }} />
                </div>
              </div>
            </Link>

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
      posts(first: 2) {
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
            mediaItemUrl}}
          }
        }
      }
    }
    `
  });

  const data2 = await apolloClient.query({
    query: gql`
    {
      courses(first: 2) {
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
          }
        }
      }
    }
    `
  });

  const firstPost = { ...data?.data.posts.edges[0].node }
  const secondPost = { ...data?.data.posts.edges[1].node }
  const firstCourse = { ...data2?.data.courses.edges[0].node }
  const secondCourse = { ...data2?.data.courses.edges[1].node }

  return {
    props: {
      firstPost,
      firstCourse,
      secondPost,
      secondCourse
    }
  }
}

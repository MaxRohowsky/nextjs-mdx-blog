'use client'
import Head from 'next/head'
import { gql } from "@apollo/client";
import { getApolloClient } from '../../../components/client';
//import Socials from '@/components/Socials';
import styles from './post.module.scss'
import { parse } from 'node-html-parser';
import Link from 'next/link';


export default function Client({post}) {

    console.log(post.title);
  //const doc = parse(post.excerpt);
  //const excerptText = doc.querySelector("p").text;

  return (
    <div className={styles.container}>
      {/*<Head>
        <meta charSet='utf-8' />
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />

        <meta name="description" content={excerptText} />
        <meta property="og:description" content={excerptText} />

        <meta property="og:image" content="https://www.maxontech.io/transparent-logo.png" />
       

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>*/}

      <div className={styles.prepost}>
        <div className={styles.post__meta}>

          {/*<Breadcrumbs crumbs={crumbs} /><p className={styles.post__date}>Published {dateTime(courseData.date)}</p>*/}
        </div>
        <h1 className={styles.post__title} dangerouslySetInnerHTML={{ __html: post.title }} />

        {/*<Socials />*/}
      </div>

      <div className={`${styles.post} wp-embed-responsive`} >

        <div className={styles.post__content}>
          <div className={styles.post__text} dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className={styles.questions}>
            <h2>Have a Question?</h2>
            <Link style={{ textDecoration: 'none' }} href="/courses" >
              <span className={styles.discord}>
                <span className={styles.discord__content}>
                  <i className="fab fa-discord" />
                  Ask on Discord
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>



      {/*<main className={styles.post}>
      <div className={styles.post__content}>
        <h1 className={styles.title}>
          {post.title}
        </h1>
        <Socials />

        <div className={styles.post__text}>
          <div dangerouslySetInnerHTML={{
            __html: post.content
          }} />
        </div>
      </div>

        {/*<p>
          <Link href="/">
              Back to home
          </Link>
        </p>
      </main>*/}
    </div>
  )
}


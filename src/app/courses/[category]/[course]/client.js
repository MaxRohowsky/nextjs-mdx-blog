'use client'
import Socials from '@/components/socials/socials';
import Sidebar from '@/components/sidebar/sidebar';
import styles from './course.module.scss'
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'; // Fix the casing of the import statement
import Head from "next/head";
import { parse } from "node-html-parser";
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'



export default function Client({ courseData, sidebarData }) {

  let showSidebar = true;

  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: courseData.title, path: courseData.slug },
  ];


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

      {/*<Head>
        <meta charSet='utf-8' />
        <title>{courseData.title}</title>
        <meta property="og:title" content={courseData.title} />

        <meta name="description" content={excerptTextPost}  />
        <meta property="og:description" content={excerptTextPost}  />

        <meta property="og:image" content="https://www.maxontech.io/transparent-logo.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>*/}


      <div className={styles.prepost}>
        <div className={styles.post__meta}>
          <Breadcrumbs crumbs={crumbs} />
          {/*<p className={styles.post__date}>Published {dateTime(courseData.date)}</p>*/}
        </div>
        <h1 className={styles.post__title} dangerouslySetInnerHTML={{ __html: courseData.title }} />
        <Socials githubReference={courseData.githubRef.githubReference} />
      </div>

      <div className={`${styles.post} wp-embed-responsive`} >
        {showSidebar && (
          <Sidebar data={sidebarData} />
        )}
        <div className={styles.post__content}>
          <div className={styles.post__text} dangerouslySetInnerHTML={{ __html: courseData.content }} />

          <div className={styles.questions}>
            <h2>Have a Question?</h2>
            <Link style={{ textDecoration: 'none' }} href="https://discord.com/invite/JERatQsfY8" target="_blank" >
              <span className={styles.discord}>
                <span className={styles.discord__content}>
                  <FontAwesomeIcon icon={faDiscord} />
                  Ask on Discord
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>


    </>
  )
}


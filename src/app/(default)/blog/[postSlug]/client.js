'use client'
import styles from './post.module.scss'
import Link from 'next/link';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import Socials from '@/components/socials/socials';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'


export default function Client({ post }) {

  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post.title, path: post.slug },
  ];


  return (

    <>

      <div className={styles.prepost}>

        <div className={styles.meta}>

          <Breadcrumbs crumbs={crumbs} />
          
        </div>

        <h1 className={styles.post__title} dangerouslySetInnerHTML={{ __html: post.title }} />

        <Socials />
      </div>

      <div className={`${styles.post} wp-embed-responsive`} >

        <div className={styles.post__content}>

          <div className={styles.post__text} dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className={styles.questions}>

            <h2>Have a Question?</h2>

            <Link style={{ textDecoration: 'none' }} href="/courses" >

              <span className={styles.discord}>

                <span className={styles.discord__content}>

                  <FontAwesomeIcon className={styles.discord__icon} icon={faDiscord} />

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


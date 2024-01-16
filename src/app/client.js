import { Metadata } from 'next'
import styles from './home.module.scss'

import Link from 'next/link'
import Card from "@/components/card/card"
import { dateTime } from '@/components/datetime/datetime.js';
import Particles from '@/components/particles/particle';

import Grid from '@/components/grid/grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Wordblink from '@/components/wordblink/wordblink';

export default async function Client({ posts, courses }) {


  return (
    <>

      {/*<Head>
        <meta charSet='utf-8' />
        <title>Max On Tech - Exploring Tech</title>
        <meta property="og:title" content="Max On Tech - Exploring Tech" />

        <meta name="description" content="Fast, Fun, and Free Coding Tutorials" />
        <meta property="og:description" content="Fast, Fun, and Free Coding Tutorials" />

        <meta property="og:image" content="https://www.maxontech.io/transparent-logo.png" />
        <meta property="og:url" content="https://www.maxontech.io/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>*/}





      <div className={styles.container}>


        {Array.from({ length: 12*8 }, (_, index) => {

           let x = index % 12 + 1; // Adjust as needed
           let y = Math.floor((index) / 12) + 1; // Adjust as needed
           return(
          <div key={index} className={styles.box} style={{ '--x': x, '--y': y }}></div>)
        })}

      </div>

      <div className={styles.wrap}>






        <div className={styles.hero}>

          <div className={styles.hero__container}>






            <Particles />

            <div className={styles.hero__main}>
              <h1>Exploring Tech. </h1>


              <Wordblink />


              <h2 className={styles.hero__tagline}>Hi, I'm Max. I'm a researcher and coder. <br />Here you'll learn about SaaS, Bootstrap, & Code.</h2>




              <div className={styles.hero__cta}>
                <Link style={{ textDecoration: 'none' }} href="/courses" >
                  <span className={styles.learnCta}>
                    <span className={styles.learnCta__content}>
                      <FontAwesomeIcon icon={faGraduationCap} />
                      Learn
                    </span>
                  </span>
                </Link>

                <Link style={{ textDecoration: 'none' }} href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw?sub_confirmation=1" >
                  <span className={styles.subCta}>
                    <span className={styles.subCta__content}>
                      <FontAwesomeIcon icon={faYoutube} />
                      Subscribe
                    </span>
                  </span>
                </Link>
              </div>

              <div className={styles.hero__socialproof}>
                <div className={styles.hero__avatar}>
                  <img className={styles.avatar} src="/avatars/1.jpg" />
                </div>
                <div className={styles.hero__avatar}>
                  <img className={styles.avatar} src="/avatars/2.jpg" />
                </div>
                <div className={styles.hero__avatar}>
                  <img className={styles.avatar} src="/avatars/3.jpg" />
                </div>
                <div className={styles.hero__avatar}>
                  <img className={styles.avatar} src="/avatars/4.jpg" />
                </div>
                <div className={styles.hero__avatar}>
                  <img className={styles.avatar} src="/avatars/5.jpg" />
                </div>

                <div className={styles.socialproof__text}>


                  <b>7988</b> are keeping it <b>secret</b><br /> until it's too big to ignore.
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

            {posts.edges.map((post, index) => (
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
                <FontAwesomeIcon icon={faArrowRight} />

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
            {courses.edges.map((course, index) => (
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
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </span>
          </Link>
        </div>
      </div>

    </>
  )
}









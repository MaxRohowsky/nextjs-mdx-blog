'use client'
import Head from 'next/head'
import { dateTime } from '../../components/datetime/datetime.js';
import styles from './blog.module.scss'
import Card from "@/components/card/card.js"


export default function Client({ posts }) {

    var items = []

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

            {/*<Head>
                
                <meta charSet='utf-8' />
                <title>Max On Tech - Exploring Tech - Blog</title>
                <meta property="og:title" content="Max On Tech - Exploring Tech - Blog" />

                <meta name="description" content="Fast, Fun, and Free Coding Tutorials" />
                <meta property="og:description" content="Fast, Fun, and Free Coding Tutorials" />

                <meta property="og:image" content="https://www.maxontech.io/transparent-logo.png" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

            </Head>*/}

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



'use client'
import { dateTime } from '@/components/datetime/datetime.js';
import styles from './blog.module.scss'
import Card from "@/components/card/card.js"
import Link from 'next/link';

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

        <>

            <div className={styles.container}>

                <h1 className={styles.title}> Blog </h1>

                <h4 className={styles.subtitle}>Strategy and Tech Tips for your Projects</h4>
                
                {/** Desktop */}
                <div className={styles.cards}>

                    {items}

                </div>

                {/** Mobile */}
                <div className={styles.list}>

                    {posts.map((post, index) => (

                        <Link key={index} href={post.path}>

                            <div className={styles.content__post} >

                                <p className={styles.post__title}>{post.title}</p>

                                <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>

                                <p className={styles.date}>{dateTime(post.date)}</p>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </>
    )
}



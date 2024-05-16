'use client'
import { dateTime } from '@/components/datetime/datetime.js';
import styles from './blog.module.scss'
import Card from "@/components/vcard/card.js"
import Link from 'next/link';

export default function Client({ posts, ana }) {
    const paths = posts.map(post => post.path);
    console.log(paths)
    console.log(ana)

    var items = []

    for (var i = 0; i < posts.length; i++) {
        // Find the corresponding ana item
        const anaItem = ana.find(item => item.slug === posts[i].path);

        // If an ana item was found, use its views, otherwise use a default value
        const views = anaItem ? anaItem.views : "N/A";

        items.push(
            <Card
                key={i}
                title={posts[i].title}
                date={dateTime(posts[i].date)}
                img={posts[i].featuredImage.node.mediaItemUrl}
                body={posts[i].excerpt}
                link={posts[i].path} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
                views={views}
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



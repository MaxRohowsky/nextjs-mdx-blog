'use client'
import { dateTime } from '@/components/datetime/datetime.js';
import styles from './blog.module.scss'
import Card from "@/components/vcard/card.js"
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';
//import supabase from '@/lib/supabase/public'
import { useState } from 'react';
import getViews from '@/lib/supabase/getViews.js'

export default function Client({ posts, initViews }) {
    //const paths = posts.map(post => post.path);

    const [views, setViews] = useState(initViews);



    
    useEffect(() => {
        const supabase = createClient('https://bekowpfzavpgpymlsdgp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJla293cGZ6YXZwZ3B5bWxzZGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NjAwOTUsImV4cCI6MjAzMTAzNjA5NX0.JWJWrKdA1o_1gcB4LZbqRid4nJjRrK_gGPJQjbuzqgA')


        const channels = supabase.channel('custom-update-channel')
            .on(
                'postgres_changes',
                { event: 'UPDATE', schema: 'public', table: 'ana', columns: ['viewcount'] },
                async (payload) => {
                    console.log('Change received!', payload)
                    
                    const newViews = await getViews();
                    setViews(newViews)

                }
            )
            .subscribe()
        return () => {
            channels.unsubscribe()
        }
    }, []) 



    let items = []

    for (var i = 0; i < posts.length; i++) {
        // Find the corresponding ana item

        const anaItem = views.find(item => item.slug === posts[i].path);

        // If an ana item was found, use its views, otherwise use a default value
        const uiViews = anaItem ? anaItem.views : "N/A";

        items.push(
            <Card
                key={i}
                title={posts[i].title}
                date={dateTime(posts[i].date)}
                img={posts[i].featuredImage.node.mediaItemUrl}
                body={posts[i].excerpt}
                link={posts[i].path} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
                views={uiViews}
            />
        )
    }

    return (

        <>

            <div className={styles.container}>

                <h1 className={styles.title}> Blog </h1>

                <h4 className={styles.subtitle}>Things that I'm Thinking About</h4>

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



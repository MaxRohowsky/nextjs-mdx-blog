'use client'
import Card from "@/components/card/card"
import styles from './courses.module.scss'
//import Head from "next/head"; //depreciated
import Link from 'next/link';

export default function Client({ courses, pageInfo }) {

    let items = [];


    for (var i = 0; i < courses.length; i++) {
        if (courses[i].courses.edges.length > 0) {
            items.push(
                <Card
                    key={i}
                    title={courses[i].name}
                    img={courses[i].categoryImages.categoryImage.sourceUrl}
                    body={courses[i].description}
                    link={courses[i].courses.edges[0].node.uri.replace('/courses/', '/')} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
                />
            )
        }
    }





    return (
        <>
            {/*<Head>
                <meta charSet='utf-8' />
                <title>Max On Tech - Exploring Tech - Courses</title>
                <meta property="og:title" content="Max On Tech - Exploring Tech - Courses" />

                <meta name="description" content="Fast, Fun, and Free Coding Tutorials" />
                <meta property="og:description" content="Fast, Fun, and Free Coding Tutorials" />

                <meta property="og:image" content="https://www.maxontech.io/transparent-logo.png" />


                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

            </Head>*/}

            <div className={styles.container}>

                <h1 className={styles.title}> Courses</h1>

                <h4 className={styles.subtitle}>Tech Tips, Tutorials & How-to Guides</h4>

                <div className={styles.cards}>

                    {items}

                </div>

                <div className={styles.list}>

                    {courses.map((course, index) => (

                        <Link style={{ textDecoration: 'none' }} key={index} href={"/"}>

                            <div className={styles.content__course} >

                                <p className={styles.course__title}>{course.name}</p>

                                <p dangerouslySetInnerHTML={{ __html: course.description }}></p>


                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </>

    )

}


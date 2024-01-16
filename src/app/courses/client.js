'use client'
import Card from "@/components/card/card"
import styles from './courses.module.scss'
//import Head from "next/head"; //depreciated


export default function Client({ courses, pageInfo }) {

    let items = []
    const dataToDisplay = courses;


    for (var i = 0; i < dataToDisplay.length; i++) {
        if (dataToDisplay[i].courses.edges.length > 0) {
            items.push(
                <Card
                    key={i}
                    title={dataToDisplay[i].name}
                    img={dataToDisplay[i].categoryImages.categoryImage.sourceUrl}
                    body={dataToDisplay[i].description}
                    link={dataToDisplay[i].courses.edges[0].node.uri.replace('/courses/', '/')} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
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

            <h1 className={styles.title}> Courses </h1>
            <h4 className={styles.subtitle}>Tech Tips, Tutorials & How-to Guides</h4>
            <hr className={styles.sepparator} />
            <div className={styles.cards}>
                {items}
            </div>


        </>

    )
}


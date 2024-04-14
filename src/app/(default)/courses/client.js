'use client'
import Card from "@/components/card/card"
import styles from './courses.module.scss'
import Link from 'next/link';

export default function Client({ courses, pageInfo }) {

    let cardItems = [];
    let listItems = [];


    for (var i = 0; i < courses.length; i++) {
        if (courses[i].courses.edges.length > 0) {
            cardItems.push(
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


    for (var i = 0; i < courses.length; i++) {
        if (courses[i].courses.edges.length > 0) {
            listItems.push(
                <Link style={{ textDecoration: 'none' }} key={i} href={courses[i].courses.edges[0].node.uri.replace('/courses/', '/')}>

                    <div className={styles.content__course} >

                        <p className={styles.course__title}>{courses[i].name}</p>

                        <p dangerouslySetInnerHTML={{ __html: courses[i].description }}></p>

                    </div>
                </Link>
            )
        }
    }



    return (
        <>

            <div className={styles.container}>

                <h1 className={styles.title}> Courses</h1>

                <h4 className={styles.subtitle}>Tech Tips, Tutorials & How-to Guides</h4>

                <div className={styles.cards}>

                    {cardItems}

                </div>

                <div className={styles.list}>

                    {listItems}

                </div>

            </div>

        </>

    )

}


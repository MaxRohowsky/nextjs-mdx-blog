import Link from 'next/link';
import React from "react";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import styles from '../styles/Sidebar.module.scss'


export default function Sidebar(sidebarData) {
    const router = useRouter()
    let [isFixed, setIsFixed] = useState(false);
    var items = []

    let courses = sidebarData.data
    let coursesToSort = [...courses]
    let sortedCourses = coursesToSort.sort(function (a, b) {
        return a.node.menuOrder - b.node.menuOrder
    })

    // Sometimes caused issues with scrolling. Be aware!
    useEffect(() => {
        window.addEventListener('scroll', onScroll, false);
        return () => window.removeEventListener('scroll', onScroll, false);
    }, []);
    
    const onScroll = () => {
        if (window.scrollY > 130)
        setIsFixed(true);
        else
        setIsFixed(false);
   }
    

   const positionStyle = isFixed ? styles.sidebar__stay : styles.sidebar__absolute;
    
    //const positionStyle = isFixed ? 'fixed' : 'absolute'; // After the colon = else
    


    for (var i = 0; i < sidebarData.data.length; i++) {
        let active = ""
        if (router.query.course === sortedCourses[i].node.slug) {
            active = styles.sidebar__link__active
        }

        items.push(
            <li className={styles.sidebar__item} key={i}>
                <Link className={`${styles.item__link} ${active}`} href={sortedCourses[i].node.uri}>
                    {i + 1}. {sortedCourses[i].node.title}
                </Link>
            </li>
        )
    }
    return (
        <div className={styles.wrap} >
        <div className={`${styles.block} ${positionStyle}`}>
            <ul className={styles.sidebar__list}>
            <span className={styles.sidebar__toc}>Table of Content:</span>
                {items}
            </ul>
        </div>
        </div>
    );
}


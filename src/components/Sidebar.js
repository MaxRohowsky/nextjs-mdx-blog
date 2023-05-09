import Link from 'next/link';
import React from "react";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function Sidebar(sidebarData) {
    const router = useRouter()
    let [isFixed, setIsFixed] = useState(true);
    var items = []

    let courses = sidebarData.data
    let coursesToSort = [...courses]
    let sortedCourses = coursesToSort.sort(function (a, b) {
        return a.node.menuOrder - b.node.menuOrder
    })

    // Sometimes caused issues with scrolling. Be aware!
    /*useEffect(() => {
        window.addEventListener('scroll', onScroll, false);
        return () => window.removeEventListener('scroll', onScroll, false);
    }, []);
    
    const onScroll = () => {
        if (window.scrollY > 100)
        setIsFixed(true);
        else
        setIsFixed(false);
   }
    
    console.log(isFixed)
    
   const positionStyle = isFixed ? 'fixed' : 'relative';*/
    
    //const positionStyle = isFixed ? 'fixed' : 'absolute'; // After the colon = else
    


    for (var i = 0; i < sidebarData.data.length; i++) {
        let active = ""
        if (router.query.course === sortedCourses[i].node.slug) {
            active = "sidebar__link__active"
        }

        items.push(
            <li className='sidebar__item' key={i}>
                <Link className={`item__link ${active}`} href={sortedCourses[i].node.uri}>
                    {i + 1}. {sortedCourses[i].node.title}
                </Link>
            </li>
        )
    }

    return (
        <div className='sidebar__wrap' >
            <ul className='sidebar__list'>
                {items}
            </ul>
        </div>
    );
}



import Link from 'next/link';
import React from "react";
import { gql } from "@apollo/client";
import { getApolloClient } from './client.js';
import { useRouter } from 'next/router'

export default function Sidebar(sidebarData) {
    const router = useRouter()
    //console.log(sidebarData)
    
    

    var items = []

    let courses = sidebarData.data
    let coursesToSort = [...courses]
    let sortedCourses = coursesToSort.sort(function (a, b) {
        return a.node.menuOrder - b.node.menuOrder
    })

    //console.log(router.query.course)
    //console.log(sortedCourses[0].node.slug)

    for (var i = 0; i < sidebarData.data.length; i++) {
        let linkClassName = ""
        if(router.query.course === sortedCourses[i].node.slug){
            linkClassName = "sidebar__link__active"
        }

        items.push(
            <li className='sidebar__item' key={i}>
                <Link className={linkClassName} href={sortedCourses[i].node.uri}>
                    Chapter {i + 1}: {sortedCourses[i].node.title}
                </Link>
            </li>
        )
    }


    return (
        <>
            <ul className='sidebar__list'>
                {items}
            </ul>
        </>
    );
}


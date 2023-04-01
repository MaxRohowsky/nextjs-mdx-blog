
import { Link } from "react-router-dom";
import React from "react";
import toc from "../toc/toc.json"



export default function Sidebar(title) {
    var items = []
    
    const table =  toc;

    const uniqueCourseName = "unity";
    
    const tableEntry = table.courses.find(c => c.course === uniqueCourseName)
    //console.log(tableEntry.chapters[0].title)
    //console.log(tableEntry.chapters.length)
    console.log(title)

    for (var i = 0; i < tableEntry.chapters.length; i++){
        items.push(<li className='sidebar__item' key={i}>Chapter {i+1}: {tableEntry.chapters[i].title}</li>)
    } 



    {/*
    for (var i = 0; i < 15; i++){
        items.push(<li className='sidebar__item' key={i}>Chapter X </li>)
    } 
    */}

    return ( 
        <>
            <ul className='sidebar__list'>
                {/*<li className='sidebar__item'> Sample Entry </li>*/}
                {items}
            </ul>  
        </>
    );
}


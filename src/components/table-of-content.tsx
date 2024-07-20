'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'





export default function TableOfContent({ headings, frontMatter }) {
    const [selectedHeadingId, setSelectedHeadingId] = useState(null);


    return (
        <aside className='sticky  md:pl-3 lg:pl-20 top-36 hidden md:block'>

            <nav>
                <h2 className="text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300 pb-2">Table of Contents</h2>
                <ul className="pb-8 max-w-72">
                    {headings.filter(heading => heading.level > 1).map((heading, index) => (
                        <li
                            key={heading.id}
                            id={heading.id}
                           /*  onClick={() => setSelectedHeadingId(heading.id)} */

                            style={{
                                marginLeft: `${(heading.level - 1) * 4}px`, // Adjusted to account for starting from level 2
                                fontWeight: heading.level === 2 ? 'bold' : 'normal', // Since we're starting from level 2, all have normal weight
                                paddingTop: heading.level === 2 ? '4px' : '2px', // Simplified as all are now starting from level 2
                                paddingBottom: heading.level === 2 ? '4px' : '2px', // Simplified as all are now starting from level 2
                                color: selectedHeadingId === heading.id ? 'blue' : 'inherit'
                            }}
                        >
                            <Link
                                href={`#${heading.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`cursor-pointer  `} /* ${selectedHeadingId === heading.id ? 'text-blue-500 dark:text-blue-300' : 'text-current'} */
                            >{heading.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex flex-col flex-wrap gap-2 pb-3 transition-all duration-300">
                <span className="text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300 pb-2">Tags</span>
                <div className="flex gap-2">
                    {
                        frontMatter.tags.map(tag => (
                            <span key={tag} className="bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-neutral-200 text-xs font-semibold px-2 py-1.5 rounded w-fit ">
                                {tag}
                            </span>
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}

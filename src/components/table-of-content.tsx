import Link from 'next/link'
import { Heading } from "extract-md-headings";

const getListItemStyle = (level) => {
    return {
        marginLeft: `${Math.max(level - 1, 1) * 4}px`, // Ensure minimum marginLeft for level 1
        fontWeight: level <= 2 ? 'bold' : 'normal', // Bold for level 1 and 2
        paddingTop: '4px',
        paddingBottom: '4px',
    }
}


function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}


export default function TableOfContent({ headings, frontMatter }: { headings: Array<Heading>, frontMatter: FrontMatter }) {



    return (

        <>
            <div className="flex flex-col flex-wrap gap-2 transition-all duration-300 pb-8 w-72">
                <span className="text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300 pb-2">
                    Published
                </span>
                <p>{formatDate(frontMatter.publishedOn)}</p>
            </div>

            {frontMatter.updatedOn && (
                <div className="flex flex-col flex-wrap gap-2 pb-8 transition-all duration-300">
                    <span className="text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300 pb-2">
                        Last Update
                    </span>
                    <p>{formatDate(frontMatter.updatedOn)}</p>
                </div>
            )}

            {headings.filter(heading => heading.level > 1).length > 0 &&
                <nav className='pb-8'>
                    <h2 className="text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300 pb-2">
                        Table of Contents
                    </h2>
                    <ul className=" max-w-72">
                        {headings.map((heading) => (
                            <li
                                key={heading.id}
                                style={getListItemStyle(heading.level)}
                            >
                                <Link
                                    href={`#${heading.level === 1 ? 'introduction' : heading.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="cursor-pointer"
                                >
                                    {heading.level === 1 ? 'Introduction' : heading.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>}

            <div className="flex flex-col flex-wrap gap-2 pb-8 transition-all duration-300">
                <span className="text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300 pb-2">
                    Tags
                </span>
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
        </>
    )
}

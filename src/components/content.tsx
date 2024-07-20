'use client'

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/content/projects';
import { popularContent } from '@/content/popular';
import Space from '@/components/space';
import { Fragment } from 'react';


/**
 * Handles the content of the landing page on the client side.
 * Blogs are fetched from the server and passed as props to this component.
 * Popular content and featured projects are hardcoded and read from imported JSON files.
 */
export default function Content({ blogs }) {

    return (

        <section className="flex justify-center items-center">

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 ">

                <RecentPosts blogs={blogs} />

                <div className='flex flex-col-reverse md:flex-col '>

                    <PopularContent />

                    <FeaturedProjects />

                </div>

            </div>

        </section>

    )
}



export function RecentPosts({ blogs }) {
    return (
        <div className='flex flex-col '>
            <h2 className='  text-rose-red  text-xl '> Recent Posts</h2>
            <Space className='h-3 lg:h-8' />
            {blogs.map((blog: BlogItem) => (
                <>
                    <Card item={blog} />
                    <Space className='h-2 lg:h-8' />
                </>
            )
            )}
        </div>
    )
}


export function PopularContent() {
    return (
        <div className='flex flex-col'>
            <Space className='h-8 md:h-0 lg:h-0' />
            <h2 className='  text-rose-red text-xl '>Popular Content</h2>
            <Space className='h-2 lg:h-8' />
            <ul className='cursor-pointer font-semibold text-lg'>
                {popularContent.links.map((link, index) => (
                    <Fragment key={index}>
                        <Space className='h-1 lg:h-2' />
                        <li className=''>
                            {link.type === 'internal' ? (
                                /* Link is used for internal navigation across pages on your site */
                                <Link className="flex items-center hover:pl-2 transition-spacing duration-300" href={link.href}>
                                    <ArrowRight className='mx-2 text-blue-500' /><span>{link.text}</span>
                                </Link>
                            ) : (
                                /* Anchor tag is used for external navigation to other websites */
                                <a className="flex items-center hover:pl-2 transition-spacing duration-300" href={link.href} target="_blank" rel="noopener noreferrer">
                                    <ArrowRight className='mx-2 text-blue-500' /><span>{link.text}</span>
                                </a>
                            )}
                        </li>
                        <Space className='h-1 lg:h-2' />
                    </Fragment>
                ))}
            </ul>

        </div>
    )
}


export function FeaturedProjects() {
    const featuredProjects = projects.filter(project => project.isFeatured);
    return (
        <div className='flex flex-col'>

            <Space className='h-8 lg:h-16' />
            <h2 className=' text-rose-red text-xl'> Featured Projects</h2>
            <Space className='h-2 lg:h-8' />
            {featuredProjects.map((project, index) => (
                <>
                    <Card item={project} />
                    {index !== featuredProjects.length - 1 && <Space className='h-2 lg:h-8' />}
                </>
            ))}
        </div>
    )
}



type Item = BlogItem | ProjectItem;

function Card({ item }: { item: Item }) {
    // Use item.description or item.abstract for blogs, item.date or item.publishedOn for blogs
    /*     const description = 'description' in item ? item.description : item.abstract;
        const date = 'date' in item ? item.date : item.publishedOn;
        const link = 'link' in item ? item.link : undefined; */

    return (

        <div className="w-full group cursor-pointer p-1 group">
            <a href={item?.externalLink || "#"} className="flex flex-col w-full h-full group-hover:shadow-[-3px_0px_0px_0px_#00000024] dark:group-hover:shadow-[-3px_0px_0px_0px_#FFFFFF90]  transition-shadow  duration-300">
                <div className='group-hover:ml-3 group-hover:mr-0 mr-3 transition-spacing duration-300'>
                    <div >
                        <h3 className=" font-semibold md:text-xl group-hover:text-blue-500 pb-1 ">{item.title}</h3>
                        {item.subtitle && <h4 className="font-medium md:text-l text-neutral-500 dark:text-neutral-400">{item.subtitle}</h4>}
                    </div>
                    <p className="text-sm py-4 md:text-base text-pretty">{item.excerpt}</p>
                    <div className='flex flex-wrap gap-3 pb-2 '>
                        {item.tags.map((tag) => (
                            <span key={tag} className="bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-neutral-200 text-xs font-semibold px-2 py-1.5 rounded ">
                                {tag}
                            </span>
                        ))}
                    </div>


                    <p className=" text-sm md:text-base cursor-pointer flex gap-1 ">
                        Read more
                        <span className='pt-[1px] opacity-0 group-hover:opacity-100 transition-opacity'>
                            <ArrowRight width={15} />
                        </span>
                    </p>
                </div>
            </a>
        </div>

    );
}
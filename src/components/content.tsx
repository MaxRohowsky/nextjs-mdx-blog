'use client'

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/content/projects';
import { popularContent } from '@/content/popular';
import Space from '@/components/space';
import { Fragment } from 'react';
import FeaturedProjectCard from '@/components/featured-project-card';
import RecentPostCard from '@/components/recent-post-card';

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
                    <RecentPostCard item={blog} />
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
                    <FeaturedProjectCard item={project} />
                    {index !== featuredProjects.length - 1 && <Space className='h-2 lg:h-8' />}
                </>
            ))}
        </div>
    )
}





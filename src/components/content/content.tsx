'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Car } from 'lucide-react';
import { projects } from '@/components/projects';

export default function Content({ blogs }) {

    const featuredProjects = projects.filter(project => project.featured);

    return (

        <section className="flex justify-center items-center">

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 pt-4">

                <div className='flex flex-col '>

                    <h2 className='  text-rose-red  text-xl mt-8 mb-4'> Recent Posts</h2>

                    {blogs.map((blog: BlogFrontMatter) => (
                        <Card item={blog} />
                    )
                    )}

                </div>


                <div className='flex flex-col-reverse md:flex-col '>

                    <div className='flex flex-col md:mb-8'>
                        <h2 className='  text-rose-red text-xl mt-8 mb-4'>Popular Content</h2>
                  
                            <ul className='space-y-5 cursor-pointer font-semibold mt-4 '>
                                <li className="flex align-middle hover:pl-2 transition-all"><ArrowRight className='mx-2 text-blue-500' /><span>Building a LinkedIn Post Scheduler</span></li>
                                <li className="flex align-middle hover:pl-2 transition-all"><ArrowRight className='mx-2 text-blue-500' /><span>How does the Internet Work?</span></li>
                                <li className="flex align-middle hover:pl-2 transition-all"><ArrowRight className='mx-2 text-blue-500' /><span>An Introduction to PyCharm</span></li> {/* https://www.youtube.com/watch?v=HHcZbXsZtm0 */}
                                <li className="flex align-middle hover:pl-2 transition-all"><ArrowRight className='mx-2 text-blue-500' /><span>JavaScript in a Nutshell</span></li>
                                <li className="flex align-middle hover:pl-2 transition-all"><ArrowRight className='mx-2 text-blue-500' /><span>My Key Principles and Beliefs</span></li>
                            </ul>
                   
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h2 className=' text-rose-red text-xl mt-8 mb-4'> Featured Projects</h2>

                        {featuredProjects.map((project) => (
                            <Card item={project} />
                        )
                        )}
                    </div>


                </div>

            </div>



        </section>

    )
}


/* const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.pageX - 160, y: ev.pageY - 200 });
        };
        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };

    }, []);
    return mousePosition;
};


function ProjectSnippet({ title, text, date, url, imgSrc }) {
    const mousePosition = useMousePosition();
    return (
        <a href={url} className="group" key={url} >
            <p className="">{title}</p>
            <div>
                <p>{text}</p>
            </div>
            <p className="">{date}</p>
            <div className="opacity-0 transform scale-95 group-hover:opacity-100 transition-opacity" style={{ position: 'absolute', left: mousePosition.x, top: mousePosition.y }}>
                <Image
                    src={imgSrc} // Path relative to the `public` directory
                    alt="Transparent Logo"
                    width={320} // Set your desired width
                    height={180} // Set your desired height

                />
            </div>


        </a>
    );
};
 */






type Item = BlogFrontMatter | Project;

function Card({ item }: { item: Item }) {
    // Use item.description or item.abstract for blogs, item.date or item.publishedOn for blogs
    const description = 'description' in item ? item.description : item.abstract;
    const date = 'date' in item ? item.date : item.publishedOn;
    const link = 'link' in item ? item.link : undefined;

    return (

        <div className="w-full group cursor-pointer mt-4 ">
            <a href={link} className="flex flex-col  w-full h-full">
                <div>
                    <h3 className=" font-semibold md:text-xl group-hover:text-blue-500 pb-1 transition-all duration-300">{item.title}</h3>
                    {item.subtitle && <h4 className=" font-medium md:text-l text-neutral-500 dark:text-neutral-400 transition-all duration-300">{item.subtitle}</h4>}
                </div>
                {description && <p className="text-sm py-4 md:text-base transition-all duration-300">{description}</p>}
                <div className='flex flex-wrap gap-3 pb-2 transition-all duration-300'>
                    {item.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-neutral-200 text-xs font-semibold px-2 py-1.5 rounded transition-all duration-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className=" text-sm md:text-base cursor-pointer flex gap-1 duration-300 transition-all">Read more <span className='pt-[1px] opacity-0 group-hover:opacity-100 transition-all'> <ArrowRight width={15}/> </span> </p>
            </a>
        </div>

    );
}
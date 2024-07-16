'use client'
import { dateTime } from '@/components/datetime/datetime';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/components/projects';

export default function Content({blogs}) {

 
    console.log({blogs})
    // filter the featured projects from the projects json
    const featuredProjects = projects.filter(project => project.featured);
    //console.log(featuredProjects)
    return (

        <section className="flex justify-center  items-center">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                <div>
                    <h2 className=' font-bold  text-red-500 text-xl'> Recent Posts</h2>
                    {blogs.map((blog) => (
                        <div key={blog.slug}>
                            <Link href={`/blog/${blog.slug}`} className="flex flex-col justify-between  hover:shadow-lg transition-shadow duration-300 px-2 py-4 w-full h-full">
                                <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
                                <p className="text-sm text-gray-500">{blog.publishedOn}</p>
                                <p className="py-4">{blog.abstract}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {blog.tags.map((tag) => (
                                        <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer">Read more →</p>
                            </Link>
                        </div>
                    )
                    )}

                </div> 


                <div >

                    <div>
                        <h2 className=' font-bold  text-red-500 text-xl'> Most Popular</h2>

                        <div>
                            <ul>
                                <li className="flex align-middle"><ArrowRight /><span>My Core Beliefs</span></li>
                                <li className="flex align-middle"><ArrowRight /><span>My Core Beliefs</span></li>
                                <li className="flex align-middle"><ArrowRight /><span>An Introduction to PyCharm</span></li>
                                <li className="flex align-middle"><ArrowRight /><span>JavaScript in a Nutshell</span></li>
                                <li className="flex align-middle"><ArrowRight /><span>My Core Beliefs</span></li>
                            </ul>
                        </div>



                    </div>

                    <div>



                    </div>
                    <h2 className=' font-bold  text-red-500 text-xl'> Featured Projects</h2>


                    {featuredProjects.map((project) => (
                        <ProjectSnippet
                            title={project.title}
                            text={project.description}
                            date={dateTime(project.date)}
                            url={project.link}
                            imgSrc={project.img}
                        />
                    ))}


                    {featuredProjects.map((project) => (
                        <div key={project.slug}>
                            <Link href={`/projects/${project.slug}`} className="flex flex-col justify-between  hover:shadow-lg transition-shadow duration-300 px-2 py-4 w-full h-full">
                                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-500">{project.date}</p>
                                <p className="py-4">{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer">Read more →</p>
                            </Link>

                        </div>

                    )
                    )}


                    {/*                     <ProjectSnippet
                        title='Twitter (X) Font Editor'
                        text='Google Chrome Extension that Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ Fonts on Twitter X Posts by making use of Unicode characters.'
                        date='16 March 2024'
                        url='https://github.com/maxontech/twitter-font-editor'
                        imgSrc='/previews/x-font-editor.png'
                    />


                    <ProjectSnippet
                        title='Click to Copy'
                        text='Google Chrome Extension that allows you to selectively Copy Text, Urls, and CSS with one Click.'
                        date='10 March 2024'
                        url='https://chromewebstore.google.com/detail/click-to-copy/fonpjogfddpklefillfepifbcikebelh'
                        imgSrc='/previews/click-to-copy.png'
                    />

                    <ProjectSnippet
                        title='GitPro'
                        text='Showcase website for unique and beautiful GitHub profiles that is fully automated using GitHub Actions.'
                        date='15 February 2024'
                        url='https://maxontech.github.io/best-github-profile-readme/'
                        imgSrc='/previews/gitpro.png'
                    />


                    <ProjectSnippet
                        title='NEFT Flappy Bird'
                        text='Neuroevolution with Fixed Topologies (NEFT) implemented in the Flappy Bird without using any Machine Learning Libraries.'
                        date='10 January 2023'
                        url='https://github.com/maxontech/neft-flappy-bird'
                        imgSrc='/previews/neft-flappy-bird.png'
                    /> */}


                    <Link style={{ fontWeight: 'bold' }} href="/projects">View more →</Link>






                </div>

            </div>



        </section>

    )
}


const useMousePosition = () => {
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



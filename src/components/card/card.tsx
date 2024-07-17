'use client'
import Tilt from 'react-parallax-tilt';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
// Assuming BlogFrontMatter and Project interfaces are imported or defined above

type Item = BlogFrontMatter | Project;

export default function Card({ item }: { item: Item }) {
    // Use item.description or item.abstract for blogs, item.date or item.publishedOn for blogs
    const description = 'description' in item ? item.description : item.abstract;
    const date = 'date' in item ? item.date : item.publishedOn;
    const link = 'link' in item ? item.link : 'blog/' + item.slug;

    return (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="rounded-sm w-full h-full group cursor-pointer ">
                <a href={link} onClick={() => console.log(link)} className="flex flex-col relative justify-between border bg-white dark:bg-background  border-gray-200 dark:border-neutral-800 rounded-lg hover:shadow-md transition-shadow duration-300 py-3 p-3 md:p-6 w-full h-full">
                    
                    {item.slug === 'linkedin-post-scheduler' && (
                        <Image src="/icons/new.png" alt='new project icon' width={50} height={50} className="absolute right-0 top-0" />
                    )}
                    
                    {/*          {date && <p className="text-xs font-medium text-gray-300">{date}</p>} */}
                    <div>
                        <h3 className=" font-semibold md:text-xl group-hover:text-blue-500 transition-all duration-300">{item.title}</h3>
                        <h4 className=" font-medium md:text-l text-neutral-500 dark:text-neutral-400 transition-all duration-300">{item.subtitle}</h4>
                    </div>
                    {description && <p className="text-sm py-4 md:text-base transition-all duration-300">{description}</p>}
                    <div className='flex flex-wrap gap-2 pb-3 transition-all duration-300'>
                        {item.tags.map((tag) => (
                            <span key={tag} className="bg-gray-200 dark:bg-neutral-900 text-gray-800 dark:text-neutral-200 text-xs font-semibold px-2 py-1.5 rounded transition-all duration-300">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="font-semibold text-sm md:text-base cursor-pointer flex gap-2 opacity-20 group-hover:opacity-100 duration-300  transition-all">Read more <span className='pt-[1px]'> <ArrowRight /> </span> </p>
                </a>
            </div>
        </Tilt>
    );
}
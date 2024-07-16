'use client'
import Tilt from 'react-parallax-tilt';

// Assuming BlogFrontMatter and Project interfaces are imported or defined above

type Item = BlogFrontMatter | Project;

export default function Card({ item }: { item: Item }) {
    // Use item.description or item.abstract for blogs, item.date or item.publishedOn for blogs
    const description = 'description' in item ? item.description : item.abstract;
    const date = 'date' in item ? item.date : item.publishedOn;
    const link = 'link' in item ? item.link : undefined;

    return (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="rounded-sm w-full h-full">
                <a href={link} className="flex flex-col justify-between border bg-white border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 py-3 md:p-6 w-full h-full">
                    <h3 className="font-bold md:text-xl mb-2">{item.title}</h3>
                    {date && <p className="text-sm text-gray-500">{date}</p>}
                    {description && <p className="py-4 text-sm md:text-base">{description}</p>}
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {item.tags.map((tag) => (
                            <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
    
                 <p className="text-indigo-500 hover:text-indigo-800 font-semibold text-sm md:text-base cursor-pointer">Read more →</p>
                </a>
            </div>
        </Tilt>
    );
}
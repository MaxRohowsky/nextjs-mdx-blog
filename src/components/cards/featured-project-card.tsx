
import { ArrowRight } from 'lucide-react';


export default function FeaturedProjectCard({ item }: { item: ProjectItem }) {


    return (

        <div className="w-full group cursor-pointer p-1 group">
            <a href={item?.externalLink || "#"} className="flex flex-col w-full h-full group-hover:shadow-[-3px_0px_0px_0px_#00000024] dark:group-hover:shadow-[-3px_0px_0px_0px_#FFFFFF90]  transition-shadow  duration-300">
                <div className='group-hover:ml-3 group-hover:mr-0 mr-3 transition-spacing duration-300'>

                    <div >
                        <h3 className=" font-semibold md:text-xl group-hover:text-blue-500 pb-1 ">
                            {item.title}
                        </h3>
                        {item.subtitle && <h4 className="font-medium md:text-l text-neutral-500 dark:text-neutral-400">
                            {item.subtitle}
                        </h4>}
                    </div>

                    <p className="text-sm py-4 md:text-base text-pretty">
                        {item.excerpt}
                    </p>

                    <div className='flex flex-wrap gap-3 pb-2 '>
                        {item.tags.map((tag) => (
                            <span key={tag} className="bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-neutral-200 text-xs font-semibold px-2 py-1.5 rounded ">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className=" text-sm md:text-base cursor-pointer flex gap-1 font-semibold opacity-20 group-hover:opacity-100">
                        View more
                        <span className='pt-[1px] opacity-0 group-hover:opacity-100 transition-opacity'> 
                            <ArrowRight width={15} />
                        </span>
                    </p>
                </div>
            </a>
        </div>

    );
}
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ViewCounter from '@/components/view-counter';
import { Suspense } from 'react';
import { Eye } from 'lucide-react';


export default function RecentPostCard({ item, allViews }: { item: FrontMatter, allViews: { slug: string, views: number }[]}) {


    return (

        <div className="w-full group cursor-pointer p-1 group">
            <Link href={`/blog/${item.slug}` || "#"} className="flex flex-col w-full h-full group-hover:shadow-[-3px_0px_0px_0px_#00000024] dark:group-hover:shadow-[-3px_0px_0px_0px_#FFFFFF90]  transition-shadow  duration-300">
                <div className='group-hover:ml-3 group-hover:mr-0 mr-3 transition-spacing duration-300'>

                    <div >
                        <h3 className=" font-semibold md:text-xl group-hover:text-blue-500 pb-1 flex flex-row justify-between items-baseline">
                            {item.title}
                            <Suspense fallback={<span className=' w-[90px]'/>}>
                                <span className=' whitespace-nowrap text-neutral-200 group-hover:text-blue-500 pl-2 pr-5 font-normal text-lg flex flex-row items-center'>
                                    <ViewCounter allViews={allViews} slug={item.slug} />
                                    <Eye className='inline-block ml-1' width={20} />
                                </span>
                            </Suspense>
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

                    <p className="text-sm md:text-base cursor-pointer flex justify-between items-center  font-semibold opacity-20 group-hover:opacity-100 transition-opacity pr-4">
                        <span className="flex gap-1">
                            <span>Read more</span>
                            <span className='pt-[1px] opacity-0 group-hover:opacity-100 transition-opacity'>
                                <ArrowRight width={15} />
                            </span>
                        </span>
                    </p>
                </div>
            </Link>
        </div>

    );
}


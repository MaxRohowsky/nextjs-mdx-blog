'use client'
import BlogCard from '@/components/ui/blog-card';
import { sortBlogsByDate } from '@/lib/utils';
import { getBlogTags } from '@/lib/utils';
import { ScrollArea } from "@/components/ui/scroll-area"
import { ListFilter } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { getFilteredBlogItems } from '@/lib/utils';


export default function Client({ blogItems }) {
    
    let blogsx = sortBlogsByDate(blogItems);
    let allTags = getBlogTags(blogItems)


    const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
    const [isFiltered, setIsFiltered] = useState<boolean>(false);
    const tagsToFilterBy = isFiltered ? selectedTags : undefined

    const blogs = getFilteredBlogItems({ tags: tagsToFilterBy }, blogsx);



    const handleTagSelection = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    const handleResetFilters = () => {
        setSelectedTags([]);
    }

    useEffect(() => {
        setIsFiltered(selectedTags.length > 0);
    }, [selectedTags, isFiltered]);



    return (
        <>
            <>
                <div className='flex items-center h-40 '>
                    <h1 className='text-5xl font-semibold'>Blog</h1>
                </div>

                <div className="flex justify-end">
                    <Filter allTags={allTags} selectedTags={selectedTags} handleResetFilters={handleResetFilters} handleTagSelection={handleTagSelection} />
                </div>

                <div className='grid gap-7 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>

                    {blogs.map((blog) => (
                        <BlogCard key={blog.slug} item={blog} />
                    ))}

                </div>
            </>




        </>
    );

}










function Filter({ allTags, selectedTags, handleResetFilters, handleTagSelection }) {
    /*     const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
    
        const handleTagSelection = (tag: string) => {
            if (selectedTags.includes(tag)) {
                setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
            } else {
                setSelectedTags([...selectedTags, tag]);
            }
        }
    
        const handleResetFilters = () => {
            setSelectedTags([]);
        }
     */





    return (
        <>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className=" w-28 lg:flex gap-2 my-4">
                        <ListFilter /> Filter
                    </Button>
                </PopoverTrigger>

                <PopoverContent className='  w-48 p-2 flex flex-col gap-2 justify-between'>
                    <Button
                        variant="secondary"
                        className='w-full hover:bg-red-400 hover:text-white'
                        onClick={handleResetFilters}
                    >
                        Reset Filters
                    </Button>

                    <ScrollArea className='h-52 pr-2'>
                        <ul className='py-1 px-1 w-full mr-2 flex flex-col gap-2'>
                            {allTags.map((tag) => (
                                <li key={tag} className='flex flex-row gap-2 w-full items-center px-2 py-1 border border-neutral-100 rounded-md'>
                                    <Checkbox className='border-none bg-neutral-100' checked={selectedTags.includes(tag)} id={tag} onCheckedChange={() => handleTagSelection(tag)} />
                                    <label htmlFor={tag} className="w-full">
                                        {tag}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>


                </PopoverContent>
            </Popover>


        </>
    );

}
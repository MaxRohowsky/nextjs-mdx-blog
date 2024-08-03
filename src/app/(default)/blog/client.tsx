'use client'

import { getFilteredBlogItems } from '@/lib/utils';
import { useState, useEffect } from 'react';
import Filter from "@/components/ui/filter"
import { getBlogTags } from '@/lib/utils';
import BlogCard from '@/components/ui/blog-card';


export default function Client({ blogItems }) {

    let allTags = getBlogTags(blogItems)

    const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
    const [isFiltered, setIsFiltered] = useState<boolean>(false);
    const tagsToFilterBy = isFiltered ? selectedTags : undefined

    const blogs = getFilteredBlogItems({ tags: tagsToFilterBy }, blogItems);



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



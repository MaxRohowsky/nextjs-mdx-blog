import { sortBlogsByDate } from '@/lib/utils';
import { getFilteredBlogItems } from '@/lib/server-actions';
import BlogCard from '@/components/ui/blog-card';
import { useState } from 'react';
/* export const metadata = {
  title: "Next Blog",
  description: "Next.js static mdx blog starter template",
};
 */




export default async function Blog() {

  const blogItems = await getFilteredBlogItems()

/*   const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const displayTags = isFiltered ? selectedTags : undefined

  const projects = getFilteredBlogItems({ tags: displayTags });
 */
  const blogs = sortBlogsByDate(blogItems);


  //const allTags = getBlogTags(frontMatter)



  return (
    <>

      <div className='flex items-center h-40 '>
        <h1 className='text-5xl font-semibold'>Blog</h1>
      </div>

      <div className='grid gap-7 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>
      
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} item={blog} />
        ))}

      </div>
    </>
  )
}

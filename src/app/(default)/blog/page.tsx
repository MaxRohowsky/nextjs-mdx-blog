import { sortBlogsByDate } from '@/lib/utils';
import { getFilteredBlogItems } from '@/lib/server-actions';
import BlogCard from '@/components/ui/blog-card';


export default async function Blog() {

  let blogItems = await getFilteredBlogItems()
  let blogs = sortBlogsByDate(blogItems);

  return (
    <>
      <div className='flex items-center h-40 '>
        <h1 className='text-5xl font-semibold'>Blog</h1>
      </div>

      <div className='grid gap-7 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>

        {blogs.map((blog) => (
          console.log(blog),
          <BlogCard key={blog.slug} item={blog} />
        ))}

      </div>
    </>
  )
}

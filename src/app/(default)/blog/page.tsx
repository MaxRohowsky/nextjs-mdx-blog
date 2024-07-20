import { sortBlogsByDate } from '@/lib/utils';
import { getFilteredBlogFrontMatter } from '@/lib/server-actions';
import Card from '@/components/card';

/* export const metadata = {
  title: "Next Blog",
  description: "Next.js static mdx blog starter template",
};
 */




export default async function Blog({params}) {
  const para = params

  console.log("params", para)

  const frontMatter = await getFilteredBlogFrontMatter()
  const blogs = sortBlogsByDate(frontMatter);


  //const allTags = getBlogTags(frontMatter)



  return (
    <>

      <div className='flex items-center h-40 '>
        <h1 className='text-5xl font-semibold'>Blog</h1>
      </div>

      <div className='grid gap-7 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>
      
        {blogs.map((blog) => (
          <Card key={blog.slug} item={blog} />
        ))}

      </div>
    </>
  )
}

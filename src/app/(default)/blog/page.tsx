import {sortBlogsByDate } from '@/lib/utils';
import { getFilteredBlogFrontMatter } from '@/lib/server-actions';
import { getBlogTags } from '@/lib/utils';
import Card from '@/components/card';
import Title from '@/components/title/title';
import { useState } from 'react';

/* export const metadata = {
  title: "Next Blog",
  description: "Next.js static mdx blog starter template",
};
 */



export default async function Overview() {

  const frontMatter = await getFilteredBlogFrontMatter()
  const blogs = sortBlogsByDate(frontMatter);


  //const allTags = getBlogTags(frontMatter)

  



  


  return (
    <> 

      <Title titles={['Blog', /* 'Blogue', 'ブログ', '블로그', '博客', 'Блог' */]} top='50%' left='0px' />

      <div className='grid gap-7 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>
        
      {blogs.map((blog) => (
          <Card key={blog.slug} item={blog} />
        ))} 

      </div>
    </>
  )
}

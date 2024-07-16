import {sortItemsByDate } from '@/lib/utils';
import { getFilteredBlogFrontMatter } from '@/lib/server-actions';


import Content from '@/components/content/content';
import About from '@/components/about/about';



export default async function Client() {

  const frontMatter = await getFilteredBlogFrontMatter()
  const blogs = sortItemsByDate(frontMatter).slice(0, 2);

  //console.log({blogs})


  return (
    <>
      <div className='p-5' />

       <Content blogs={blogs} /> 

      <div style={{ height: '70px' }} />

      <About />

      <div style={{ height: '70px' }} />

    </>
  )
}









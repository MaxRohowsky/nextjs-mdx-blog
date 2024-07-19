import { sortBlogsByDate } from '@/lib/utils';
import { getFilteredBlogFrontMatter } from '@/lib/server-actions';


import Content from '@/components/content/content';
import About from '@/components/about/about';
import Space from '@/components/space';


export default async function Client() {

  const frontMatter = await getFilteredBlogFrontMatter()
  const blogs = sortBlogsByDate(frontMatter).slice(0, 6);


  return (
    <>


      <Content blogs={blogs} />
  

      {/*      <div style={{ height: '70px' }} /> */}

      {/*    <About /> */}

      {/*       <div style={{ height: '70px' }} /> */}

    </>
  )
}









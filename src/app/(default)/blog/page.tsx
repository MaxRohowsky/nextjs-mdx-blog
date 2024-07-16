import Link from 'next/link';
import Particles from '@/components/dots/particles';
import {sortBlogsByDate } from '@/lib/utils';
import { getFilteredBlogFrontMatter } from '@/lib/server-actions';
import Card from '@/components/card/card';
export const metadata = {
  title: "Next Blog",
  description: "Next.js static mdx blog starter template",
};




export default async function Overview() {

  const frontMatter = await getFilteredBlogFrontMatter()
  const blogs = sortBlogsByDate(frontMatter);

  return (
    <>

      <div className='relative -z-10 w-0 h-0 top-[87px] left-[127px]'>
        <Particles numberOfParticles={10} radius={60} opacity={0.2} color='black' left={0} />
        <Particles numberOfParticles={30} radius={300} opacity={0.3} color='black' left={0} />
        <Particles numberOfParticles={40} radius={380} opacity={0.2} color='black' left={0} />
        <Particles numberOfParticles={50} radius={460} opacity={0.1} color='black' left={0} />
        <Particles numberOfParticles={60} radius={540} opacity={0.05} color='black' left={0} />
      </div>

      <div className='flex justify-between items-center whitespace-nowrap  w-full h-40  text-5xl p-4 my-6 overflow-hidden'  >
        <span className="opacity-100 font-bold" /* style={{background: "url('uk-flag.gif')", backgroundSize:"cover", backgroundClip:"text", WebkitTextFillColor:"transparent", backgroundPosition: "center"}} */>Blog. </span>
        <span className="opacity-5 hidden sm:block" >Blogue. </span>
        <span className="opacity-5 hidden sm:block">ブログ. </span>
        <span className="opacity-5 hidden md:block">블로그. </span>
        <span className="opacity-5 hidden md:block">博客. </span>
        <span className="opacity-5 hidden lg:block">Блог. </span>
      </div>

      <div className='grid gap-1 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>
        
      {blogs.map((blog) => (
          <Card key={blog.slug} item={blog} />
        ))} 

      </div>
    </>
  )
}
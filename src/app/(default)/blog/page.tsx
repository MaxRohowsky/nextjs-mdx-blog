
import Particles from '@/components/dots/particles';


import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Image from 'next/image';

const ignoreList = ['layout.tsx', 'page.tsx'];
const blogDirectory = path.join(process.cwd(), "src/app/(default)/blog");

export const metadata = {
  title: "Next Blog",
  description: "Next.js static mdx blog starter template",
};

const fileNames = fs.readdirSync(blogDirectory)
  .filter((fileName) => !ignoreList.includes(fileName));

const blogs = fileNames.map((fileName) => {
  const slug = fileName.replace(".mdx", "");
  const fullPath = path.join(blogDirectory, fileName, "page.mdx");


  const fileContents = fs.readFileSync(fullPath, "utf8");

  console.log("fileContents", fileContents)

  const { data: frontMatter } = matter(fileContents);

  const date = new Date(frontMatter.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return {
    slug,
    formattedDate,
    meta: frontMatter,
  };
});




export default function Overview() {
  return (
    <>

      <div className='relative -z-10 w-0 h-0  top-[87px] left-[127px]'>
        <Particles numberOfParticles={10} radius={60} opacity={0.2} color='black' left={0} />
        <Particles numberOfParticles={30} radius={300} opacity={0.3} color='black' left={0} />
        <Particles numberOfParticles={40} radius={380} opacity={0.2} color='black' left={0} />
        <Particles numberOfParticles={50} radius={460} opacity={0.1} color='black' left={0} />
        <Particles numberOfParticles={60} radius={540} opacity={0.05} color='black' left={0} />
      </div>

      <div className='flex justify-between  whitespace-nowrap text-slate-600 w-full h-40  text-5xl p-4 mb-6 overflow-hidden mt-8'  >
        <span className="opacity-100 font-bold" /* style={{background: "url('uk-flag.gif')", backgroundSize:"cover", backgroundClip:"text", WebkitTextFillColor:"transparent", backgroundPosition: "center"}} */>Blog. </span>
        <span className="opacity-10 hidden sm:block" >Blogue. </span>
        <span className="opacity-10 hidden sm:block">ブログ. </span>
        <span className="opacity-10 hidden md:block">블로그. </span>
        <span className="opacity-10 hidden md:block">博客. </span>
        <span className="opacity-10 hidden lg:block">Блог. </span>
      </div>

      <div className='grid gap-1 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>

        {blogs.map((blog) => (

          <div key={blog.slug} className=" p-2 rounded-xl  w-full h-full bg-white dark:bg-slate-800">
            <Link href={`/blog/${blog.slug}`} className="flex flex-col justify-between border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-6 w-full h-full">
              <h3 className="font-bold text-xl mb-2">{blog.meta.title}</h3>
              <p className="text-sm text-gray-500">{blog.meta.publishedOn}</p>
              <p className="py-4">{blog.meta.abstract}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {blog.meta.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer">Read more →</p>
            </Link>
          </div>

        ))}

      </div>
    </>
  )
}
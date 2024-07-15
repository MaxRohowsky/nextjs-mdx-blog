


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





      <div className='grid gap-1 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>

        {blogs.map((blog) => (

          <div key={blog.slug} className=" p-2 rounded-xl  w-full h-full bg-white dark:bg-slate-800">
            <Link href={`/blg/${blog.slug}`} className="flex flex-col justify-between border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-6 w-full h-full">
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
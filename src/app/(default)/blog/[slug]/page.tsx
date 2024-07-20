import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useMDXComponents } from '@/mdx-components';
import { extractHeadings } from "extract-md-headings";
import remarkFrontmatter from 'remark-frontmatter'
import Link from "next/link"
import rehypeSlug from 'rehype-slug'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import TableOfContent from "@/components/table-of-content";

// https://github.com/owolfdev/simple-mdx-blog/blob/main/app/blog/%5Bslug%5D/page.tsx
/* import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const post = await getPost(params);
    const title = post.frontMatter.title;
    const description = post.frontMatter.description;
  
    return {
      title: title,
      description: description,
      // add other metadata fields as needed
    };
  } */


/**
 * Generates static parameters for each post directory within 'src/(posts)'.
 * It filters out the 'layout.tsx' file and any non-directory entries, ensuring
 * only directories are considered for generating slugs.
 * 
 * @returns - array of objects where each object represents the populated dynamic segments of a single route
 * Docs: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
    const dir = path.join(process.cwd(), 'src/content/posts');
    // Read directory contents as directory entries
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // Filter out 'layout.tsx' and non-directory entries
    const directories = entries.filter(dirent => dirent.isDirectory() || (dirent.isFile() && dirent.name !== 'layout.tsx'));

    // Map directory names to params
    const params = directories.map(dirent => ({
        slug: dirent.name,
    }));

    return params;
}


async function getPost({ slug }: { slug: string }): Promise<{ frontMatter: any, content: string }> {
    try {
        const dir = path.join(process.cwd(), 'src/content/posts');


        const markdownFile = fs.readFileSync(path.join(dir, slug, "page.mdx"), "utf-8");


        const { data: frontMatter, content } = matter(markdownFile);


        return {
            frontMatter,
            content,
        };
    }
    catch (error) {
        console.error("Error fetching post:", error);
        throw new Error(`Unable to fetch the post for slug: ${slug}`);
    }
}


const options = {
    scope: {/* any variables you want to pass to MDX content */ },
    mdxOptions: {
        remarkPlugins: [remarkGfm, remarkFrontmatter],
        rehypePlugins: [rehypeHighlight, rehypeSlug],
        // any other MDX compiler options except 'outputFormat' and 'providerImportSource'
        useDynamicImport: true,
    },
    parseFrontmatter: true,
};


export default async function Post({ params: { slug } }) {



    const { frontMatter, content } = await getPost({ slug });
    const mdxComponents = useMDXComponents({});

    const dir = path.join(process.cwd(), 'src/content/posts');
    path.join(dir, slug, "page.mdx")
    const headings = extractHeadings(path.join(dir, slug, "page.mdx"));
    /*     console.log("headings", headings) */

    /*     const mdxSource = await serialize(content, {
            mdxOptions: {
                rehypePlugins: [rehypeHighlight],
            }})
    
            console.log("mdxSource", mdxSource) */

    console.log(headings)

    return (

        <div className='max-w-full flex flex-row  justify-center  md:items-start'>


            <article className='text-pretty w-full md:max-w-xl p-2'>
                <Breadcrumb className="max-w-full">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/blog">Blog</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={"/blog/" + slug} className=" overflow-hidden text-ellipsis w-80 whitespace-nowrap">{frontMatter.title}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>


                    </BreadcrumbList>
                </Breadcrumb>

                <MDXRemote source={content} options={options} components={mdxComponents} />
                <div className="text-sm text-gray-600 mt-8">
                    <p>Published on: {frontMatter.publishedOn}</p>
                    <p>Last Updated: {frontMatter.updatedOn}</p>
                </div>
            </article>
            
            <aside className='sticky md:pl-3 lg:pl-20 top-36 hidden md:block'>
            <TableOfContent headings={headings} frontMatter={frontMatter} />
            </aside>


        </div>



    );
}


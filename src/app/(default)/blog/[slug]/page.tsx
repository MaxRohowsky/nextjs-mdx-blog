import { MDXRemote } from "next-mdx-remote/rsc"

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { useMDXComponents } from '@/mdx-components';

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
    const dir = path.join(process.cwd(), 'src/(posts)');
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


async function getPost({ slug }: { slug: string }) {
    try {
        const dir = path.join(process.cwd(), 'src/(posts)');

        console.log("dir", dir)
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





export default async function Post({ params: { slug } }) {

    const { frontMatter, content } = await getPost({ slug });
    const mdxComponents = useMDXComponents({});


    return (
        <article className="prose prose-lg md:prose-lg lg:prose-lg mx-auto">

            <h1>{frontMatter.title}</h1>
            <MDXRemote source={content} components={mdxComponents} />
        </article>
    );
}
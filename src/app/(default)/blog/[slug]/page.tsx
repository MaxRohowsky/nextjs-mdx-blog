import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { cache } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useMDXComponents } from "@/mdx-components";
import { extractHeadings } from "extract-md-headings";
import remarkFrontmatter from "remark-frontmatter";
import rehypeSlug from "rehype-slug";
import TableOfContent from "@/components/table-of-content";
import { getBlogItemBySlug } from "@/lib/server-actions";
import type { Metadata } from "next";
import { pathToBlogPosts } from "@/lib/utils";
import { getViewsCount, increment } from "@/lib/supabase/queries";
import ViewCounter from "@/components/view-counter";
import * as mdx from "@/components/mdx"; // Blank Component to which you can add additional Components outside of useMDXComponents
import BlogBreadcrumb from "@/components/blog-breadcrumb";

/**
 * Generates metadata for a blog post based on its slug.
 */
export async function generateMetadata({ params, }: { params: { slug: string }; }): Promise<Metadata> {
  let BlogItem = await getBlogItemBySlug(params.slug);
  let { title, seoTitle, subtitle, excerpt } = BlogItem;

  return {
    title: title,
    description: seoTitle ?? subtitle ?? excerpt,
  };
}

/**
 * Generates static parameters for each post directory within 'pathToBlogPosts'.
 * It filters out the 'layout.tsx' file and any non-directory entries, ensuring
 * only directories are considered for generating slugs.
 *
 * @returns - array of objects where each object represents the populated dynamic segments of a single route
 * Docs: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  let dir = path.join(process.cwd(), pathToBlogPosts);
  // Read directory contents as directory entries
  let entries = fs.readdirSync(dir, { withFileTypes: true });

  // Filter out 'layout.tsx' and non-directory entries
  let directories = entries.filter(
    (dirent) =>
      dirent.isDirectory() || (dirent.isFile() && dirent.name !== "layout.tsx")
  );

  // Map directory names to params
  let params = directories.map((dirent) => ({
    slug: dirent.name,
  }));

  return params;
}

async function getPost({ slug, }: { slug: string }): Promise<{ frontMatter: any; content: string }> {
  try {
    let dir = path.join(process.cwd(), pathToBlogPosts);

    let markdownFile = fs.readFileSync(path.join(dir, `${slug}.mdx`), "utf-8");
    let { data: frontMatter, content } = matter(markdownFile);

    return {
      frontMatter,
      content,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

let options = {
  scope: {
    /* any variables you want to pass to MDX content */
  },
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
    // any other MDX compiler options except 'outputFormat' and 'providerImportSource'
    useDynamicImport: true,
  },
  parseFrontmatter: true,
};

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let allViews = await getViewsCount();
  console.log("allViews", allViews);
  console.log("slug", slug);
  incrementViews(slug);
  return <ViewCounter allViews={allViews} slug={slug} />;
}

export default async function Post({ params: { slug } }) {
  let { frontMatter, content } = await getPost({ slug });
  let mdxComponents = useMDXComponents({ mdx }); // 'mdx' is a small custom library that can provide a set of components. Access with mdx.ComponentName

  let dir = path.join(process.cwd(), pathToBlogPosts);
  let headings = extractHeadings(path.join(dir, `${slug}.mdx`));

  return (
    <div className="max-w-full flex flex-row  justify-center  md:items-start">
      <article className="text-pretty w-full md:max-w-xl p-2">
        <BlogBreadcrumb slug={slug} frontMatter={frontMatter} />

        <Views slug={slug} />

        <MDXRemote
          source={content}
          options={options}
          components={mdxComponents}
        />
      </article>

      <aside className="sticky md:pl-3 lg:pl-20 top-36 hidden md:block overflow-y-auto overflow-x-hidden max-h-[calc(100vh-15rem)] ">
        <TableOfContent headings={headings} frontMatter={frontMatter} />
      </aside>
    </div>
  );
}
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
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
import BlogBreadcrumb from "@/components/blog-breadcrumb";

/**
 * Generates metadata for a blog post based on its slug.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  let BlogItem = await getBlogItemBySlug(params.slug);

  let { title, subtitle, excerpt, image } = BlogItem;

  let description = subtitle ?? excerpt;

  let ogImage = `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Featured image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1080,
          alt: "Featured image",
        },
      ],
    },
  };
}

async function getPost({
  slug,
}: {
  slug: string;
}): Promise<{ frontMatter: any; content: string }> {
  try {
    let dir = path.join(process.cwd(), pathToBlogPosts);
    let filePath = path.join(dir, `${slug}.mdx`);
    let markdownFile = fs.readFileSync(filePath, "utf-8");
    console.log(filePath);
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
  scope: {},
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
    useDynamicImport: true,
  },
  parseFrontmatter: true,
};

export default async function Post({ params: { slug } }) {
  let { frontMatter, content } = await getPost({ slug });
  let mdxComponents = useMDXComponents({ }); 

  let dir = path.join(process.cwd(), pathToBlogPosts);
  let headings = extractHeadings(path.join(dir, `${slug}.mdx`));

  return (
    <div className="flex max-w-full flex-row justify-between md:items-start">
      <article className="w-full text-pretty p-2 md:max-w-xl">
        <BlogBreadcrumb slug={slug} frontMatter={frontMatter} />

        <MDXRemote
          source={content}
          options={options}
          components={mdxComponents}
        />
      </article>

      <aside
        className="scrollbar sticky top-36 hidden max-h-[calc(100vh-15rem)] w-72 overflow-y-auto
          md:block"
      >
        <TableOfContent headings={headings} frontMatter={frontMatter} />
      </aside>
    </div>
  );
}

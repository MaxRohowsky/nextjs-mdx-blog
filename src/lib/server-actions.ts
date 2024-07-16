'use server'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';


// example to check if fs works
export async function checkFs() {

    const blogDirectory = path.join(process.cwd(), 'src/app/(default)/blog/(posts)');
    const readDirectory = fs.readdirSync(blogDirectory);
    console.log(readDirectory);
}


/**
 * Get the blog front matter of all blog posts.
 * @returns The front matter of all blog posts in an array.
 */

export interface BlogFrontMatter {
    title: string;
    seoTitle: string;
    abstract: string;
    isPublished: boolean;
    publishedOn?: string;
    layout: string;
    featured?: boolean;
    featuredImage?: string;
    tags: string[];
    slug: string;
}

export async function getBlogFrontMatter(): Promise<BlogFrontMatter[]> {
    const dir = path.join(process.cwd(), 'src/app/(default)/blog/(posts)');
    const dirItems = fs.readdirSync(dir);
    const frontMatter = dirItems.map((fileName) => {
        
        const fullPath = path.join(dir, fileName, "page.mdx");
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        // add slug to data
        data.slug = fileName.replace(".mdx", "");

        // format publishedOn date
        if (data.publishedOn) {
            try {
                data.publishedOn = format(new Date(data.publishedOn), 'EEEE, dd MMMM yyyy');
            } catch (error) {
                data.publishedOn = "Date Format can't be interpreted";
            }
        } else {
            data.publishedOn = 'Not yet published';
        }
        return data;
    }
    );
    return frontMatter as BlogFrontMatter[];
}




/**
 * Get the blog front matter based on the provided filters. Upper and lower case are ignored.
 * @param options The filter options e.g. { featured: true, tag: 'personal', layout: 'Article' }.
 * @returns The front matter of the filtered blog posts in an array.
 */

interface FrontMatterOptions {
    featured?: boolean;
    tag?: string;
    layout?: string;
    isPublished?: boolean;
}

export async function getFilteredBlogFrontMatter(options: FrontMatterOptions = {}): Promise<BlogFrontMatter[]> {
    const frontMatter = await getBlogFrontMatter();

    const filteredFrontMatter = frontMatter.filter((fm) => {
        if (options.featured && !fm.featured) {
            return false;
        }

        if (options.tag && !fm.tags.map(tag => tag.toLowerCase()).includes(options.tag.toLowerCase())) {
            return false;
        }

        if (options.layout && fm.layout.toLowerCase() !== options.layout.toLowerCase()) {
            return false;
        }

        if (options.isPublished && !fm.isPublished) {
            return false;
        }

        return true;
    });

    return filteredFrontMatter as BlogFrontMatter[];
}




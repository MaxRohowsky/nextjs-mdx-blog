
import { readdir, readFile } from 'node:fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import {pathToBlogPosts} from './utils';




/**
 * Get the blog front matter of all blog posts.
 * @returns The front matter of all blog posts in an array.
 */
export async function getAllBlogItems(): Promise<BlogItem[]> {
    const dir = path.join(process.cwd(), pathToBlogPosts);
    const dirItems = await readdir(dir);
    const filteredItems = dirItems.filter(item => item !== 'layout.tsx');

    const frontMatter = await Promise.all(filteredItems.map(async (fileName) => {
        const fullPath = path.join(dir, fileName);
        const fileContents = await readFile(fullPath, "utf8");

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
    }));

    return frontMatter as BlogItem[];
}

/**
 * Get a single blog item by its unique slug.
 * @param slug The unique slug of the blog item.
 * @returns The blog item with the matching slug, or null if not found.
 */
export async function getBlogItemBySlug(slug: string): Promise<BlogItem | null> {
    const blogItems = await getAllBlogItems();
    const normalizedSlug = slug.trim().toLowerCase();
    return blogItems.find(item => item.slug.toLowerCase() === normalizedSlug) || null;
}

/**
 * Get the blog front matter based on the provided filters. Upper and lower case are ignored.
 * @param options The filter options e.g. { featured: true, tag: 'personal', layout: 'Article' }.
 * @returns The front matter of the filtered blog posts in an array.
 */
export async function getFilteredBlogItems(options: BlogFilterOptions = {}): Promise<BlogItem[]> {
    const blogItems = await getAllBlogItems();

    const filteredFrontMatter = blogItems.filter((item) => {
        if (options.isFeatured && !item.isFeatured) {
            return false;
        }

        if (options.tags && options.tags.length > 0 && !options.tags.every(optionTag => item.tags.map(tag => tag.toLowerCase()).includes(optionTag.toLowerCase()))) {
            return false;
        }

        if (options.isPublished && !item.isPublished) {
            return false;
        }

        return true;
    });

    return filteredFrontMatter;
}





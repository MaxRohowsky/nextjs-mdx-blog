//import { getBlogPosts } from 'app/db/blog';

import { getFilteredBlogItems } from '@/lib/server-actions';


export default async function sitemap() {
    let posts = await getFilteredBlogItems();
    let blogs = posts.map((post) => ({
        url: `https://maxontech.io/blog/${post.slug}`,
        lastModified: post.updatedOn,
    }));

    let routes = ['', '/blog', '/projects'].map((route) => ({
        url: `https://maxontech.io${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes, ...blogs];
}
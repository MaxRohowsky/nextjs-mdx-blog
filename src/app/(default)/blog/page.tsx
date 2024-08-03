import { getAllBlogItems } from '@/lib/server-actions';
import { getFilteredBlogItems, sortBlogsByDate } from '@/lib/utils';

import Client from './client';

export default async function Blog() {

  let blogItems = await getAllBlogItems()
  let publishedBlogItems = getFilteredBlogItems({ isPublished: true }, blogItems);
  let sortedPublishedBlogItems = sortBlogsByDate(publishedBlogItems);

  return (
    <Client blogItems={sortedPublishedBlogItems}  />
  )
}



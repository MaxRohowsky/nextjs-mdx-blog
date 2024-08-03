import { getAllBlogItems } from '@/lib/server-actions';


import Client from './client';

export default async function Blog() {

  let blogItems = await getAllBlogItems()
  

  return (
    <Client blogItems={blogItems}  />
  )
}



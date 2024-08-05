import Hero from '@/components/hero';
import Space from '@/components/space';
import Content from '@/components/content';
import { sortBlogsByDate } from '@/lib/utils';
import { getAllBlogItems } from '@/lib/server-actions';

export default async function Home() {
  let allBlogItems = await getAllBlogItems()
  let blogs = sortBlogsByDate(allBlogItems).slice(0, 5);

  return (
    <>
      <Hero />

      <Space className='h-8 lg:h-16' />

      <Content  blogs={blogs} />
    </>
  )
}




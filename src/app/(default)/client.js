'use client'
import Content from '@/components/content/content';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';



export default function Client({ posts, courses }) {


  return (
    <>

      <Hero />

      <Content posts={posts} courses={courses} />

      <About />

    </>
  )
}









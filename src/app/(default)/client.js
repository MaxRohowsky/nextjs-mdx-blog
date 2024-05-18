'use client'
import Content from '@/components/content/content';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';



export default function Client({ posts, courses    }) {


  return (
    <>
      <div style={{ height: '70px' }} />

      <Hero />

      <div style={{ height: '70px' }} />

      <Content posts={posts} courses={courses} />

      <div style={{ height: '70px' }} />

      <About />

      <div style={{ height: '70px' }} />
      
    </>
  )
}









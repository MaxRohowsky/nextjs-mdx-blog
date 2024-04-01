'use client'
import Content from '@/components/content/content';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';



export default function Client({ posts, courses }) {


  return (
    <>

      {/*<Head>
        <meta charSet='utf-8' />
        <title>Max On Tech - Exploring Tech</title>
        <meta property="og:title" content="Max On Tech - Exploring Tech" />

        <meta name="description" content="Fast, Fun, and Free Coding Tutorials" />
        <meta property="og:description" content="Fast, Fun, and Free Coding Tutorials" />

        <meta property="og:image" content="https://www.maxontech.io/transparent-logo.png" />
        <meta property="og:url" content="https://www.maxontech.io/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>*/}

      <Hero />


      <Content posts={posts} courses={courses} />


      <About />


   



    </>
  )
}









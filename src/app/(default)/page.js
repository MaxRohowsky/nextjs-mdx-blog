'use server'
import Client from './client';
import Image from 'next/image';
import Particles from '@/components/dots/particles';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

async function getPosts() {
  const response = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          {
            posts(first: 4) {
              edges {
                node {
                  id
                  link
                  slug
                  uri
                  title
                  date
                  excerpt
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
          `
    }),
  });

  const data = await response.json();


  return { ...data?.data.posts };
}




export default async function Home() {

  const posts = await getPosts();


  return (
    <>


      <div className='relative bg-gradient-to-tr from-blue-700 to-blue-400 dark:from-zinc-800 dark:to-zinc-900 h-80 rounded-sm overflow-hidden'>

      <RoughNotation type="underline" show={true} color='#abe2ff' >Web</RoughNotation>

      <Particles />

        <Image className='absolute right-0' src='/dot-hero.svg' alt='hero' height='180' width='180' />


      </div>





      < Client posts={posts} />

    </>
  )
}



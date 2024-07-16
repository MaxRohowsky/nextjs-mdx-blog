'use server'
import Client from './client';
import Image from 'next/image';
import Particles from '@/components/dots/particles';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import fs from 'fs';
import {getFileNames, getFormattedDate} from '@/lib/utils';
import matter from 'gray-matter';
import path from 'path';









export default async function Home() {






  return (
    <>


      <div className='relative bg-gradient-to-tr from-blue-700 to-blue-400 dark:from-zinc-800 dark:to-zinc-900 h-80 rounded-sm overflow-hidden'>

        <div className=' text-white text-7xl top m-4'>
          <RoughNotation type="underline" show={true} color='white' >Blog.</RoughNotation>
        </div>

        <div className=' text-white text-xl top mt-8 ml-4'>
          Hi, I'm Max. <br />
          A corner of the web where I hide and archive my thoughts. <br />
          I write about Indie Hacking, Tech and the Web.
        </div>


        <Particles numberOfParticles={60} radius={200} opacity={0.5} />
        <Particles numberOfParticles={50} radius={220} opacity={0.4} />
        <Particles numberOfParticles={40} radius={250} opacity={0.3} />
        <Particles numberOfParticles={30} radius={290} opacity={0.2} />
        <Particles numberOfParticles={20} radius={340} opacity={0.1} />


        <Image className='absolute right-0 top-0' src='/dot-hero.svg' alt='hero' height='180' width='180' />


      </div>





      < Client  />

    </>
  )
}



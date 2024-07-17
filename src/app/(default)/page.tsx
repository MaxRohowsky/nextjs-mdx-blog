'use server'
import Client from './client';
import Image from 'next/image';
import Particles from '@/components/dots/particles';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


export default async function Home() {

  return (
    <>

      <div className='relative bg-gradient-to-tr from-blue-700 to-blue-400 dark:from-zinc-800 dark:to-zinc-900  h-72  md:h-80 rounded-sm overflow-hidden my-5 lg:my-8'>

        <div className=' text-white text-2xl sm:text-4xl lg:text-7xl m-4'>
          <RoughNotation type="underline" show={true} color='white' >Blog.</RoughNotation>
        </div>

        <div className='absolute text-white text-sm bottom-0 m-4'>
          <p className='text-lg md:pb-1 sm:text-2xl'>Hi, I'm Max.</p>
          <p className='w-2/3 sm:text-lg font-light'>
            Welcome to my corner of the internet. I write about software engineering and indie hacking.
          </p>


        </div>

        <div className='hidden md:block'>
          <Particles numberOfParticles={60} radius={200} opacity={0.5} />
          <Particles numberOfParticles={50} radius={220} opacity={0.4} />
          <Particles numberOfParticles={40} radius={250} opacity={0.3} />
          <Particles numberOfParticles={30} radius={290} opacity={0.2} />
          <Particles numberOfParticles={20} radius={340} opacity={0.1} />
        </div>

        <div className='absolute md:hidden  right-0  top-36 -mr-10'>
          <Particles numberOfParticles={50} radius={140} opacity={0.5} />
          <Particles numberOfParticles={40} radius={160} opacity={0.4} />
          <Particles numberOfParticles={30} radius={190} opacity={0.3} />
          <Particles numberOfParticles={20} radius={230} opacity={0.2} />
          <Particles numberOfParticles={10} radius={280} opacity={0.1} />
        </div>

        <Image className='absolute right-0 top-0 h-full -mr-8 mt-2 sm:-mr-10 md:-mr-1' src='/dot-hero.svg' alt='hero' height='180' width='180' />

      </div>

      < Client />

    </>
  )
}



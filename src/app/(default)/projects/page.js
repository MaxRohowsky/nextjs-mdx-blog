
import { projects } from '@/components/projects';
import Link from 'next/link';
import Image from 'next/image';
import Particles from '@/components/dots/particles';

export const metadata = {
  title: "Projects",
  description: "Portfolio Projects by Max on Tech"
}

// https://codepen.io/creativeocean/pen/JjemXGY

export default async function Courses() {
  return (
    <>
      <div className='relative -z-10 w-0 h-0  top-[87px] left-[217px]'>
        <Particles numberOfParticles={10} radius={60} opacity={0.2} color='black' left={0} />
        <Particles numberOfParticles={30} radius={300} opacity={0.3} color='black' left={0} />
        <Particles numberOfParticles={40} radius={380} opacity={0.2} color='black' left={0} />
        <Particles numberOfParticles={50} radius={460} opacity={0.1} color='black' left={0} />
        <Particles numberOfParticles={60} radius={540} opacity={0.05} color='black' left={0} />
      </div>

      <div className='flex justify-between  whitespace-nowrap text-slate-600 w-full h-40  text-5xl p-4 mb-6 overflow-hidden mt-8'  >
        <span className="opacity-100 font-bold">Projects. </span>
        <span className="opacity-10 hidden sm:block" >Projets. </span>
        <span className="opacity-10 hidden sm:block">프로젝트. </span>
        <span className="opacity-10 hidden md:block">项目. </span>
        <span className="opacity-10 hidden lg:block">Проект. </span>
      </div>

      <div className='grid gap-1 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>
        {projects.map((project) => (

          <div key={project.slug} className=" p-2 rounded-xl  w-full h-full bg-white dark:bg-slate-800">
            <Link href={`/blg/${project.slug}`} className="flex flex-col justify-between border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-6 w-full h-full">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.date}</p>
              <p className="py-4">{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer">Read more →</p>
            </Link>
          </div>

        ))}

      </div>



    </>



  );
}



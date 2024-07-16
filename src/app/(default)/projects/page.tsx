
//import { projects } from '@/components/projects';
'use client'

import Particles from '@/components/dots/particles';
import { getFilteredProjects, getProjectTags } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import Card from '@/components/card/card';
import { Checkbox } from "@/components/ui/checkbox"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

/* export const metadata = {
  title: "Projects",
  description: "Portfolio Projects by Max on Tech"
} */

// https://codepen.io/creativeocean/pen/JjemXGY

export default function Projects() {

  const allTags = getProjectTags()

  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const displayTags = isFiltered ? selectedTags : undefined

  const projects = getFilteredProjects({ tags: displayTags });

  const handleTagSelection = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }

  }

  const handleResetFilters = () => {
    setSelectedTags([]);
  }

  useEffect(() => {
    setIsFiltered(selectedTags.length > 0);
    console.log("filter changed")
    console.log(isFiltered)
  }, [selectedTags, isFiltered]);


  return (
    <>

      <Background />

      <Header />

      <Filter allTags={allTags} selectedTags={selectedTags} handleResetFilters={handleResetFilters} handleTagSelection={handleTagSelection} />

      <div className='grid gap-1 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>
        {projects.map((project) => (

         <Card key={project.slug} item={project} />  
         

        ))}

      </div>



    </>



  );
}




function Background() {
  return (
    <>
      <div className='relative -z-10 w-0 h-0  top-[87px] left-[217px]'>
        <Particles numberOfParticles={10} radius={60} opacity={0.2} color='black' left={0} />
        <Particles numberOfParticles={30} radius={300} opacity={0.3} color='black' left={0} />
        <Particles numberOfParticles={40} radius={380} opacity={0.2} color='black' left={0} />
        <Particles numberOfParticles={50} radius={460} opacity={0.1} color='black' left={0} />
        <Particles numberOfParticles={60} radius={540} opacity={0.05} color='black' left={0} />
      </div>
    </>
  )
}

function Header() {
  return (
    <>
      <div className='flex justify-between whitespace-nowrap text-slate-600 dark:text-slate-300 w-full lg:h-40 text-3xl lg:text-5xl p-4 mb-6 overflow-hidden md::mt-8'  >
        <span className="opacity-100 font-bold">Projects. </span>
        <span className="opacity-10 hidden sm:block" >Projets. </span>
        <span className="opacity-10 hidden sm:block">프로젝트. </span>
        <span className="opacity-10 hidden sm:block">项目. </span>
        <span className="opacity-10 hidden sm:block">Проект. </span>
      </div>
    </>
  )
}

function Filter({ allTags, selectedTags, handleResetFilters, handleTagSelection }) {
  return (
    <>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 lg:flex gap-2 m-2">
            <ListFilter /> Filter
          </Button>
          </PopoverTrigger>

        <PopoverContent className='  w-48 p-2 flex flex-col gap-2 justify-between'>
          <Button
            variant="secondary"
            className='w-full hover:bg-red-400 hover:text-white'
            onClick={handleResetFilters}
          >
            Reset Filters
          </Button>

          <ScrollArea className=' h-52 pr-2'>
            {allTags.map((tag) => (
              <ul className='py-1 px-1 w-full mr-2'>
                <li className='flex flex-row gap-2 w-full items-center px-2 py-1 border border-neutral-100 rounded-md '>
                  <Checkbox className='border-none bg-neutral-100' checked={selectedTags.includes(tag)} id={tag} onCheckedChange={() => handleTagSelection(tag)} />
                  <label
                    htmlFor={tag}
                    className=" w-full "
                  >
                    {tag}
                  </label>
                </li>
              </ul>
            ))}
          </ScrollArea>



        </PopoverContent>
      </Popover>


    </>
  );

}


interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    img: string;
    link: string;
  };
}


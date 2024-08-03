import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"

import { Checkbox } from "@/components/ui/checkbox"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export default function Filter({ allTags, selectedTags, handleResetFilters, handleTagSelection }) {
    return (
      <>
  
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className=" w-28 lg:flex gap-2 my-4">
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
  
            <ScrollArea className='h-52 pr-2'>
              <ul className='py-1 px-1 w-full mr-2 flex flex-col gap-2'>
                {allTags.map((tag) => (
                  <li key={tag} className='flex flex-row gap-2 w-full items-center px-2 py-1 border border-neutral-100 rounded-md'>
                    <Checkbox className='border-none bg-neutral-100' checked={selectedTags.includes(tag)} id={tag} onCheckedChange={() => handleTagSelection(tag)} />
                    <label htmlFor={tag} className="w-full">
                      {tag}
                    </label>
                  </li>
                ))}
              </ul>
            </ScrollArea>
  
  
          </PopoverContent>
        </Popover>
  
  
      </>
    );
  
  }
  
  
  
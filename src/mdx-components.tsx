/**
 * This file is required to use MDX with App Router and will not work without it.
 * https://nextjs.org/docs/app/building-your-application/configuring/mdx
 */

import Image, { ImageProps } from 'next/image'
import type { MDXComponents } from 'mdx/types'
import { Info, Flame } from 'lucide-react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g., to add styling.
    h1: ({ id, children }) => <h1 id={id} className="text-3xl font-bold  my-6">{children}</h1>,
    h2: ({ id, children }) => <h2 id={id} className="text-2xl font-semibold  my-4">{children}</h2>,
    h3: ({ id, children }) => <h3 id={id} className="text-xl font-medium  my-2">{children}</h3>,
    h4: ({ id, children }) => <h4 id={id} className="text-lg font-medium  my-2">{children}</h4>,
    h5: ({ id, children }) => <h5 id={id} className="text-base font-medium  my-2">{children}</h5>,
    h6: ({ id, children }) => <h6 id={id} className="text-base font-medium  my-2">{children}</h6>,
    p: ({ children }) => <p className=" text-lg leading-relaxed my-4 max-w-full">{children}</p>,
    a: ({ children, ...props }) => <a className="text-blue-500 hover:text-blue-600 underline" {...props}>{children}</a>,
    img: (props) => (
      <Image
        width={400}
        height={400}
        className='mx-auto shadow-md rounded-sm'
        {...(props as ImageProps)}
      />
    ),
    ul: ({ children }) => <ul className="list-disc pl-5 my-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-5 my-4">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    code: ({ children, className }) => (
      className?.includes('hljs') 
        ? <code className={className}>{children}</code>
        : <code className="bg-slate-100 dark:bg-slate-700 dark:text-white p-[2px] rounded-sm">{children}</code>
    ),
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4">{children}</blockquote>,

    Caption: ({ children }) => (
      <figcaption className="text-neutral-500 text-xs mt-2 text-center">{children}</figcaption>
    ),

    Note: ({ children }) => (
      <div className="bg-blue-50 dark:bg-blue-700 border-l-[3px] border-blue-500 p-4 relative rounded-sm my-8">
        <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
          <Info className='bg-white dark:bg-slate-900 dark:text-white  text-blue-500  rounded-full p-1' size={32} />
        </div>
        {children}
      </div>
    ),


    Warning: ({ children }) => (
      <div className="bg-red-50 dark:bg-red-700 border-l-[3px] border-red-500 dark:border-red-300 p-4 relative rounded-sm my-8">
        <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
          <Flame className='bg-white dark:bg-slate-900 text-red-500 rounded-full p-1' size={32} />
        </div>
        {children}
      </div>
    ),



    ...components,

  }
}




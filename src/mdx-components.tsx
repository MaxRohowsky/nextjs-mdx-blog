/**
 * This file is required to use MDX with App Router and will not work without it.
 * https://nextjs.org/docs/app/building-your-application/configuring/mdx
 */

import Image, { ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";
import { Info, Flame, BookType } from "lucide-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g., to add styling.
    h1: ({ id, children }) => (
      <h1 id={id} className="text-3xl font-bold  my-6">
        {children}
      </h1>
    ),
    h2: ({ id, children }) => (
      <h2 id={id} className="text-2xl font-semibold  my-4">
        {children}
      </h2>
    ),
    h3: ({ id, children }) => (
      <h3 id={id} className="text-xl font-medium  my-2">
        {children}
      </h3>
    ),
    h4: ({ id, children }) => (
      <h4 id={id} className="text-lg font-medium  my-2">
        {children}
      </h4>
    ),
    h5: ({ id, children }) => (
      <h5 id={id} className="text-base font-medium  my-2">
        {children}
      </h5>
    ),
    h6: ({ id, children }) => (
      <h6 id={id} className="text-base font-medium  my-2">
        {children}
      </h6>
    ),
    p: ({ children }) => (
      <p className=" text-lg leading-relaxed my-4 max-w-full">{children}</p>
    ),
    a: ({ children, ...props }) => (
      <a className="text-blue-500 hover:text-blue-600 underline" {...props}>
        {children}
      </a>
    ),
    img: (props) => (
      <Image
        width={400}
        height={400}
        className="mx-auto shadow-md rounded-sm"
        {...(props as ImageProps)}
      />
    ),
    ul: ({ children }) => <ul className="list-disc pl-5 my-4">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 my-4">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    code: ({ children, className }) =>
      className?.includes("hljs") ? (
        <code className={`${className} rounded-sm`}>{children}</code>
      ) : (
        <code className="bg-slate-100 dark:bg-slate-700 dark:text-white p-[2px] rounded-sm">
          {children}
        </code>
      ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => <pre className=" rounded-md">{children}</pre>,

    Caption: ({ children }) => (
      <figcaption className="text-neutral-500 text-xs mt-2 text-center">
        {children}
      </figcaption>
    ),

    Note: ({ children }) => (
      <span className="bg-blue-50 dark:bg-blue-700 border-l-[3px] border-blue-500 p-4 relative rounded-sm my-8 block">
        <span className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
          <Info
            className="bg-white dark:bg-slate-900 dark:text-white text-blue-500 rounded-full p-1"
            size={32}
          />
        </span>
        {children}
      </span>
    ),

    Define: ({ children, definition }) => (
      <span className="relative group mr-2 underline decoration-dotted decoration-blue-500" style={{ textUnderlineOffset: "3px" }}>
        {children}
        <span className="absolute top-0 right-0 font-semibold text-sm transform -translate-y-1 translate-x-2 text-blue-500">
          ?
        </span>
        <span className="absolute opacity-0 border-l-[3px] border-indigo-500 group-hover:opacity-100 group-hover:scale-100 
        scale-0 transition-all duration-500 z-10 w-60 bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)] dark:bg-gray-700  dark:text-gray-200 text-sm font-medium rounded-lg 
        px-4 py-2 mt-1 right-0" style={{ top: '100%', left: '50%', transform: 'translate(-50%, 10px)' }}>
          {definition}
          <span className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
          <BookType
            className="bg-white dark:bg-slate-900 dark:text-white text-indigo-500 rounded-full p-1"
            size={32}
          />
        </span>
        </span>
      </span>
    ),

    Warning: ({ children }) => (
      <span className="bg-red-50 dark:bg-red-700 border-l-[3px] border-red-500 dark:border-red-300 p-4 relative rounded-sm my-8 block">
        <span className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
          <Flame
            className="bg-white dark:bg-slate-900 text-red-500 rounded-full p-1"
            size={32}
          />
        </span>
        {children}
      </span>
    ),

    ...components,
  };
}

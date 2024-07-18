/**
 * This file is required to use MDX with App Router and will not work without it.
 * https://nextjs.org/docs/app/building-your-application/configuring/mdx
 */

import Image, { ImageProps } from 'next/image'
import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
      // Allows customizing built-in components, e.g., to add styling.
      h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 my-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl font-semibold text-gray-800 my-3">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-medium text-gray-700 my-2">{children}</h3>,
      p: ({ children }) => <p className="text-base text-gray-600 leading-relaxed my-4 max-w-full">{children}</p>,
      a: ({ children, ...props }) => <a className="text-blue-500 hover:text-blue-600 underline" {...props}>{children}</a>,
      img: (props) => (
        <Image
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          {...(props as ImageProps)}
        />
      ),
      ul: ({ children }) => <ul className="list-disc pl-5 text-gray-600 my-4">{children}</ul>,
      ol: ({ children }) => <ol className="list-decimal pl-5 text-gray-600 my-4">{children}</ol>,
      li: ({ children }) => <li className="mb-2">{children}</li>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600 my-4">{children}</blockquote>,
      ...components,
  }
}


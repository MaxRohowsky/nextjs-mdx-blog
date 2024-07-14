/**
 * This file is required to use MDX with App Router and will not work without it.
 * https://nextjs.org/docs/app/building-your-application/configuring/mdx
 */

import Image, { ImageProps } from 'next/image'
import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <h1 style={{ fontSize: '50px' }}>{children}</h1>,
        img: (props) => (
          <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            {...(props as ImageProps)}
          />
        ),
        ...components,
      }
}
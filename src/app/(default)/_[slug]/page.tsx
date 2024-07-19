import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'

import { CustomMDX } from '@/components/mdx-remote'

// app/page.js
export default async function Home({ params }) {
  console.log(params)

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: `---
title: RSC Frontmatter Example
---
# Hello World
This is from Server Components!
`,
    options: { parseFrontmatter: true },
  })

  console.log(content)
  return (
    <>
    <h1>{frontmatter.title}</h1>
    {content}
    <CustomMDX source={`${content}`} />
    </>

/*     <CustomMDX
      source={`# Hello World
      ##  Hello World
      This is from Server Components!
    `}
    /> */
  )
}



/*   return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemote
        source={`# Hello World

        This is from Server Components!
        `}
      />
    </Suspense>
  )
} */
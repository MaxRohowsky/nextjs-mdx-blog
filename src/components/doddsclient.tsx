'use client'
import * as React from 'react'
import {getMDXComponent} from 'mdx-bundler/client'

export default function Doddsclient({code, frontmatter}) {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
/*   console.log("code", code) */
/* console.log("frontmatter", frontmatter)

 */
  const Component = React.useMemo(() => getMDXComponent(code), [code]) 
/* console.log("code", code) */

  return (
    <>
{/*       <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header> */}
      <main className='bg-red-200'>
        hi
    <Component /> 
      </main>
    </>
  )
}
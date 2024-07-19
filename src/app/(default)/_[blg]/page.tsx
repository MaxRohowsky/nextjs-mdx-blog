import { bundleMDX } from 'mdx-bundler'

import Doddsclient from '@/components/doddsclient'
import fs from 'fs/promises';
import path from 'path';


export default async function Post({ params }) {

    const mdxFilePath = path.join(process.cwd(),'src' , 'mdxfiles', 'example.mdx');
    const mdxSource = await fs.readFile(mdxFilePath, 'utf8');
    console.log("mdxSource", mdxFilePath)
    

/*     const mdxSource = `
    ---
    title: Example Post
    published: 2021-02-13
    description: This is some description
    ---
    
    # Wahoo
    
    import Demo from './demo'
    
    Here's a **neat** demo:
    
    <Demo />
    `.trim() */


/*     const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo



Here's a **neat** demo:


`.trim() */
    
    const result = await bundleMDX({
        source: mdxSource,
        files: {}
       
    })




    const {code, frontmatter} = result

/*     console.log("code", code)
    console.log("frontmatter", frontmatter) */





    return (

        <div>
       <Doddsclient code={code} frontmatter={frontmatter} />   
        </div>
 
    )
}
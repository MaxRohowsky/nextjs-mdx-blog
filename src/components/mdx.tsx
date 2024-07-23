'use client'
// Caption.js
import React from 'react';
import { Info, Flame } from 'lucide-react';
import Playground from "@agney/playground";
import IProps from  "@agney/playground";

export const Example = ({ children }) => (
  <div className="bg-blue-50 border-l-[3px] border-blue-500 p-4 relative rounded-sm my-5">
    <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
      <Info className='bg-white text-blue-500 rounded-full p-1' size={32} /> 
    </div>
    {children}
  </div>
);



export const CodePlayground: React.FC<any> = ({ ...props }) => <Playground {...props}/>


{/*

Here's how to use the codeplayground in the mdx.

<mdx.CodePlayground
 id="example"
initialSnippet={{
    markup: `<div id=app />`,
    css: ``,
    javascript: `import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const app = html\`<div>Hello World from Playground!</div>\`

render(app, document.getElementById('app'));`,
  }}
defaultEditorTab="javascript"
transformJs
/>



  */}


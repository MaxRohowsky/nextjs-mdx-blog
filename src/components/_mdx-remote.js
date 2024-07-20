// components/mdx-remote.js
import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h1: (props) => (
    <h1 {...props} className="font-semibold">
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 {...props} className="text-red-500">
      {props.children}
    </h2>
  ),
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
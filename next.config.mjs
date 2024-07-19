import nextMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [rehypeHighlight],
  },
})

const nextConfig = {
  images: {
    domains: ['hosting189589.a2f4e.netcup.net'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', 'md'],
}

export default withMDX(nextConfig)
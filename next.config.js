const withMDX = require('@next/mdx')()


module.exports = {
  images: {
    domains: ['hosting189589.a2f4e.netcup.net'],
  },
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)
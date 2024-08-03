export const metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog | Max on Tech",
  },
  description: 'Blog posts on Software Engineering and Indie Hacking by Max Rohowsky',
  openGraph: {
    title: 'Max Rohowsky',
    description: 'Software Engineering & Indie Hacking',
    url:  'https://maxontech.io/blog',
    images: [
      {
        url: 'https://maxontech.io/api/og?title=maxontech.io',
      },
    ],
    siteName: 'Max Rohowsky',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Max Rohowsky',
    card: 'summary_large_image',
    description: 'Software Engineering & Indie Hacking',
    url: 'https://maxontech.io/blog',
    images: ['https://maxontech.io/api/og?title=maxontech.io']
  }
}


export default function MdxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}

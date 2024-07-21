export const metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog | Max on Tech",
  },
  description: 'Blog posts on Software Engineering and Indie Hacking by Max Rohowsky'
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

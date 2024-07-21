export const metadata = {
  title: {
    default: "hi",
    template: "%s | Blog | Max on Tech",
  },
  description: "Blog posts about Software Engineering and Indie Hacking by Max Rohowsky",
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

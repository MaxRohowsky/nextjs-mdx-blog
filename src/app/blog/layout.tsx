export const metadata = {
  title: {
    default: "Blog",
    template: `%s | Blog | ${process.env.FIRST_NAME} ${process.env.LAST_NAME}`,
  },
  description: process.env.BLOG_TITLE,
  openGraph: {
    title: `${process.env.FIRST_NAME} ${process.env.LAST_NAME}`,
    description: "Software Engineering & Indie Hacking",
    url: `${process.env.BASE_URL}/blog`,
    images: [
      {
        url: `${process.env.BASE_URL}/api/og?title=${process.env.BASE_URL}`,
      },
    ],
    siteName: `${process.env.FIRST_NAME} ${process.env.LAST_NAME}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: `${process.env.FIRST_NAME} ${process.env.LAST_NAME}`,
    card: "summary_large_image",
    description: process.env.BLOG_TITLE,
    url: `${process.env.BASE_URL}/blog`,
    images: [`${process.env.BASE_URL}/api/og?title=${process.env.BASE_URL}`],
  },
};

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
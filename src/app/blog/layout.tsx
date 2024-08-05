export const metadata = {
  title: {
    default: "Blog",
    template: `%s | Blog | ${process.env.NEXT_PUBLIC_FIRST_NAME} ${process.env.NEXT_PUBLIC_LAST_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_BLOG_DESCRIPTION,
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_FIRST_NAME} ${process.env.NEXT_PUBLIC_LAST_NAME}`,
    description: "Software Engineering & Indie Hacking",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
    ],
    siteName: `${process.env.NEXT_PUBLIC_FIRST_NAME} ${process.env.NEXT_PUBLIC_LAST_NAME}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: `${process.env.NEXT_PUBLIC_FIRST_NAME} ${process.env.NEXT_PUBLIC_LAST_NAME}`,
    card: "summary_large_image",
    description: process.env.NEXT_PUBLIC_BLOG_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${process.env.NEXT_PUBLIC_BASE_URL}`],
  },
};

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
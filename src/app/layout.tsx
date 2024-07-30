import '@/styles/globals.css';
import 'highlight.js/styles/github-dark-dimmed.css'; // Global Code Block Styling from Highlight.js Node Module
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import React, { Suspense } from 'react';

import Space from '@/components/space';
import { DM_Sans } from 'next/font/google';

import GoogleAnalytics from '@/components/google-analytics';
import CookieBanner from '@/components/cookie-banner';

// Font for the entire website
export const dmSans = DM_Sans(
  {
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
  }
)

export const metadata = {
  metadataBase: new URL('https://maxontech.io'),
  title: {
    default: 'Max Rohowsky | Software Engineering and Indie Hacking Blog',
    template: '%s | Max Rohowsky'
  },
  description: 'A Blog on Software Engineering and Indie Hacking by Max Rohowsky',
  openGraph: {
    title: 'Max Rohowsky',
    description: 'Software Engineering & Indie Hacking',
    url: 'https://maxontech.io/api/og?title="maxontech.io"',
    siteName: 'Max Rohowsky',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Max Rohowsky',
    card: 'summary_large_image',
    description: 'Software Engineering & Indie Hacking',
    image: 'https://maxontech.io/api/og?title="maxontech.io"',
  },
  verification: {
    google: 'NVnL5jsghoSo_MaMO9El0UJE_I2k4FcLdA-BmHFnbEk'
  },
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <Suspense fallback={null}>
        <GoogleAnalytics GA_MEASUREMENT_ID='G-1CHMGCDEXS' />
      </Suspense>
      <body className='mx-1 sm:mx-2 md:mx-4 flex justify-center min-h-svh'>
        <div className=' max-w-screen-lg w-full flex flex-col min-h-full justify-between'>
          <div>
            <Navbar />

            <Space className='h-8' />

            {children}

            <Space className='h-8' />
          </div>
          <CookieBanner />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
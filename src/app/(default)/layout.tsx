import '@/styles/globals.css';
import 'highlight.js/styles/github-dark-dimmed.css'; // Global Code Block Styling from Highlight.js Node Module

import Navbar from "@/components/navbar";
import Footer from '@/components/footer';

import Space from '@/components/space';
import { DM_Sans } from 'next/font/google';

// Font for the entire website
export const dmSans = DM_Sans(
  {
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
  }
)

export const metadata = {
  title: {
    default: 'Max Rohowsky | Software Engineering and Indie Hacking Blog',
    template: '%s | Max on Tech'
  },
  description: 'A Blog on Software Engineering and Indie Hacking by Max Rohowsky'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className='mx-1 sm:mx-2 md:mx-4 flex justify-center'>
        <div className=' max-w-screen-lg w-full flex flex-col '>
          <Navbar />
          <Space className='h-8' />
          {children}
          <Space className='h-8' />
          <Footer />
        </div>
      </body>
    </html>
  )
}
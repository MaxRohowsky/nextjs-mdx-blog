import '@/styles/globals.css';

/* Components */
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Overlay from '@/components/overlay/overlay';
import Space from '@/components/space';
/* Highlight.js */
import 'highlight.js/styles/srcery.css';

/* Font Awesome */
import { config } from '@fortawesome/fontawesome-svg-core'; config.autoAddCss = false;
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Max on Tech | Modern Web Development',
    template: '%s | Max on Tech'
  },
  description: 'A Blog on Modern Web Development by Max on Tech',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en" className={openSans.className}>


      <body className='mx-1 sm:mx-2 md:mx-4 flex justify-center'>
        <div className=' max-w-screen-lg w-full flex flex-col '>

          <Navbar />
          <Space className='h-8'/>
          {children}
          <Space className='h-8'/>
          <Footer />

        </div>
      </body>

    </html>
  )
}
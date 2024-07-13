import '@/styles/globals.css';
import styles from './layout.module.scss'

/* Components */
import Navbar from "@/components/navbar/navbar";
import Footer from '@/components/footer/footer';
import Overlay from '@/components/overlay/overlay';

/* Highlight.js */
import 'highlight.js/styles/srcery.css';

/* Font Awesome */
import { config } from '@fortawesome/fontawesome-svg-core'; config.autoAddCss = false;
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: '400',
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


      <body className="max-w-screen-lg mx-auto">


          <Navbar />

          {children}

          <Overlay />

          <footer className="dark:bg-slate-300">
            <Footer />
          </footer>



      </body>

    </html>
  )
}
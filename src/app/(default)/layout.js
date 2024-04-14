import '@/styles/globals.scss';
import styles from './layout.module.scss'
/*Wordpress Block CSS*/
import '@wordpress/block-library/build-style/style.css';
/* Font */
import '@/styles/titillium.scss';
import '@/styles/bricolage.scss';
/* Components */
import Navbar from "@/components/navbar/navbar";
import Footer from '@/components/footer/footer';
import Overlay from '@/components/overlay/overlay';
import 'highlight.js/styles/srcery.css';

import { config } from '@fortawesome/fontawesome-svg-core'; config.autoAddCss = false;
import '@fortawesome/fontawesome-svg-core/styles.css';



export const metadata = {
  title: {
    default: "Max on Tech",
    template: "%s | Max on Tech",
  },
  description: {
    default: "Max on Tech is a personal blog about tech, programming, and entrepreneurship."
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body>

        <main className={styles.main}>

          <Navbar />

          {children}

          <Overlay />

          <footer className={styles.footer}>
            <Footer />
          </footer>

        </main>

      </body>

    </html>
  )
}
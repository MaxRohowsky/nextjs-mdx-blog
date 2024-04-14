import '@/styles/globals.scss';
import styles from './layout.module.scss'

/*Wordpress Block CSS*/
import '@wordpress/block-library/build-style/style.css';

/* Components */
import Navbar from "@/components/navbar/navbar";
import Footer from '@/components/footer/footer';
import Overlay from '@/components/overlay/overlay';

/* Highlight.js */
import 'highlight.js/styles/srcery.css';

/* Font Awesome */
import { config } from '@fortawesome/fontawesome-svg-core'; config.autoAddCss = false;
import '@fortawesome/fontawesome-svg-core/styles.css';


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
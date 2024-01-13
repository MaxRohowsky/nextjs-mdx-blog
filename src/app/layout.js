import '@/styles/globals.scss';
import styles from '@/styles/App.module.scss'
/*Wordpress Block CSS*/
import '@wordpress/block-library/build-style/style.css';
/* Font */
import '@/styles/titillium.scss';
import '@/styles/bricolage.scss';
/* Components */
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Overlay from '@/components/Overlay';
/* Dark Mode */
//import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body>

        <header className={styles.header}>
          <Navbar />
        </header>

        {children}

        <footer className={styles.footer}>
          <Footer />
        </footer>

      </body>

    </html>
  )
}
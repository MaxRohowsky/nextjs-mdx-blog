import '@/styles/globals.scss';
//test
import '@/styles/Sidebar.module.scss';
import styles from '@/styles/App.module.scss'

/*Use the Wordpress CSS*/
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';

//import '@wordpress/block-library/build-style/image/style.css'

//import '@wordpress/block-library/build-style/common.css'
//import '@wordpress/block-library/build-style/classic-rtl.css'
//import '@wordpress/block-library/build-style/classic.css'
//import '@wordpress/block-library/build-style/common.css'
//import '@wordpress/block-library/build-style/common.css'

/* Font */
import '@/styles/titillium.scss';
import '@/styles/bricolage.scss';
/* Components */
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Overlay from '@/components/Overlay';

import { ThemeProvider } from 'next-themes';
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Max On Tech - The Tech you Need to Succeed</title>
        <meta property="og:title" content="Max On Tech - The Tech you Need to Succeed" />
        <meta name="description" content="Fast, Fun, and Free Coding Tutorials" />
        <meta property="og:description" content="Fast, Fun, and Free Coding Tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.container} >
      <ThemeProvider>
        <header className={styles.header}>
          <Navbar />
        </header>


        <main className={styles.main}>
          <Component {...pageProps} />
          <Overlay />
        </main>

        <footer className={styles.footer}>
          <Footer />
        </footer>
        </ThemeProvider>

      </div>
    </>
  )}

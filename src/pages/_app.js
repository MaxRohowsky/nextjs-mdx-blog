import '@/styles/globals.scss';
//import '@/styles/Navbar.module.scss'
//import '@/styles/Card.scss'
//import '@/styles/Courses.scss'
//import '@/styles/Course.scss';
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
/* Components */
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Overlay from '@/components/Overlay';
//import ReactGA from 'react-ga';
/* Other */
//import Script from 'next/script';
//import { parse } from 'node-html-parser';
//import { useEffect } from 'react';
//import { useState } from 'react';
//import Cookies from 'js-cookie';


export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Max on Tech</title>
        <meta name="description" content="Quality Code Tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Overlay />

      <div className={styles.container} >
        
        <header className={styles.header}>
          <Navbar />
        </header>
        <div className={styles.headerBlur}/>

        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
          <Footer />
        </footer>

      </div>


    </>
  )
}

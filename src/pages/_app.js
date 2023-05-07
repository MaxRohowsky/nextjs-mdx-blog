import '@/styles/globals.scss';
//import '@/styles/Navbar.module.scss'
//import '@/styles/Card.scss'
//import '@/styles/Courses.scss'
//import '@/styles/Course.scss';
import '@/styles/Sidebar.scss';

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
import Script from 'next/script';
import { parse } from 'node-html-parser';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Max Teaches Tech</title>
        <meta name="description" content="Quality Code Tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>




      {/*<!-- Google tag (gtag.js) -->*/}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1CHMGCDEXS"/>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CHMGCDEXS', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />



      <Overlay />

      <Navbar />



      <Component {...pageProps} />

      <Footer />
    </>
  )
}

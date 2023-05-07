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

import '@/styles/titillium.scss';
import Navbar from "@/components/Navbar";
import Script from 'next/script';
import Footer from '@/components/Footer';
import Overlay from '@/components/Overlay';

import ReactGA from 'react-ga';

export default function App({ Component, pageProps }) {
  return (
    <>



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

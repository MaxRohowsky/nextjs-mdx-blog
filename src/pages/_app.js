import '@/styles/globals.css';
//import '@/styles/Navbar.module.scss'
//import '@/styles/Card.scss'
//import '@/styles/Courses.scss'
//import '@/styles/Course.scss';
import '@/styles/Sidebar.scss';

/*Use the Wordpress CSS*/
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';

import '@wordpress/block-library/build-style/image/style.css'

//import '@wordpress/block-library/build-style/common.css'
//import '@wordpress/block-library/build-style/classic-rtl.css'
//import '@wordpress/block-library/build-style/classic.css'
//import '@wordpress/block-library/build-style/common.css'
//import '@wordpress/block-library/build-style/common.css'

import '@/styles/titillium.scss';

import Navbar from "@/components/Navbar";
import Head from 'next/head';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>

      <Navbar />
      
      <Component {...pageProps} />

      {/*<Footer/>*/}
    </>
  )
}

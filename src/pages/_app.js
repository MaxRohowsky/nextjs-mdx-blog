import '@/styles/globals.css'
//import '@/styles/Navbar.module.scss'
//import '@/styles/Card.scss'
//import '@/styles/Courses.scss'
import '@/styles/Course.scss'
import '@/styles/Sidebar.scss';
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'
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

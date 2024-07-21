'use client';
import styles from './overlay.module.scss'
import Cookies from 'js-cookie';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

//import { useRef } from 'react';

export default function Overlay() {
    const router = useRouter();
    const slug = router.route;
    //const acceptedRef = useRef(false);
    let [onPrivacyPage, setOnPrivacyPage] = useState(false);
    let [cookies, setCookies] = useState(false);
    let [cookieCheck, setCookieCheck] = useState(false);

    //if (typeof(Cookies.get('maxteachestech')) !== 'undefined'){
    //acceptedRef.current = true
    //}
    /*console.log("slug: "+slug)
    console.log("cookies: "+cookies)
    console.log("cookieCheck: "+cookieCheck)
    console.log("onPrivacyPage: "+onPrivacyPage)*/
    //console.log("Ovrly:" + acceptedRef.current)
    // Runs on initial Render and every time the slug changes
    useEffect(() => {
        setOnPrivacyPage(slug == '/privacy')
        setCookies(typeof (Cookies.get('maxteachestech')) !== 'undefined')
        setCookieCheck(true)
    }, [slug])

    const handleClick = () => {
        setCookies(true)
        Cookies.set('maxteachestech', 'accepted', { expires: 8, secure: true, sameSite: 'Lax' })
    }


    //let [GACookie, setGACookie] = useState(false);

    // This is bad! You get the cookie every time
    //useEffect(() => {
    //setGACookie(typeof (Cookies.get('maxteachestech')) !== 'undefined')
    //})


    return (
        <>
            {((cookieCheck && !cookies) && !onPrivacyPage) && (
                <div className={styles.overlay}>
                    <div className={styles.cookie__container}>
                        <div className={styles.cookie__content}>
                            <i className={`fas fa-lock ${styles.icon}`} ></i>
                            <p className={styles.cookie__title}>Data & Privacy Settings</p>
                            <hr className={styles.sepparator} />
                            <p className={styles.cookie__text}>
                                We use <strong>cookies</strong> and <strong>other technologies</strong> on our website. Some of them are essential,
                                while others help us improve this website and your experience. <br /></p>
                            <p className={styles.cookie__text}><strong>Personal data</strong> may be processed
                                (e.g. IP addresses) when using this website. </p>
                            <p className={styles.cookie__text}>For <strong>more information</strong> about how your data is used, please see the <Link href="/privacy">Privacy Policy</Link>. </p>

                            <button className={styles.cookie__button} onClick={handleClick}><strong>Accept</strong></button>
                        </div>
                    </div>
                </div>
            )}

            {cookies && (
                <>
                    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1CHMGCDEXS" />
                    <Script
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', 'G-1CHMGCDEXS', {
                                     'anonymize_ip': true
                                    });
                                  `,
                        }}
                    />
                </>
            )}

        </>
    )
}
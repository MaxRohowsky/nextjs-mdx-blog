import styles from '../styles/Overlay.module.scss'
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


// Sets the cookie and saves it
export default function Overlay() {
    const router = useRouter();
    const slug = router.route;

    

    const [showWindow, setShowWindow] = useState(true);
    let cookieSet = false
    let onPrivacyPage = false

    if(slug == '/privacy'){
        onPrivacyPage = true
    }


    useEffect(()=>{

        if(typeof(Cookies.get('maxteachestech')) !== 'undefined'){
            setShowWindow(false)
        }
    })
   
    
    //let accept_policy = true

    const handleClick = () => {
        setShowWindow(false)
        Cookies.set('maxteachestech', 'accepted', {expires: 8, secure: true, sameSite: 'Lax' })
        //console.log(Cookies.get('maxteachestech'))
    }


    return (
        <>
        
        {!onPrivacyPage && showWindow && (
            <div className={styles.overlay}>
                <div className={styles.cookie__container}>
                    <div className={styles.cookie__content}>
                    <i className={`fas fa-lock ${styles.icon}`} ></i>
                        <p className={styles.cookie__title}>Data & Privacy Settings</p>
                        <hr className={styles.sepparator} />
                        <p className={styles.cookie__text}>
                        We use <strong>cookies</strong> and <strong>other technologies</strong> on our website. Some of them are essential, 
                        while others help us improve this website and your experience. <br/></p>
                        <p className={styles.cookie__text}><strong>Personal data</strong> may be processed 
                        (e.g. IP addresses) when using this website. </p>
                        <p className={styles.cookie__text}>For <strong>more information</strong> about how your data is used, please see the <Link href="/privacy">Privacy Policy</Link>. </p>
                    
                        <button className={styles.cookie__button} onClick={handleClick}><strong>Accept</strong></button>
                    </div>
                </div>
            </div>
            )}

        </>
    )
}
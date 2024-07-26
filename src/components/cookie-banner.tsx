'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/storage-helper';

export default function CookieBanner() {

    let [cookieConsent, setCookieConsent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let storedCookieConsent = getLocalStorage("mot_cookie_consent", null)
        console.log("Cookie Consent retrieved from storage: ", storedCookieConsent)
        setCookieConsent(storedCookieConsent)
        setIsLoading(false);
    }, [])


    useEffect(() => {
        if (cookieConsent !== null) {
            setLocalStorage('mot_cookie_consent', cookieConsent);
          }

        const newValue = cookieConsent ? 'granted' : 'denied'

       if (typeof window !== 'undefined' && window.gtag) {
            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });
        } 

    }, [cookieConsent]);

    if (isLoading || cookieConsent !== null) {
        return null;
      }

    // If cookie is set to true or false, the first ternary operator will hide the banner
    // https://gaudion.dev/blog/setup-google-analytics-with-gdpr-compliant-cookie-consent-in-nextjs13
    return (
        <div className={`my-10  ${cookieConsent != null ? " bg-red-400 hid" : " bg-green-700"}  mx-auto max-w-max md:max-w-screen-sm
            fixed bottom-0 left-0 right-0 
             px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
             bg-gray-700 rounded-lg shadow`}>

            <div className='text-center'>
                <Link href="/info/cookies"><p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p></Link>
            </div>
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>
        </div>
    )
}
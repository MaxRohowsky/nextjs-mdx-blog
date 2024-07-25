'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/storage-helper';

export default function CookieBanner() {
    // By default, the cookie is unset (neither accepted nor denied) so we set it to null
    const [cookieConsent, setCookieConsent] = useState(null);

    // Get the cookie consent status from local storage
    useEffect(() => {
        const storedCookieConsent = getLocalStorage("mot_cookie_consent", null)
        console.log("Stored Cookie Consent: ", storedCookieConsent)
        setCookieConsent(storedCookieConsent)
    }, [])

    // When cookieConsent changes, update the cookie consent status in local storage and send the consent to Google Analytics
    useEffect(() => {
        // 'denied' if cookieConsent is falsey, 'granted' otherwise
        const newValue = cookieConsent ? 'granted' : 'denied'

        if (typeof window !== 'undefined') {
            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });
        }

        setLocalStorage("mot_cookie_consent", cookieConsent)
        console.log("Cookie Consent: ", cookieConsent)
    }, [cookieConsent]);

    // If unset cookie (i.e. == null), show the cookie banner
    return (
        <div className={`my-10  ${cookieConsent == null ? "bg-green-700" : "bg-red-700 hid"}  mx-auto max-w-max md:max-w-screen-sm
            fixed bottom-0 left-0 right-0 
            flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
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
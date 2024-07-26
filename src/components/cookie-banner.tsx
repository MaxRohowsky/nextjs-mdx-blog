"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storage-helper";

export default function CookieBanner() {
    let [cookieConsent, setCookieConsent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let storedCookieConsent = getLocalStorage("mot_cookie_consent", null);
        console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
        setCookieConsent(storedCookieConsent);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (cookieConsent !== null) {
            setLocalStorage("mot_cookie_consent", cookieConsent);
        }

        const newValue = cookieConsent ? "granted" : "denied";

        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: newValue,
            });
        }
    }, [cookieConsent]);

    if (isLoading || cookieConsent !== null) {
        return null;
    }

    // If cookie is set to true or false, the first ternary operator will hide the banner
    // https://gaudion.dev/blog/setup-google-analytics-with-gdpr-compliant-cookie-consent-in-nextjs13
    return (
        <div
            className={`my-10 ${cookieConsent != null ? "hidden" : ""} fixed bottom-0 left-0 right-0 sm:left-auto sm:mr-3
        mx-auto max-w-max flex flex-row items-center justify-between gap-2 rounded-lg
         px-3 py-3 sm:flex-row md:max-w-screen-sm md:px-4 bg-white shadow-md border border-gray-200 z-50`}
        >
            <div className="text-center">

                <p className="">
                    This site uses cookies.
                </p>

            </div>
            <div className="flex gap-2">
                <button
                    className="rounded-md border-gray-900 px-5 py-2 text-gray-300"
                    onClick={() => setCookieConsent(false)}
                >
                    Decline
                </button>
                <button
                    className="rounded-lg bg-green-600 px-5 py-2 text-white"
                    onClick={() => setCookieConsent(true)}
                >
                    Accept
                </button>
            </div>
        </div>
    );
}

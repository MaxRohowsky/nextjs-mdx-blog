"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storage-helper";
import { Button } from "./ui/button";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function CookieBanner() {
    let [cookieConsent, setCookieConsent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast()

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
            className={`my-10 ${cookieConsent == null ? "" : "hidden"} fixed bottom-0 left-0 right-0 sm:left-auto sm:mr-6
        mx-auto max-w-fit flex items-center justify-between gap-2 rounded-sm
         px-3 py-3 flex-row md:max-w-screen-sm md:px-4 bg-white shadow-md border border-gray-200 z-50`}
        >
            <div className="text-center">

                <p className="mr-3">
                    This site uses cookies:
                </p>

            </div>
            <div className="flex gap-2">
                <Button
                    variant="outline"
                    onClick={() => setCookieConsent(false)}
                >
                    Decline
                </Button>
                <Button

                    onClick={() => setCookieConsent(true)}
                >
                    Accept
                </Button>
            </div>
        </div>
    );
}

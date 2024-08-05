"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storage-helper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("mot_cookie_consent", null);
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
    return (
        <div
            className={`my-10 ${cookieConsent == null ? "" : "hidden"} fixed bottom-0 left-0 right-0 sm:left-auto sm:mr-6
        mx-auto max-w-fit z-30`}
        >
            <div className="relative">

                <div className=" bg-white dark:bg-black border border-gray-200 dark:border-gray-600 flex items-center justify-between gap-2 rounded-sm
         px-3 py-3 flex-row md:max-w-screen-sm md:px-4  shadow-md ">
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
            </div>
        </div>
    );
}

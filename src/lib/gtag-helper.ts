// This code sends a configuration command to Google Analytics to track the page view for the specified url.
export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
    if (typeof window !== 'undefined') {
        window.gtag("config", GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};
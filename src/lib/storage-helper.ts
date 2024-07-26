// lib/storageHelper.ts
'use client';

export function getLocalStorage(key: string, defaultValue: any) {
    // Get the value from local storage
    const stickyValue = localStorage.getItem(key);
    //console.log("Sticky Value read from storage: ", stickyValue)
    // Check if stickyValue is not null or undefined
    if (stickyValue !== null && stickyValue !== undefined) {
        try {
            return JSON.parse(stickyValue);
        } catch (error) {
            console.error(`Error parsing JSON for key "${key}":`, error);
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}

export function setLocalStorage(key: string, value:any){
    localStorage.setItem(key, JSON.stringify(value));
}





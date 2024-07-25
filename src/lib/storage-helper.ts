// lib/storageHelper.ts
'use client';

export function getLocalStorage(key: string, defaultValue: any) {
    // Get the value from local storage
    const stickyValue = localStorage.getItem(key);
    console.log("Sticky Value read from storage: ", stickyValue)
    // Check if stickyValue is not null or undefined
    if (stickyValue !== null && stickyValue !== undefined) {
        console.log("Sticky Value is not null or undefined:", stickyValue)
        // Parse the value from local storage
        return JSON.parse(stickyValue);
    } else {
        console.log("Sticky Value is null or undefined", stickyValue)
        // Return the default value if stickyValue is not set
        return defaultValue;
    }
}

export function setLocalStorage(key: string, value:any){
    localStorage.setItem(key, JSON.stringify(value));
}





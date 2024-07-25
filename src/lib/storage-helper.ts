// lib/storageHelper.ts
'use client';

export function getLocalStorage(key: string, defaultValue: any) {
    // Get the value from local storage
    const stickyValue = localStorage.getItem(key);
    // Parse the value from local storage

    console.log("Sticky Value: ", stickyValue)
    return (stickyValue !== null && stickyValue !== 'undefined')
        ? JSON.parse(stickyValue)
        : defaultValue;
}

export function setLocalStorage(key: string, value:any){
    localStorage.setItem(key, JSON.stringify(value));
}





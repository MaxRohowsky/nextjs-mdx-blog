// Greeting.js
'use client';

import React from 'react';
import { useState } from 'react';

export function Greeting({ name }) {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Click me!</button>
            <p>Counter: {counter}</p>
          Hello, 
        </>
    )
}


export function Spicy({ text }) {
    return (
        <span className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-fit'>
            {text}
        </span>
    );
}

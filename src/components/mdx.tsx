'use client'

import React from 'react';
import { Info } from 'lucide-react';



export const Example = ({ children }) => (
  <div className="bg-blue-50 border-l-[3px] border-blue-500 p-4 relative rounded-sm my-5">
    <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
      <Info className='bg-white text-blue-500 rounded-full p-1' size={32} /> 
    </div>
    {children}
  </div>
);




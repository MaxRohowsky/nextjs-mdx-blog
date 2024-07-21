// Caption.js
import React from 'react';
import { Info, Flame } from 'lucide-react';

export const Caption = ({ children }) => (
  <figcaption className="text-gray-500 text-sm mt-2 text-center">{children}</figcaption>
);

export const Note = ({ children }) => (
  <div className="bg-blue-50 border-l-[3px] border-blue-500 p-4 relative rounded-sm my-5">
    <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
      <Info className='bg-white text-blue-500 rounded-full p-1' size={32} /> 
    </div>
    {children}
  </div>
);


export const Warning = ({ children }) => (
  <div className="bg-red-50 border-l-[3px] border-red-500 p-4 relative rounded-sm my-5">
    <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-[-17px]">
      <Flame className='bg-white text-red-500 rounded-full p-1' size={32} /> 
    </div>
    {children}
  </div>
);


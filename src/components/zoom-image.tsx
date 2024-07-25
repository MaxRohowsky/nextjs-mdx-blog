'use client'
import { useState } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';
import Image, { ImageProps } from 'next/image';

const ZoomImage = (props) => {
  const [isFullWidth, setIsFullWidth] = useState(false);

  const handleIconClick = () => {
    setIsFullWidth(!isFullWidth);
  };

  return (
    <div className="w-full flex justify-center">
    <div className="relative inline-block">
      <div className={`shadow-sm rounded-sm ${props.className}`}>
        <Image
          width={400}
          height={400}
          {...(props as ImageProps)}
          className={`${isFullWidth ? 'w-full' : ''}`}
        />
      </div>
      {isFullWidth ? (
        <ZoomOut
          className="absolute bottom-2 right-2 cursor-pointer text-black"
          onClick={handleIconClick}
        />
      ) : (
        <ZoomIn
          className="absolute bottom-2 right-2 cursor-pointer text-black"
          onClick={handleIconClick}
        />
      )}
    </div>
  </div>
  );
};

export default ZoomImage;
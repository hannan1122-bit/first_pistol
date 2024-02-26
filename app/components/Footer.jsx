import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className=" w-full h-20 rounded-lg border-red-600 border-2 fixed bottom-0 flex items-center px-4 bg-stone-800">
      <div className="flex items-center w-full">
        <div className="flex-shrink-0 mr-4">
          <Image 
            width={100} // Set the width of the image
            height={100} // Set the height of the image
            src="/sinpper.jpg" // Provide the source of the image
            alt="Description of your image" // Provide alternative text for accessibility
            objectFit="cover" // Set how the image should fill its container
            className="opacity-75 rounded-full"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-300 text-center">
            Here we have a description about our first class weapons which may protect you from various unconditional situations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

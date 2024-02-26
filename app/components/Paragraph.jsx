import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

const Paragraph = ({ heading, content, imageUrl, name, price }) => {
  const namePriceStyle = {
    position: 'absolute',
    bottom: '5px', // Adjust this value for vertical positioning
    right: '5px', // Adjust this value for horizontal positioning
    color: 'white', // Adjust this value for text color
  };

  return (
    <div className="h-60 text-red-500 border-black border-2 rounded-lg relative hover:scale-125 transition-all duration-500 hover:z-30">
      <div className="font-bold text-center bg-gray-500">
        {heading}
      </div>
      <div >{content}</div>
      <div style={namePriceStyle}>
        <div>NAME: {name}</div>
        <div>PRICE: {price}</div>
      </div>
      <div className="absolute inset-0">
        {/* Image Component */}
        <Image
          src={imageUrl}
          alt="Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-lg -z-10 opacity-85"
        />
      </div>
    </div>
  );
};

export default Paragraph;

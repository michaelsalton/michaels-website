import React from 'react';
import Image from 'next/image'
import logo from './logo_white.png'


export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Navigation Bar */}
      <div className="navbar">
        <a href="#" className="text-black">ABOUT</a>
        <a href="#" className="text-black">RESUME</a>
        <a href="#" className="text-black">CONTACT</a>
      </div>
      <Image
        src={logo}
        width={65}
        height={65}
        alt="Logo"
        objectFit="contain"
        className="absolute top-7 left-5"
      />
      <div className="white-section h-screen">
        {/* Content for the white section */}
      </div>
      <div className="black-section h-screen">
        {/* Content for the black section */}
      </div>
      <div className="white-section h-screen">
        {/* Content for the white section */}
      </div>
      <div className="black-section h-screen">
        {/* Content for the black section */}
      </div>
    </div>
  );
}

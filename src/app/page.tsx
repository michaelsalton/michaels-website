import React from 'react';
import Image from 'next/image'
import logo from './/images/logo_white.png'
import Navbar from './navbar/Navbar'
import styles from './/home/home.module.css';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Image
        src={logo}
        width={65}
        height={65}
        alt="Logo"
        objectFit="contain"
        className="absolute top-7 left-5"
      />
      <div className={styles.whitesection}>
        {/* Content for the white section */}
      </div>
      <div className={styles.blacksection}>
        {/* Content for the black section */}
      </div>
      <div className={styles.whitesection}>
        {/* Content for the white section */}
      </div>
      <div className={styles.blacksection}>
        {/* Content for the black section */}
      </div>
    </div>
  );
}

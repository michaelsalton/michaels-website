import React from 'react';
import Image from 'next/image'
import logo from './/images/logo_white.png'
import Navbar from './navbar/Navbar'
import styles from './/home/home.module.css';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
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
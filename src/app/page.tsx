import React from 'react';
import Image from 'next/image'
import logo from './/images/logo_white.png'
import Navbar from './navbar/Navbar'
import styles from './/home/home.module.css';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <div className={styles.home}>
        {/* Content for the white section */}
      </div>
      <div id="about">
        <div className={styles.about}>
          {/* Content for the white section */}
        </div>
      </div>
      <div id="projects">
        <div className={styles.projects}>
          {/* Content for the black section */}
        </div>
      </div>
      <div id="resume">
        <div className={styles.resume}>
          {/* Content for the white section */}
        </div>
      </div>
      <div id="contact">
        <div className={styles.contact}>
          {/* Content for the black section */}
        </div>
      </div>

    </div>
  );
}
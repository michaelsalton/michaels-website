import Image from 'next/image'
import Link from 'next/link';
import logo from './/images/logo_white.png'
import Navbar from './navbar/Navbar'
import styles from './/home/home.module.css'
import React, { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <div className={styles.home}>
        {/* Content for the white section */}
      </div>
      <div id="about">
        <div className={styles.about}>
          {
            <div style={{
              position: 'fixed',
              left: '50%',
              bottom: '0',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Link href="#about">
                <h5 style={{ color: 'white' }}>Read more</h5>
              </Link>
            </div>
          }
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
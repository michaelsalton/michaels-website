import Image from 'next/image'
import Link from 'next/link';
import logo from './/images/logo_white.png'
import Navbar from './navbar/Navbar'
import styles from './/home/home.module.css'
import React, { useState, useEffect } from 'react';
import Home from './home/Home';

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <div className={styles.home}>
        {
           <Home/>
        }
      </div>
      <div id="about">
        <div className={styles.about}>
          {

          }
        </div>
      </div>
      <div id="projects">
        <div className={styles.projects}>
          {

          }
        </div>
      </div>
      <div id="resume">
        <div className={styles.resume}>
          {

          }
        </div>
      </div>
      <div id="contact">
        <div className={styles.contact}>
          {

          }
        </div>
      </div>

    </div>
  );
}
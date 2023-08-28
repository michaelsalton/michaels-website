import Image from 'next/image'
import Link from 'next/link';
import logo from './/images/logo_white.png'
import Navbar from './navbar/Navbar'
import styles from './/page.module.css'
import React, { useState, useEffect } from 'react';
import Home from './home/Home';
import About from './about/About';

export default function Page() {
  return (
    <div className="overflow-hidden">
      <div className={styles.home} id="home">
        <Home/>
      </div>
      <div className={styles.about} id="about">
      </div>
      <div className={styles.projects} id="projects">
      </div>
      <div className={styles.resume} id="resume">
      </div>
      <div className={styles.contact} id="contact">

      </div>
    </div>
  );
}
import Image from 'next/image'
import Link from 'next/link';
import logo from './/images/logo_white.png'
import Navbar from './navbar/Navbar'
import styles from './/page.module.css'
import React, { useState, useEffect } from 'react';
import Home from './home_page_sections/home/Home';
import About from './home_page_sections/about/About';
import Projects from './home_page_sections/projects/Projects';
import Resume from './home_page_sections/resume/Resume';
import Contact from './home_page_sections/contact/Contact';


export default function Page() {
  return (
    <div className="overflow-hidden">
      <div className={styles.home} id="home">
        <Home/>
      </div>
      <div className={styles.about} id="about">
        <About/>
      </div>
      <div className={styles.projects} id="projects">
        <Projects/>
      </div>
      <div className={styles.resume} id="resume">
        <Resume/>
      </div>
      <div className={styles.contact} id="contact">
        <Contact/>
      </div>
    </div>
  );
}
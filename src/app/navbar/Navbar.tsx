import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import logo from '../images/logo_white.png'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className={styles.stickynavbar}>
            <div className={styles.logo}>
                <Image
                    src={logo}
                    width={65}
                    height={65}
                    alt="Logo"
                    objectFit="contain"
                />
            </div>
            <ul className={styles.navbar}>
                <li className={styles.navItem}>
                    <Link href="/about">about</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/projects">projects</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/resume">resume</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact">contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

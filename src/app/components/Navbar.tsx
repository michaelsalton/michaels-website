import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import your CSS module

function Navbar() {
    return (
        <ul className={styles.navbar}>
            <li className={styles.navItem}>
                <Link href="/home">home</Link>
            </li>
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
    );
}

export default Navbar;

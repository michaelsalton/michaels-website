import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import logo from '../images/logo_white.png'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className={styles.stickynavbar}>
            <div className={styles.logo}>
			<Link href="/home">
				<Image
					src={logo}
					width={65}
					height={65}
					alt="Logo"
					objectFit="contain"
				/>
			</Link>
            </div>
            <ul className={styles.navbar}>
            <li className={styles.navItem}>
                    <Link href="/home">
                        home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <a href="/about">
                        about
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="/projects">
                        projects
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="/resume">
                        resume
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="/contact">
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

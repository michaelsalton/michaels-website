import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>About</h1>
                <p className={styles.subText}>Lorem ipsum dolor sit amit.</p>
            </div>
        </div>
    );
}

export default About;

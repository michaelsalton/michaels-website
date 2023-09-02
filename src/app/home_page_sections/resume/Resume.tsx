import React from 'react';
import styles from './Resume.module.css';
import Image from 'next/image';

function Resume() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>Resume</h1>
                <p className={styles.subText}>Lorem ipsum dolor sit amit.</p>
            </div>
        </div>
    );
}

export default Resume;

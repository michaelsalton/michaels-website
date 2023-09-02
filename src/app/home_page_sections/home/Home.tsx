import React from 'react';
import styles from './Home.module.css';
import Image from 'next/image';

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>Michael Salton</h1>
                <p className={styles.subText}>
                    Software Developer
                </p>
            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import styles from './Home.module.css';
import Image from 'next/image';
import resumeImage from '../../images/resume_button.png'

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>Michael Salton</h1>
                <p className={styles.subText}>
                    Software Developer
                </p>
                <div className={styles.imageContainer}>
                    <Image
                        src={resumeImage}
                        width={175}
                        height={175}
                        alt="View Resume"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;

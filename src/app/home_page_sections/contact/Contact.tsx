import React from 'react';
import styles from './Contact.module.css';
import Image from 'next/image';

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>Contact</h1>
                <p className={styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/path/to/your/image.png" alt="Image" width={300} height={200} />
            </div>
        </div>
    );
}

export default Contact;

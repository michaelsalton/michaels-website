import React from 'react';
import styles from './Contact.module.css';
import Image from 'next/image';

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>Contact</h1>
                <p className={styles.subText}>Lorem ipsum dolor sit amit.</p>
            </div>
        </div>
    );
}

export default Contact;

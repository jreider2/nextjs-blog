import React from 'react';
import Image from "next/legacy/image";

import styles from "./header.module.css";

export default function Header ({ image, heading, subheading }) {
    return (
        <div>
            <div className={styles.headerContainer} > 
                <h1 className={styles.heading}>{heading}</h1>
                <h2 className={styles.subheading}>{subheading}</h2>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={image} 
                        alt="Use Case Image" 
                        layout='responsive'
                        objectFit='contain'/>
                </div>
            </div>
            <h2 className={styles.subheading}>test</h2>
        </div>
    );
}
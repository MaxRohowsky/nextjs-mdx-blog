'use client'
import styles from './hero.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

export default function Hero() {

    let numColumns = 12;
    let numRows = 8;

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (

        <div className={styles.hero}>



            <div className={styles.hero__rainbow} />

            <div className={styles.hero__overlay}>

            {windowWidth < 1000 ? (
                    <Image src="/hero-overlay-sm.svg" alt="Hero Outline" width={1200} height={900} />
                ) : (
                    <Image src="/hero-overlay.svg" alt="Hero Outline" width={1200} height={900} />
                )}

            </div>

            <div className={styles.hero__main} />


            <div className={styles.hero__title}>

                <h1> Modern <u>Full-Stack Development</u></h1>

                <h2>
                    Learn in-demand Dev skills
                     <br /> to build awesome software or get promoted
                </h2>


                <a href="https://www.youtube.com/@maxontech/?sub_confirmation=1" target="_blank" rel="noreferrer">
                    <button className={styles.hero__subscribe}>
                        <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
                        <span>Subscribe</span>
                    </button>
                </a>


                <div className={styles.hero__socialproof}>
                    <div className={styles.hero__avatar}>
                        <img className={styles.avatar} src="/avatars/1.jpg" />
                    </div>
                    <div className={styles.hero__avatar}>
                        <img className={styles.avatar} src="/avatars/2.jpg" />
                    </div>
                    <div className={styles.hero__avatar}>
                        <img className={styles.avatar} src="/avatars/3.jpg" />
                    </div>
                    <div className={styles.hero__avatar}>
                        <img className={styles.avatar} src="/avatars/4.jpg" />
                    </div>
                    <div className={styles.hero__avatar}>
                        <img className={styles.avatar} src="/avatars/5.jpg" />
                    </div>

                    <div className={styles.socialproof__text}>
                        Join a community of <br /> 10k+ subscibers
                    </div>
                </div>



            </div>
            {Array.from({ length: numColumns * numRows }, (_, index) => {

                let borderRadiusStyle = {
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                };

                let x = index % numColumns + 1; // Adjust as needed
                let y = Math.floor((index) / numColumns) + 1; // Adjust as needed


                if (x === 1 && y === 1) {
                    borderRadiusStyle.borderTopLeftRadius = '10px';
                } else if (x === numColumns && y === 1) {
                    borderRadiusStyle.borderTopRightRadius = '10px';
                } else if (x === 1 && y === numRows) {
                    borderRadiusStyle.borderBottomLeftRadius = '10px';
                } else if (x === numColumns && y === numRows) {
                    borderRadiusStyle.borderBottomRightRadius = '10px';
                }
                return (
                    <div key={index} className={styles.box} style={{ '--x': x, '--y': y, ...borderRadiusStyle }}></div>
                )
            })}






        </div>

    )
}
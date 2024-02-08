'use client'
import styles from './hero.module.scss';
import Image from 'next/image';
import Crosshair from '@/components/crosshair/crosshair';
import Signup from '../signup/signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {

    let numColumns = 12;
    let numRows = 8;



    return (

        <div className={styles.hero}>



            <div className={styles.hero__rainbow} />

            <div className={styles.hero__overlay}>

                <Image src="/hero-overlay.svg" alt="Hero Outline" width={1200} height={900} />

            </div>

            <div className={styles.hero__main} />


            <div className={styles.hero__title}>

                <h1>Build Your <u> Dream Project</u></h1>

                <h2>
                    Simple tech tips and tutorials <br /> to build and monetize
                    your projects
                </h2>


                {/*<Signup />*/}


                <a href="https://www.youtube.com/@maxontech/?sub_confirmation=1" target="_blank" rel="noreferrer">
                    <button className={styles.hero__subscribe}>
                        <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
                        <span>Subscribe</span>
                    </button>
                </a>


                {/*<div>
                    <div className={styles.form} >
                        <form className={styles.form} action="/register" method="post">
                            <input type="email" name="email" placeholder="Email" id="email" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>*/}


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
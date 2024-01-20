'use client'

import styles from './hero.module.scss';
import Image from 'next/image';
import Crosshair from '@/components/crosshair/crosshair';


export default function Footer() {
    return (

        <div className={styles.hero}>

            <Crosshair x={3} y={3} />
            <Crosshair x={11} y={5} />
            
            <div className={styles.hero__rainbow} />

            <div className={styles.hero__overlay}>
                <Image src="/hero-overlay.svg" alt="Hero Outline" width={1200} height={900} />
            </div>


            <div className={styles.hero__main} />


            {Array.from({ length: 12 * 8 }, (_, index) => {

                let borderRadiusStyle = {
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                };

                let x = index % 12 + 1; // Adjust as needed
                let y = Math.floor((index) / 12) + 1; // Adjust as needed


                if (x === 1 && y === 1) {
                    borderRadiusStyle.borderTopLeftRadius = '10px';
                } else if (x === 12 && y === 1) {
                    borderRadiusStyle.borderTopRightRadius = '10px';
                } else if (x === 1 && y === 8) {
                    borderRadiusStyle.borderBottomLeftRadius = '10px';
                } else if (x === 12 && y === 8) {
                    borderRadiusStyle.borderBottomRightRadius = '10px';
                }
                return (
                    <div key={index} className={styles.box} style={{ '--x': x, '--y': y, ...borderRadiusStyle }}></div>
                )
            })}


            <div className={styles.title}>Build Things People Want.</div>


        </div>

    )
}
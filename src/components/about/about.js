'use client';
import styles from './about.module.scss';
import Image from 'next/image';
import Particles from '../particles/particle';

export default function About() {

    return (

        <section className={styles.about}>

            <div className={styles.about__image}>

                <div className={styles.image__container}>

                    <Image src="/about.png" alt="Hero Outline" width={400} height={400} />

                </div>

                <Particles />

            </div>

            <div className={styles.about__text}>

                <h2>About Me</h2>

                <p> Hi, I'm Max, a Finance Ph.D. with a background in Industrial Engineering. 
                    I work as a consultant in the finance & tech space and have a profound interest in 
                    building products that 'stick'. </p>

                <p> Throughout my career, I've worked closely with startups and early-stage ventures. 
                    I've witnessed firsthand the emotional turmoil tied to the entrepreneurial rollercoaster.</p>

                <p> In this blog, I simplify the strategy and tech that helps you build 
                    things that people actually want. </p>

            </div>

        </section>

    )
}
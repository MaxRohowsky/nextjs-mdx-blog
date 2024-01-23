

import styles from './about.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Particles from '../particles/particle';

export default function About() {

    return (

        <section className={styles.about}>

            <div className={styles.about__image}>

                <Image src="/aout.png" className={styles.aoutImage} alt="Hero Outline" width={400} height={400} />
                <Particles />
            </div>

            <div className={styles.about__text}>

                <h2>About Me</h2>

                Hi, I'm Max, a Finance Ph.D. with a background in Industrial Engineering and Management Science.
                Throughout my career, I've taken on various roles, ranging from being a water-polo athlete to 
                serving as an academic researcher at the Technical University of Berlin, a consultant at Deloitte, 
                and even as the chairman of Berlin's largest entrepreneurship organization.


                








            </div>






        </section>

    )
}
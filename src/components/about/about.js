'use client';
import styles from './about.module.scss';
import Image from 'next/image';
import Particles from '../particles/particle';
import { faTwitter, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


export default function About() {

    return (

        <section className={styles.about}>

            <div className={styles.about__image}>

                <div className={styles.image__container}>

                    <Image
                        src="/about.png"
                        alt="Hero Outline"
                        layout='fill'
                    />

                </div>

                <Particles />

            </div>

            <div className={styles.about__text}>

                <h2>About Me</h2>

                <p> Hi, I'm Max,
                    a Finance Ph.D. with a background in
                    Industrial Engineering.
                    I work as a consultant in the finance & tech space
                    and have a profound interest in
                    building awesome software and
                    products that 'stick'. </p>

                <p> In this blog, I simplify the tech that helps you build
                    your dream projects. Besides that, it's also my programming playground
                    and might be broken sometimes. Since life is short, I force push to main on save.</p>

                <div className={styles.about__socials}>

                    <a href="https://www.linkedin.com/in/maxrohowsky/" target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__linkedin}`}>
                        <div>
                            <FontAwesomeIcon className={styles.about__socialIcon} icon={faLinkedin} />
                        </div>

                    </a>

                    <a href="https://twitter.com/max_on_tech" target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__twitter}`}>
                        <div>
                            <FontAwesomeIcon className={styles.about__socialIcon} icon={faTwitter} />
                        </div>

                    </a>

                    <a href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw?sub_confirmation=1" target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__youtube}`}>
                        <div>
                            <FontAwesomeIcon className={styles.about__socialIcon} icon={faYoutube} />
                        </div>

                    </a>

                    <a href={`https://github.com/maxontech`} target="_blank" rel="noreferrer"
                        className={`${styles.post__socials} ${styles.post__github}`}>
                        <div>
                            <FontAwesomeIcon className={styles.about__socialIcon} icon={faGithub} />
                        </div>

                    </a>

                </div>

            </div>

        </section>

    )
}
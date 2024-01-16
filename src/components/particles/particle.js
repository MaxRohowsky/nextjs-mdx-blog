'use client';
import styles from './particle.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faHtml5, faCss3, faGithub, faAngular, faJava } from '@fortawesome/free-brands-svg-icons'


export default function Particles() {

    const icons = [
        { class: faReact, color: "#61DAFB" },
        { class: faNodeJs, color: "#F0DB4F" },
        { class: faHtml5, color: "#E44D26" },
        { class: faCss3, color: "#1572B6" },
        { class: faGithub, color: "#181717" },
        { class: faAngular, color: "#DD0031" },
        { class: faJava, color: "#092E20" }
    ];


    const randomClass = () => {
        const randomIndex = Math.floor(Math.random() * (icons.length));
        const { class: iconClass, color: iconColor } = icons[randomIndex];
        return { iconClass, iconColor };
    };


    return (

        <div className={styles.bottomparticles}>
            {
                Array(20).fill().map((_, index) => {
                    const { iconClass, iconColor } = randomClass(); // Store the result
                    return (
                        <div key={index} className={`${styles.bubble}`} style={{ color: iconColor, }}>
                            <FontAwesomeIcon icon={iconClass} />
                        </div>
                    )
                })
            }
        </div>

    )

}

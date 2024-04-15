import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './card.module.scss'



function Card({ title, tags, img, body, link }) {

    return (
        <Link style={{ textDecoration: 'none', color: 'black'}}  href={link}>
            <div className={styles.card}>
                <div className={styles.card__item}>
                    <img className={styles.card__image} src={img} alt='' loading="lazy" />
                </div>
                <div className={styles.card__item}>
                    {/*icons && (
                        <div className={styles.card__icons}>
                            {icons.map((icon, index) => (
                                <FontAwesomeIcon key={index} className={styles.icon} icon={icon.icon} color={icon.color} />
                            ))}
                        </div>
                            )*/}
                    {tags && (
                        <div className={styles.card__tags}>
                            {tags.map((tag, index) => (
                                <span key={index} className={styles.tag} style={{ color: tag.color }}>
                                    {tag.tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <h3 className={styles.title__text}>{title}</h3>

                    <div className={styles.card__description}>
                        {body}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;


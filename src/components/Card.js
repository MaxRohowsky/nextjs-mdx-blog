import React from 'react';
import Link from 'next/link'
import styles from '../styles/Card.module.scss'

function Card({ title, date, img, body, link }) {
    return (
        <Link style={{ textDecoration: 'none' }} href={link}>
            <div className={styles.card}>
                <div className={styles.card__item}>
                    <img className={styles.card__image} src={img} alt='' loading="lazy" />
                </div>
                <div className={styles.card__item}>
                    {date && (
                        <div className={styles.card__date}>
                            <p>{date}</p>
                        </div>
                    )}
                    <div className={styles.card__title}>
                        <h3 className={styles.title__text}>{title}</h3>
                    </div>
                    <div className={styles.card__description}>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;
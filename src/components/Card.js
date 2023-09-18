import React from 'react';
import Link from 'next/link'
import styles from '../styles/Card.module.scss'
import he from 'he';


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
                            <span>{date}</span>
                        </div>
                    )}

                        <h3 className={styles.title__text}>{title}</h3>

                    <div className={styles.card__description}>
                        <p>{he.decode(body).replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;
import React from 'react';
import Link from 'next/link'

import styles from './card.module.scss'
import he from 'he';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';


function Card({ title, date, img, body, link, views }) {

    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} href={link}>
            <div className={styles.card}>
                <div className={styles.card__item}>
                    <img className={styles.card__image} src={img} alt='' loading="lazy" />
                </div>
                <div className={styles.card__item}>
                    <div className={styles.card__meta}>
                    {date && (
                        <div className={styles.card__date} >
                            <span >{date}</span>
                        </div>
                    )}
                    
                    {views && (
                        <div className={styles.card__views} >
                            <span > <FontAwesomeIcon icon={faEye} color="gray" /> {views} </span>
                        </div>
                    )}
                    </div>



                    <h3 className={styles.title__text}>{title}</h3>

                    <div className={styles.card__description}>
                        <p className={styles.card__text}>{he.decode(body).replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;


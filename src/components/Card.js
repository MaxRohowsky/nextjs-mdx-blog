import React from 'react';
import Link from 'next/link'
import styles from '../styles/Card.module.scss'

function Card({title, img, body, link}){
    //const navigate = useNavigate();
    console.log(link)


    return(
        <Link style={{ textDecoration: 'none' }} href={link}>
        <div className={styles.card}>
            <div className={styles.card__item}>
                <img className={styles.card__image} src={img} alt='' />
            </div>

            <div className={styles.card__item}>
                <div className={styles.card__title}>
                    <h3 className = {styles.title__text}>{title}</h3>
                </div>
                <div className={styles.card__description}>
                    <p>{body}</p>
                </div>
            </div>

           {/* <div className='card__item'>
                <button className='card__button' > View More </button>
            </div> */}
            
        </div>
        </Link>
    )
}

export default Card;
import React from 'react';
import Link from 'next/link'

import styles from './card.module.scss'
import he from 'he';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';


function Card({ title, date, img, body, link, views }) {
    //console.log(link)

    /*useEffect(() => {
        const supabase = createClient('https://bekowpfzavpgpymlsdgp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJla293cGZ6YXZwZ3B5bWxzZGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NjAwOTUsImV4cCI6MjAzMTAzNjA5NX0.JWJWrKdA1o_1gcB4LZbqRid4nJjRrK_gGPJQjbuzqgA')


        const channels = supabase.channel('custom-update-channel')
          .on(
            'postgres_changes',
            { event: 'UPDATE', schema: 'public', table: 'ana', columns: ['slug,viewcount']},
            (payload) => {
              console.log('Change received!', payload)
              
            }
          )
          .subscribe()
        return () => {
          channels.unsubscribe()
        }
      }, [])*/




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


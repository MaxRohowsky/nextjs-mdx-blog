import React from 'react';
import Link from 'next/link'


function Card({title, img, body, link}){
    //const navigate = useNavigate();



    return(
        <Link href={link}>
        <div className='card'>
            <div className='card__item'>
                <img className='card__image' src={img} alt='' />
            </div>

            <div className='card__item'>
                <div className='card__title'>
                    <h3>{title}</h3>
                </div>
                <div className='card__description'>
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
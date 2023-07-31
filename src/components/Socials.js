//import styles from '../styles/Course.module.scss'
import styles from '../styles/Socials.module.scss'
import React, { useEffect, useState } from 'react';

export default function Socials(input) {

    /* Twitter: Share Button shares the current page */
    const [twitterShareUrl, setTwitterShareUrl] = useState('');

    useEffect(() => { // Runs once after initial render due to empty dependency array []
        const currentUrl = window.location.href;
        const encodedUrl = encodeURIComponent(currentUrl);
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        setTwitterShareUrl(shareUrl);
      }, []);

    /* Copy: Copy the current link and toogle tooltip */
    function CopyUrl() {
        var link = window.location.href;
        navigator.clipboard.writeText(link)
    }
      
    /* Github: Link to correct github page*/
    const githubReference = input.githubReference !== null ? input.githubReference : '';

    return (
        <>  
            <div className={styles.post__socials}>

                <a href={twitterShareUrl} className={`${styles.post__icon} ${styles.post__twitter}`}>
                <span className={styles.tooltip}>Twitter</span>
                    <span><i className="fab fa-twitter" ></i></span>
                </a>

                <a href={`https://github.com/codewmax/${githubReference}`}target="_blank" rel="noreferrer" className={`${styles.post__icon} ${styles.post__github}`}>
                <span className={styles.tooltip}>Github</span>
                    <span><i className="fab fa-github" ></i></span>
                </a>

                <a href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw?sub_confirmation=1" target="_blank" rel="noreferrer"
                    className={`${styles.post__icon} ${styles.post__youtube}`}>
                    <span className={styles.tooltip}>Subscribe</span>
                    <span><i className="fab fa-youtube" ></i></span>
                </a>

                <button onClick={() => CopyUrl()} className={`${styles.post__icon} ${styles.post__copy}`}>
                <span className={styles.tooltip}>Copy URL</span>
                    <span><i className="fas fa-link"></i></span>
                </button>

            </div>

        </>
    )
}
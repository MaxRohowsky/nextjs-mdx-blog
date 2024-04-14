import styles from './socials.module.scss'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Socials(input) {

    /* Twitter: Share Button shares the current page */
    const [twitterShareUrl, setTwitterShareUrl] = useState('');
   // const [facebookShareUrl, setFacebookShareUrl] = useState('');
    const [linkedinShareUrl, setLinkedinShareUrl] = useState('');

    useEffect(() => { // Runs once after initial render due to empty dependency array []
        const currentUrl = window.location.href;
        const encodedUrl = encodeURIComponent(currentUrl);
        const shareUrlTwitter = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        //const shareUrlFacebook = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
        const shareUrlLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
        setTwitterShareUrl(shareUrlTwitter);
        //setFacebookShareUrl(shareUrlFacebook);
        setLinkedinShareUrl(shareUrlLinkedin);
    }, []);



    /* Copy: Copy the current link and toogle tooltip 
    function CopyUrl() {
        var link = window.location.href;
        navigator.clipboard.writeText(link)
    }*/

    /* Github: Link to correct github page*/
    const githubReference = input.githubReference != null ? input.githubReference : '';

    return (
        <>
            <div className={styles.wrapper}>

                {/*} <a href={facebookShareUrl} target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__facebook}`}>
                    <div>
                        <FontAwesomeIcon className={styles.facebook} icon={faFacebook} />
                    </div>
  
                 </a>*/}

                <a href={linkedinShareUrl} target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__linkedin}`}>
                    <div>
                        <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} />
                    </div>

                </a>

                <a href={twitterShareUrl} target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__twitter}`}>
                    <div>
                        <FontAwesomeIcon className={styles.twitter} icon={faTwitter} />
                    </div>

                </a>

                <a href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw?sub_confirmation=1" target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__youtube}`}>
                    <div>
                        <FontAwesomeIcon className={styles.youtube} icon={faYoutube} />
                    </div>

                </a>


                <a href={`https://github.com/maxontech${githubReference}`} target="_blank" rel="noreferrer"
                    className={`${styles.post__socials} ${styles.post__github}`}>
                    <div>
                        <FontAwesomeIcon className={styles.github} icon={faGithub} />
                    </div>

                </a>
                
                {/*
                <div onClick={() => CopyUrl()} className={`${styles.post__socials} ${styles.post__copy}`}>
                    <div>
                        <FontAwesomeIcon className={styles.link} icon={faLink} />
                    </div>

                </div> */}

            </div>


        </>
    )
}
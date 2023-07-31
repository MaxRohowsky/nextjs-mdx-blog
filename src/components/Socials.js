import styles from '../styles/Socials.module.scss'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Socials(input) {

    /* Twitter: Share Button shares the current page */
    const [twitterShareUrl, setTwitterShareUrl] = useState('');
    const [facebookShareUrl, setFacebookShareUrl] = useState('');
    const [linkedinShareUrl, setLinkedinShareUrl] = useState('');

    useEffect(() => { // Runs once after initial render due to empty dependency array []
        const currentUrl = window.location.href;
        const encodedUrl = encodeURIComponent(currentUrl);
        const shareUrlTwitter = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        const shareUrlFacebook = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
        const shareUrlLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
        setTwitterShareUrl(shareUrlTwitter);
        setFacebookShareUrl(shareUrlFacebook);
        setLinkedinShareUrl(shareUrlLinkedin);
        console.log(shareUrlFacebook)
    }, []);

    

    /* Copy: Copy the current link and toogle tooltip */
    function CopyUrl() {
        var link = window.location.href;
        navigator.clipboard.writeText(link)
    }

    /* Github: Link to correct github page*/
    const githubReference = input.githubReference != null ? input.githubReference : '';

    return (
        <>
            <div className={styles.wrapper}>

                <a href={facebookShareUrl} target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__facebook}`}>
                    <div>
                        <i className="fab fa-facebook" ></i>
                    </div>
                    <span>Facebook</span>
                </a>

                <a href={linkedinShareUrl} target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__linkedin}`}>
                    <div>
                        <i className="fab fa-linkedin" ></i>
                    </div>
                    <span>LinkedIn</span>
                </a>

                <a href={twitterShareUrl} target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__twitter}`}>
                    <div>
                        <i className="fab fa-twitter" ></i>
                    </div>
                    <span>Twitter</span>
                </a>

                <a href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw?sub_confirmation=1" target="_blank" rel="noreferrer" className={`${styles.post__socials} ${styles.post__youtube}`}>
                    <div>
                        <i className="fab fa-youtube" ></i>
                    </div>
                    <span>Subscribe</span>
                </a>


                <a href={`https://github.com/codewmax${githubReference}`} target="_blank" rel="noreferrer"
                    className={`${styles.post__socials} ${styles.post__github}`}>
                    <div>
                        <i className="fab fa-github" ></i>
                    </div>
                    <span>Get Code</span>
                </a>

                <div onClick={() => CopyUrl()} className={`${styles.post__socials} ${styles.post__copy}`}>
                    <div>
                        <i className="fas fa-link" ></i>
                    </div>
                    <span className={styles.getlink}>Get Link</span>
                    <span className={styles.copied}>Copied!</span>

                    
                </div>

            </div>



            {/*<div className={styles.post__socials}>

                <a href={twitterShareUrl} className={`${styles.post__icon} ${styles.post__twitter}`}>
                <span className={styles.tooltip}>Twitter</span>
                    <span><i className="fab fa-twitter" ></i></span>
                </a>

                <a href={`https://github.com/codewmax/${githubReference}`} target="_blank" rel="noreferrer" className={`${styles.post__icon} ${styles.post__github}`}>
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

            </div>*/}

        </>
    )
}
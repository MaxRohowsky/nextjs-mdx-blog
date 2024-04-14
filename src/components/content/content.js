import styles from './content.module.scss';
import { dateTime } from '@/components/datetime/datetime';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Content({ posts, courses }) {

    return (

        <section className={styles.content}>

            <div className={styles.content__wrap}>

                <div className={styles.content__posts}>

                    <h2><span className={styles.content__emoji}>✉️</span> Latest Letters</h2>

                    {posts.edges.map((post, index) => (

                        <Link style={{ textDecoration: 'none' }} key={index} href={post.node.uri.replace('/', '/blog/')}>

                            <div className={styles.content__post} >

                                <p className={styles.post__title}>{post.node.title}</p>

                                <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></div>

                                <p className={styles.date}>{dateTime(post.node.date)}</p>

                            </div>

                        </Link>

                    ))}

                    <Link style={{ fontWeight: 'bold' }} href="/blog">View more →</Link>

                </div>

                <div className={styles.content__projects}>

                    <h2><span className={styles.content__emoji}>🛠️</span> Featured Projects</h2>


                    <ProjectSnippet
                        title='Twitter (X) Font Editor'
                        text='Google Chrome Extension that Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ Fonts on Twitter X Posts by making use of Unicode characters.'
                        date='16 March 2024'
                        url='https://github.com/maxontech/twitter-font-editor'
                        imgSrc='/previews/x-font-editor.png'
                    />


                    <ProjectSnippet
                        title='Click to Copy'
                        text='Google Chrome Extension that allows you to selectively Copy Text, Urls, and CSS with one Click.'
                        date='10 March 2024'
                        url='https://chromewebstore.google.com/detail/click-to-copy/fonpjogfddpklefillfepifbcikebelh'
                        imgSrc='/previews/click-to-copy.png'
                    />

                    <ProjectSnippet
                        title='GitPro'
                        text='Showcase website for unique and beautiful GitHub profiles that is fully automated using GitHub Actions.'
                        date='15 February 2024'
                        url='https://maxontech.github.io/best-github-profile-readme/'
                        imgSrc='/previews/gitpro.png'
                    />


                    <ProjectSnippet
                        title='NEFT Flappy Bird'
                        text='Neuroevolution with Fixed Topologies (NEFT) implemented in the Flappy Bird without using any Machine Learning Libraries.'
                        date='10 January 2023'
                        url='https://github.com/maxontech/neft-flappy-bird'
                        imgSrc='/previews/neft-flappy-bird.png'
                    />


                    <Link style={{ fontWeight: 'bold' }} href="/projects">View more →</Link>






                </div>

            </div>



        </section>

    )
}


const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.pageX - 160, y: ev.pageY - 200 });
        };
        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };

    }, []);
    return mousePosition;
};


function ProjectSnippet({ title, text, date, url, imgSrc }) {
    const mousePosition = useMousePosition();
    return (
        <a href={url} className={styles.content__project} >
            <p className={styles.project__title}>{title}</p>
            <div>
                <p>{text}</p>
            </div>
            <p className={styles.date}>{date}</p>
            <div className={styles.projectImage} style={{ position: 'absolute', left: mousePosition.x, top: mousePosition.y }}>
                <Image
                    src={imgSrc} // Path relative to the `public` directory
                    alt="Transparent Logo"
                    width={320} // Set your desired width
                    height={180} // Set your desired height

                />
            </div>


        </a>
    );
};



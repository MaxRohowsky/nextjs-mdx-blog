import styles from './FontEditor.module.scss';

export default function ClickToCopy() {
    return (
        <div className={styles.container}>

                <div>
                    <img src="/misc/explainer-img.png" alt="description" className={styles.image} />
                </div>
                <div>
                    <div className={styles.header}>
                        <h1 className={styles.title}>LinkedIn Font Editor</h1>
                        <img src="/misc/icon-linkedin.png" className={styles.icon} />
                    </div>
                    <p className={styles.subtitle}>Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and <u>Underlined</u> Fonts on LinkedIn Posts.</p>
                    <ul>
                        <li>
                            <p>Install the Extension from the Chrome Webstore</p>
                        </li>
                        <li>
                            <p>Make your LinkedIn Posts stand out!</p>
                        </li>
                    </ul>
                    <p>Code and Documentation <a href="https://github.com/maxontech/linkedin-font-editor" className={styles.link}>linked here.</a></p>
                    <p className={styles.signature}>Made by <a href="https://maxontech.io" className={styles.link}> maxontech</a></p>
                </div>

        </div>
    );
}
import styles from './ClickToCopy.module.scss';

export default function ClickToCopy() {
    return (
        <div className={styles.container}>

                <div>
                    <img src="/misc/add-to-chrome.gif" alt="description" className={styles.image} />
                </div>
                <div>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Click to Copy</h1>
                        <img src="/misc/icon.png" className={styles.icon} />
                    </div>
                    <p className={styles.subtitle}>Get started in two simple steps:</p>
                    <ol>
                        <li>
                            <p>Pin "Click to Copy" to the Chrome toolbar:</p>
                            <p>Click on the puzzle icon, then the pin button.</p>
                        </li>
                        <li>
                            <p>Open "Click to Copy" in any page by clicking the icon!</p>
                        </li>
                    </ol>
                    <p>Code and Documentation <a href="https://github.com/maxontech/click-to-copy" className={styles.link}>linked here.</a></p>
                    <p className={styles.signature}>Made by <a href="https://maxontech.io" className={styles.link}> maxontech</a></p>
                </div>

        </div>
    );
}
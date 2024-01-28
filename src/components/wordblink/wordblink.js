'use client';
import styles from './wordblink.module.scss'


export default function Wordblink() {



    return (
        <div className={styles.process}>
            <div className={styles.processstep1}>
                <div className={styles.processsteptitlecontainer}>
                    <h1 className={styles.processsteptitle}>Frontend</h1>
                    <h1 className={styles.processsteptitleoverlay}>Frontend
                    </h1>
                </div>
            </div>
            <div className={styles.processstep2}>
                <div className={styles.processsteptitlecontainer}>
                    <h1 className={styles.processsteptitle}>to</h1>
                    <h1 className={styles.processsteptitleoverlay}>to
                    </h1>
                </div>
            </div>
            <div className={styles.processstep3}>
                <div className={styles.processsteptitlecontainer}>
                    <h1 className={styles.processsteptitle}>Backend!</h1>
                    <h1 className={styles.processsteptitleoverlay}>Backend!
                    </h1>
                </div>
            </div>
        </div>

    )

}
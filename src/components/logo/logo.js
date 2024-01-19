import styles from './logo.module.scss'; // Import your styles module

export default function Logo() {
  return (
    <>
      <div className={styles.squareLoader}>
        <div className={styles.squareLoader__square}></div>
        <div className={styles.squareLoader__square}></div>
        <div className={styles.squareLoader__square}></div>
        <div className={styles.squareLoader__square}></div>
      </div>

    </>
  )

}




import styles from './crosshair.module.scss'; // Import your styles module

export default function Crosshair({ x, y }) {
  return (
    <>
      <div className={styles.cross} style={{ '--x': x, '--y': y }}>
        <div
          className={styles.crossline1}
          style={{
            width: '10px',
            height: '20px',
            position: 'absolute',
            borderRightWidth: '1px',
          }}
        ></div>
        <div
          className={styles.crossline2}
          style={{
            width: '20px',
            height: '10px',
            position: 'absolute',
            borderBottomWidth: '1px',
          }}
        ></div>
      </div>
    </>
  )

}




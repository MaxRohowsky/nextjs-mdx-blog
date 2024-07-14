// components/Particles.js
import React from 'react';
import styles from './particles.module.css';

const Particles = () => {
  return (
    <div className={styles.particles}>
      {[...Array(50)].map((_, i) => (
        <div key={i} className={styles.particle}></div>
      ))}
    </div>
  );
};

export default Particles;
import React from 'react';
import styles from './particles.module.css';

const Particles = ({numberOfParticles=50, radius=200, opacity=0.5}) => {
  const degreesPerParticle = 360 / numberOfParticles; // Distribute particles evenly along the circle

  return (
    <div className={styles.particles}>
      {[...Array(numberOfParticles)].map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            transform: `rotate(${degreesPerParticle * i}deg) translateX(${radius}px)`, // Adjust translateX to control the radius
            opacity: opacity,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Particles;
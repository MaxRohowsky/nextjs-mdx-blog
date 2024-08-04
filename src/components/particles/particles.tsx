import React from 'react';
import styles from './particles.module.css';

const Particles = ({ numberOfParticles = 50, radius = 200, opacity = 0.5, right = 90, left = undefined, color='white' }) => {
  const degreesPerParticle = 360 / numberOfParticles; // Distribute particles evenly along the circle

  return (
    <div className={styles.particles}
      style={left !== undefined ? { left: `${left}px` } : { right: `${right}px` }}>
          {[...Array(numberOfParticles)].map((_, i) => (
        // Outer div for rotation
        <div
          key={i}
          className={styles.particleContainer}
          style={{
            transform: `rotate(${degreesPerParticle * i}deg)`, // Rotate the container
          }}
        >
          {/* Inner div for positioning */}
          <div
            className={styles.particle}
            style={{
              transform: `translateX(${radius}px)`, // Position the particle on the circumference
              opacity: opacity,
              backgroundColor: color,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Particles;
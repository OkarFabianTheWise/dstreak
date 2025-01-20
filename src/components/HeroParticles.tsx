import { bolt } from '@/assets/image';
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  value: number;
  x: number;
  y: number;
  size: number;
  lifetime: number;
  startTime: number;
  wobbleOffset: number;
  wobbleSpeed: number;
  speed: number;
  opacity: number;
}

const HeroParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticle = () => {
    const size = 16 + Math.random() * 30; // Random size between 4-12px
    return {
      id: Date.now() + Math.random(),
      value: Number((Math.floor(Math.random() * 100) * 10).toPrecision(1)),
      x: Math.random() * 100, // Random x position (0-100%)
      y: 30 + Math.random() *100, // Start at bottom
      size,
      lifetime: 8000 + Math.random() * 10000, // 8-15 seconds lifetime
      startTime: Date.now(),
      wobbleOffset: 10 + Math.random() * Math.PI * 2, // Reduced wobble offset range
      wobbleSpeed: 3 + Math.random() * 10, // Reduced wobble speed for subtler movement
      speed: 10 + Math.random() * 20, // Slightly slower speed to match longer lifetime
      opacity: 0.7 + Math.random() * 0.3, // Starting opacity
    };
  };

  useEffect(() => {
    let animationFrameId: number;
    let lastSpawnTime = Date.now();
    let nextSpawnDelay = 500 + Math.random() * 1500; // Random delay between 500ms and 2.5s

    const updateParticles = () => {
      const currentTime = Date.now();

      // Spawn new particles with random timing
      if (currentTime - lastSpawnTime > nextSpawnDelay) {
        // Spawn 1-3 particles at once
        const particlesToSpawn = Math.floor(Math.random() * 3) + 1;
        setParticles(prev => [...prev, ...Array(particlesToSpawn).fill(null).map(() => createParticle())]);
        
        lastSpawnTime = currentTime;
        nextSpawnDelay =500 + Math.random() * 1500; // Set next random spawn delay
      }

      setParticles(prev => 
        prev
          .filter(particle => {
            const age = currentTime - particle.startTime;
            return age < particle.lifetime;
          })
          .map(particle => {
            const age = currentTime - particle.startTime;
            const progress = age / particle.lifetime;
            const deltaTime = 16 / 1000; // Assume ~60fps

            // Calculate new position
            const newY = particle.y - (particle.speed * deltaTime);
            const wobbleAmount = Math.sin(particle.wobbleOffset + currentTime * 0.001 * particle.wobbleSpeed) * 0.003;
            const newX = particle.x + wobbleAmount;

            return {
              ...particle,
              x: newX,
              y: newY,
              opacity: particle.opacity * (1 - progress),
            };
          })
      );

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div ref={containerRef} className="absolute w-full h-full overflow-hidden pointer-events-none z-50 bg-transparent">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute font-bold text-primary flex gap-1 items-center justify-center`}
          style={{
            left: `${particle.x}%`,
            fontSize: `${particle.size}px`,
            bottom: `${100 - particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transition: 'opacity 0.1s ease-out',
          }}
        >
          +{particle.value}XP<img src={bolt} alt="" />
        </div>
      ))}
    </div>
  );
};

export default HeroParticles;

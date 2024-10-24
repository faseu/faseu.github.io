import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from '../particles.json';

function ParticlesContainer() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="">
      {init && (
        <Particles
          className="w-full h-full absolute translate-z-0"
          options={particlesOptions}
        />
      )}
    </div>
  );
}

export default ParticlesContainer;

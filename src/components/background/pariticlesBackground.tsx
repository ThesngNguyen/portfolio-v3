'use client';

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import useParticlesConfig from "./hooks/useParticleConfigs";

const ParticlesBackground = () => {

  const [init, setInit] = useState(false);
  const particlesConfig = useParticlesConfig();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <div className="particles-container">
        <Particles
          id="tsparticles"
          options={particlesConfig}
        />
      </div>
    );
  }

  return <></>; 
};

export default ParticlesBackground;
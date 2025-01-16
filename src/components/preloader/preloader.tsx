import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Particle } from '@tsparticles/engine';
import ParticlesBackground from '../background/pariticlesBackground';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const zoomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const preloader = preloaderRef.current;
        const zoomBox = zoomRef.current;

        if (preloader && zoomBox) {
            gsap.timeline({
                delay: 5,
                onComplete: () => {
                    preloader.style.display = 'none';
                    onComplete();
                },
            })
                .to(zoomBox, {
                    scale: 50,
                    duration: 1.5,
                    ease: 'power4.inOut',
                })
                .to(preloader, {
                    opacity: 0,
                    duration: 0.5,
                }, '-=1');
        }
    }, [onComplete]);

    const boxStyle = {
        width: 100,
        height: 100,
        backgroundColor: "#7873f5",
        borderRadius: "5px",
    };

    const zoomBoxStyle = {
        width: 50,
        height: 50,
        backgroundColor: "#7873f5",
        borderRadius: "5px",
    };

    return (
        <div ref={preloaderRef} className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <ParticlesBackground />
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                className="z-10"
                style={boxStyle}
            />
            <div ref={zoomRef} style={zoomBoxStyle} className="absolute" />
        </div>
    );
};

export default Preloader;

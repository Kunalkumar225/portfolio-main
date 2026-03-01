import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { styles } from "../styles";

const CinematicHero = () => {
    const roles = ["Full-Stack Developer", "System Architect", "DSA Solver", "Critical Thinker", "Backend Developer"];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" className="relative w-full h-screen mx-auto flex flex-col justify-center items-center overflow-hidden bg-primary">
            <span className="hash-span" id="hero"></span>

            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 bg-grid-animate opacity-20"></div>

            {/* 3D Background */}
            <motion.div style={{ y: yParallax, opacity: opacityHero }} className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[0, 0, 5]} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Fixed-Position Profile Image Container */}
                    <div className="flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full h-full relative"
                        >
                            {/* Animated Background Rings */}
                            <div className="absolute inset-[-20px] rounded-full border border-neon-cyan/20 animate-spin-slow"></div>
                            <div className="absolute inset-[-40px] rounded-full border border-vivid-purple/10 animate-reverse-spin"></div>

                            {/* Glowing border effect */}
                            <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-30 blur-2xl animate-pulse-slow"></div>

                            {/* Image container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-neon">
                                <img
                                    src="/profile.jpg"
                                    alt="KUNAL"
                                    className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-500 scale-105"
                                />
                            </div>

                            {/* Decorative corner brackets */}
                            <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-neon-cyan/50 rounded-tl-3xl"></div>
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-vivid-purple/50 rounded-br-3xl"></div>
                        </motion.div>
                    </div>

                    {/* Text Content - Stabilized Layout */}
                    <div className="text-center lg:text-left flex flex-col justify-center min-w-[320px] sm:min-w-[500px]">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            {/* Futuristic Prefix */}
                            <p className="text-neon-cyan font-mono text-[14px] sm:text-[16px] tracking-[0.5em] uppercase mb-4 opacity-70">
                                :: Hi, I'm
                            </p>

                            <h1 className="text-white font-black text-[50px] xs:text-[60px] sm:text-[80px] lg:text-[100px] leading-[0.9] tracking-tighter">
                                KUNAL<br />

                                {/* Stable Container for Switching Roles */}
                                <div className="h-[1.2em] relative flex items-center justify-center lg:justify-start mt-4">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={roles[roleIndex]}
                                            initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                            exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.23, 1, 0.32, 1]
                                            }}
                                            className="text-brand-gradient inline-block whitespace-nowrap"
                                        >
                                            {roles[roleIndex]}
                                        </motion.span>
                                    </AnimatePresence>

                                    {/* Futuristic Cursor Accent */}
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block h-[0.7em] w-[4px] bg-neon-cyan ml-4 shadow-neon mb-2"
                                    />
                                </div>
                            </h1>
                        </motion.div>

                        <p className="text-text-secondary text-lg mt-8 max-w-lg hidden lg:block opacity-60 font-light italic">
                            &lt; Designing the next generation of web interfaces /&gt;
                        </p>

                        {/* Restored Buttons - Stabilized Positioning */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-6 mt-12 mb-4 justify-center lg:justify-start items-center"
                        >
                            <a href="#works" className="w-full sm:w-auto">
                                <button className="btn-primary w-full px-10 py-4 text-lg">
                                    Explore Projects
                                </button>
                            </a>
                            <a href="#contact" className="w-full sm:w-auto">
                                <button className="btn-outline w-full px-10 py-4 text-lg">
                                    Get in Touch
                                </button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 xs:bottom-20 w-full flex justify-center items-center z-10">
                <a href="#about">
                    <div className="w-[30px] h-[50px] rounded-3xl border border-white/20 flex justify-center items-start p-1 backdrop-blur-sm">
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className="w-1.5 h-1.5 rounded-full bg-neon-cyan mb-1 shadow-neon"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default CinematicHero;

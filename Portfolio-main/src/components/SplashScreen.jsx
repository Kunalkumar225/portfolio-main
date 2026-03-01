import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        // Complete loading after a precise animation duration
        const timer = setTimeout(() => {
            onComplete();
        }, 2200);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
        >
            <div className="flex flex-col items-center gap-10">
                {/* Logo Mark */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-surface border border-hairline flex items-center justify-center shadow-[0_0_40px_rgba(91,92,255,0.08)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50" />
                        <span className="font-bold text-text-primary text-[20px] tracking-tight relative z-10">KK</span>
                    </div>
                </motion.div>

                <div className="flex flex-col justify-center items-center gap-5">
                    {/* Progress Bar Container */}
                    <div className="w-48 h-[2px] bg-surface rounded-full overflow-hidden relative">
                        {/* Animated Progress Line */}
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-accent"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                        />
                    </div>

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="text-text-muted text-[11px] font-medium tracking-[0.2em] uppercase"
                    >
                        Welcome Sir...
                    </motion.span>
                </div>
            </div>

            {/* Extremely subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(91,92,255,0.03)_0%,transparent_60%)] pointer-events-none rounded-full" />
        </motion.div>
    );
};

export default SplashScreen;

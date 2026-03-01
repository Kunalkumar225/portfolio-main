import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpeechBubbleProps {
    text: string;
    visible: boolean;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, visible }) => {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-[15%] right-[10%] z-40 max-w-[250px]"
                >
                    <div className="relative glass-morphism p-4 rounded-2xl border border-white/20 shadow-2xl">
                        <p className="text-white text-sm font-medium leading-relaxed">
                            {text}
                        </p>

                        {/* Tail */}
                        <div className="absolute top-full right-8 w-4 h-4 bg-white/10 backdrop-blur-md border-r border-b border-white/20 transform rotate-45 -translate-y-2 translate-x-1" />

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-neon-blue/5 blur-xl rounded-2xl -z-10" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

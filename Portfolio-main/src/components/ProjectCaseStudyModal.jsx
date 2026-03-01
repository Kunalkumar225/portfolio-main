import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";

const ProjectCaseStudyModal = ({ project, onClose }) => {
    // Lock body scroll and handle Lenis when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden"; // Also lock html for Lenis
            // Optional: If you had access to lenis instance, you'd call lenis.stop()
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [project]);

    if (!project) return null;

    // Use React Portal to render modal outside of the stacking context of parent components
    return ReactDOM.createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-10 bg-black/95 backdrop-blur-xl" // Increased z-index & opacity
                onClick={onClose}
            >
                <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col">

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-surface w-full h-full overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative glass-card custom-scrollbar"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="fixed top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-neon-cyan/80 hover:text-black transition-all z-[100000] backdrop-blur-md border border-white/20 shadow-lg group"
                        >
                            <span className="group-hover:rotate-90 transition-transform duration-300 text-xl font-bold">✕</span>
                        </button>

                        {/* Hero Image */}
                        <div className="w-full h-[300px] sm:h-[450px] relative flex-shrink-0">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10">
                                <h2 className="text-white font-black text-[30px] sm:text-[60px] leading-tight tracking-tighter drop-shadow-lg">
                                    {project.name}
                                </h2>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag.name}
                                            className={`text-[12px] px-3 py-1 rounded-full bg-white/10 border border-white/5 backdrop-blur-md ${tag.color} font-mono tracking-widest uppercase`}
                                        >
                                            #{tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-10 flex flex-col gap-12 pb-20">
                            {/* Overview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-white text-[24px] font-bold mb-4 flex items-center gap-2 tracking-tight">
                                    <span className="w-8 h-[2px] bg-neon-cyan rounded-full shadow-[0_0_10px_#22D3EE]" /> Overview
                                </h3>
                                <p className="text-text-secondary text-[16px] sm:text-[18px] leading-relaxed font-light">
                                    {project.full_description || project.description}
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Key Features */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <h4 className="text-white text-[20px] font-bold mb-6 tracking-tight flex items-center gap-2">
                                        <div className="w-2 h-2 bg-vivid-purple rounded-full" /> Key Features
                                    </h4>
                                    <ul className="flex flex-col gap-4">
                                        {(project.features || []).map((feature, i) => (
                                            <li key={i} className="text-text-secondary text-[15px] flex items-start gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-vivid-purple/30 transition-colors">
                                                <span className="text-vivid-purple mt-1">▹</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Challenges */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h4 className="text-white text-[20px] font-bold mb-6 tracking-tight flex items-center gap-2">
                                        <div className="w-2 h-2 bg-neon-cyan rounded-full" /> Challenges & Solutions
                                    </h4>
                                    <ul className="flex flex-col gap-4">
                                        {(project.challenges || []).map((challenge, i) => (
                                            <li key={i} className="text-text-secondary text-[15px] flex items-start gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-neon-cyan/30 transition-colors">
                                                <span className="text-neon-cyan mt-1">▹</span>
                                                {challenge}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Tech Stack Grid */}
                            <div>
                                <h4 className="text-white text-[20px] font-bold mb-6 tracking-tight">Architecture & Tools</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {project.tags.map((tag) => (
                                        <div key={tag.name} className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-3 group hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all backdrop-blur-sm cursor-default">
                                            {tag.icon && (
                                                <img src={tag.icon} alt={tag.name} className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                                            )}
                                            <span className="text-text-muted font-mono text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">
                                                {tag.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 pt-6 border-t border-white/5">
                                <a
                                    href={project.source_code_link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full sm:w-auto px-12 btn-outline flex items-center justify-center gap-2 text-center py-4 text-lg"
                                >
                                    <img src={github} alt="github" className="w-6 h-6 opacity-70" />
                                    Review Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

export default ProjectCaseStudyModal;

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { achievements } from "../constants";

const Certifications = () => {
    return (
        <div className="w-full py-24 px-6 lg:px-12 relative overflow-hidden z-10" id="certifications">

            {/* Soft Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] pointer-events-none rounded-[100%]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div variants={textVariant()} className="mb-16 text-center flex flex-col items-center">
                    <span className="text-text-muted font-mono text-xs sm:text-sm tracking-widest uppercase bg-glass-tint border border-glass-border px-4 py-1.5 rounded-full inline-flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                        Verified Credentials
                    </span>
                    <h2 className="text-[32px] lg:text-[44px] font-bold text-white tracking-tight">
                        Certifications & Awards
                    </h2>
                </motion.div>
            </div>

            {/* Scrolling Glass Logo Strip */}
            <div className="w-full relative mt-12 py-12 glass-panel border-x-0 border-y border-glass-border overflow-hidden">

                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0B0F19] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0B0F19] to-transparent z-20 pointer-events-none" />

                <div className="flex w-[300%] sm:w-[200%] gap-12 sm:gap-24 animate-infinite-scroll px-12 items-center">
                    {[...Array(3)].map((_, arrayIndex) => (
                        <React.Fragment key={`cert-group-${arrayIndex}`}>
                            {achievements.map((item, index) => (
                                <a
                                    key={`cert-${arrayIndex}-${index}`}
                                    href={item.verification_link !== "#" ? item.verification_link : undefined}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center shrink-0 w-[140px] sm:w-[200px] group cursor-pointer relative"
                                    title={item.title}
                                >
                                    {/* Hover glow behind logo */}
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-full pointer-events-none" />

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="max-h-[50px] sm:max-h-[70px] w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 drop-shadow-lg"
                                    />
                                </a>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Certifications, "certifications");

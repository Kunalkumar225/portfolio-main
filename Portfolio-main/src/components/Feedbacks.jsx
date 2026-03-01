import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { textVariant } from "../utils/motion";

const easeApple = [0.4, 0, 0.2, 1];

const AchievementStat = ({ title, issuer, date, category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, ease: easeApple, delay: index * 0.1 }}
    className="flex flex-col items-start text-left flex-1 p-8 sm:p-10 border-b sm:border-b-0 sm:border-r border-glass-border last:border-0 hover:bg-white/[0.03] transition-colors duration-500 relative group"
  >
    {/* Hover Accent Line Top */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="flex items-center justify-between w-full mb-6">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(91,92,255,0.6)]" />
        <span className="text-accent font-mono text-[11px] font-bold uppercase tracking-widest">{category}</span>
      </div>
      <span className="text-text-muted font-mono text-[11px] font-medium tracking-widest bg-white/5 px-2.5 py-1 rounded backdrop-blur-md border border-white/5">{date}</span>
    </div>

    <h3 className="text-white text-[20px] font-bold tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
      {issuer}
    </h3>

    <p className="text-text-secondary text-[14px] leading-relaxed max-w-[240px]">
      {title}
    </p>

  </motion.div>
);

const Achievements = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-6 lg:px-12 relative z-10">
      <motion.div variants={textVariant()} className="mb-12 text-center sm:text-left flex flex-col items-center sm:items-start">
        <span className="text-text-muted font-mono text-xs sm:text-sm tracking-widest uppercase bg-glass-tint border border-glass-border px-4 py-1.5 rounded-full inline-flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] mb-6">
          <span className="w-2 h-2 rounded-full bg-accent mr-2" />
          Milestones
        </span>
        <h2 className="text-[32px] lg:text-[44px] font-bold text-white tracking-tight leading-none">
          Achievements.
        </h2>
      </motion.div>

      <div className="w-full glass-panel rounded-3xl overflow-hidden shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-glass-border relative">
        {/* Subtle inner grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />

        {achievements.map((achievement, index) => (
          <AchievementStat key={achievement.title} index={index} {...achievement} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Achievements, "feedbacks");

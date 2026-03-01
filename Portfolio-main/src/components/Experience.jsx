import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const easeApple = [0.4, 0, 0.2, 1];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: easeApple, delay: index * 0.1 }}
      className="relative group w-full lg:w-[90%]"
    >
      {/* Node / Floating Glass Marker */}
      <div className="hidden md:flex absolute -left-[56px] sm:-left-[76px] top-6 w-14 h-14 rounded-full bg-glass-tint backdrop-blur-3xl border-2 border-glass-border items-center justify-center z-20 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:border-glass-light transition-all duration-500 ease-apple overflow-hidden">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[50%] h-[50%] object-cover rounded-full filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
        />
        {/* Glow effect on hover inside the node */}
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Horizontal Connector Line (Node to Card) - glowing */}
      <div className="hidden md:block absolute -left-[20px] sm:-left-[30px] top-12 w-[20px] sm:w-[30px] h-[2px] bg-gradient-to-r from-transparent to-glass-border group-hover:to-glass-light transition-colors duration-500 z-10" />

      {/* Main Glass Card */}
      <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-10 flex flex-col relative overflow-hidden group-hover:-translate-y-2 group-hover:rotate-[0.5deg]">

        {/* Background reflection sweep */}
        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-[1.5s] ease-in-out pointer-events-none" />

        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            {/* Mobile Icon (hidden on desktop timeline) */}
            <div className="md:hidden w-12 h-12 rounded-full bg-glass-tint border border-glass-border flex items-center justify-center p-2 shrink-0 overflow-hidden">
              <img src={experience.icon} alt={experience.company_name} className="w-full h-full object-cover rounded-full filter grayscale opacity-80" />
            </div>

            <div>
              <h3 className="text-white text-[22px] sm:text-[26px] font-bold tracking-tight mb-1">
                {experience.title}
              </h3>
              <p className="text-accent text-[15px] font-medium tracking-wide">
                {experience.company_name}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center justify-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/5 rounded-full text-text-secondary text-[13px] font-mono tracking-wider font-medium whitespace-nowrap self-start shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            {experience.date}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          <ul className="list-none space-y-4">
            {experience.points.map((point, i) => (
              <li
                key={`experience-point-${i}`}
                className="text-text-secondary text-[15px] leading-relaxed relative pl-8 tracking-wide font-normal"
              >
                {/* Custom Glass Bullet */}
                <span className="absolute left-0 top-[8px] w-3 h-3 rounded-full border border-glass-border bg-glass-tint group-hover:bg-accent/20 group-hover:border-accent/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-colors duration-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-6 lg:px-12 relative z-10" id="experience">
      <motion.div variants={textVariant()} className="mb-20">
        <span className="text-text-muted font-mono text-xs sm:text-sm tracking-widest uppercase bg-glass-tint border border-glass-border px-4 py-1.5 rounded-full inline-flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] mb-6">
          <span className="w-2 h-2 rounded-full bg-accent mr-2" />
          Career Trajectory
        </span>
        <h2 className="text-[36px] lg:text-[48px] font-bold text-white tracking-tight leading-none mb-6">
          Work Experience.
        </h2>
        <p className="text-text-secondary text-[16px] leading-relaxed max-w-2xl">
          A track record of engineering robust systems, scaling architecture, and delivering high-performance backend solutions in fast-paced environments.
        </p>
      </motion.div>

      <div className="relative max-w-5xl">
        {/* Minimal Glowing Vertical Timeline Line */}
        <div className="hidden md:block absolute left-8 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-glass-border to-transparent" />
        {/* Active glowing timeline segment that tracks visible items */}
        <div className="hidden md:block absolute left-8 top-[10%] bottom-[30%] w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent blur-[2px]" />

        <div className="flex flex-col gap-12 md:gap-20 md:pl-[120px]">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");

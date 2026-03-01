import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";

const easeApple = [0.4, 0, 0.2, 1];

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: easeApple, delay: index * 0.1 }}
      className="w-full"
    >
      <div className="flex flex-col lg:flex-row glass-card glass-card-hover rounded-[32px] overflow-hidden group relative">

        {/* Soft background glow inside the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0" />

        {/* Left Content (Info) */}
        <div className="w-full lg:w-3/5 p-8 sm:p-12 flex flex-col justify-center relative z-10">

          <h3 className="text-white font-bold text-[32px] sm:text-[40px] tracking-tight mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
            {name}
          </h3>

          <div className="bg-white/5 backdrop-blur-md border border-white/5 p-6 sm:p-8 rounded-2xl mb-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <h4 className="text-white text-[15px] font-semibold mb-3 tracking-wide flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(91,92,255,0.6)]" /> The Challenge
            </h4>
            <p className="text-text-secondary text-[16px] leading-relaxed mb-6">
              {description}
            </p>

            <h4 className="text-white text-[15px] font-semibold mb-3 tracking-wide flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" /> The Approach
            </h4>
            <p className="text-text-secondary text-[16px] leading-relaxed">
              Engineered a highly scalable architecture focusing on optimal performance, automated workflows, and robust security protocols.
            </p>
          </div>

          {/* Tech Stack Pills (Liquid Glass) */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="text-[14px] font-medium tracking-wide text-white/80 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-default transition-colors duration-300 hover:bg-white/20 hover:text-white"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <button
              onClick={onClick}
              className="btn-outline px-8 h-[48px] flex items-center justify-center tracking-wide"
            >
              Case Study
            </button>

            {source_code_link && (
              <button
                onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
                className="w-[48px] h-[48px] flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl transition-all duration-300 flex-shrink-0"
                title="View Source"
              >
                <img src={github} alt="github" className="w-[24px] h-[24px] object-contain filter invert opacity-80 group-hover:opacity-100" />
              </button>
            )}
          </div>
        </div>

        {/* Right Preview Frame (Visual) */}
        <div className="w-full lg:w-2/5 relative overflow-hidden border-t lg:border-t-0 lg:border-l border-glass-border bg-glass-tint/50 flex flex-col p-8 sm:p-12 items-center justify-center z-10">

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-glass-border shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition-all duration-[1.2s] ease-apple bg-surface/50 group-hover:-translate-y-2">

            {/* Mac Top Bar Glass */}
            <div className="h-8 w-full bg-white/5 backdrop-blur-xl border-b border-glass-border flex items-center px-4 gap-2 absolute top-0 z-20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
            </div>

            {/* Image Wrapper */}
            <div className="w-full h-full relative pt-8 bg-[#0B0F19]">
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 ease-apple"
              />
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-6 lg:px-12 relative z-10" id="projects">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: easeApple }}
        className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
      >
        <div className="max-w-3xl">
          <span className="text-text-muted font-mono text-xs sm:text-sm tracking-widest uppercase bg-glass-tint border border-glass-border px-4 py-1.5 rounded-full inline-flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent mr-2" />
            Selected Works
          </span>
          <h2 className="text-[36px] lg:text-[48px] font-bold text-white tracking-tight leading-none mb-6">
            Production Systems.
          </h2>
          <p className="text-text-secondary text-[16px] leading-relaxed">
            Real-world applications showcasing scalable architecture, clean code practices, and intuitive user experiences built for modern operations.
          </p>
        </div>

        <a href="https://github.com/Kunalkumar225" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 hover:border-glass-light hover:bg-white/10 text-white text-[15px] font-medium rounded-full group transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex-shrink-0">
          View GitHub Profile
          <span className="transform group-hover:translate-x-1 transition-transform text-accent">→</span>
        </a>
      </motion.div>

      <div className="flex flex-col gap-12 lg:gap-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {selectedProject && (
        <ProjectCaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default SectionWrapper(Works, "work");

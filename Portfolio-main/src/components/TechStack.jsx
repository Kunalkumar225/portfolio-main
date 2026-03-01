import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const easeApple = [0.4, 0, 0.2, 1];

const skillsByCategory = [
    {
        category: "Backend Core",
        skills: [
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        ]
    },
    {
        category: "Frontend & UI",
        skills: [
            { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "HTML5/CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        ]
    },
    {
        category: "Data & Cloud",
        skills: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        ]
    },
    {
        category: "DevOps & Tools",
        skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        ]
    },
    {
        category: "Architecture",
        skills: [
            { name: "DSA", icon: "https://img.icons8.com/color/48/data-configuration.png" },
            { name: "REST APIs", icon: "https://img.icons8.com/nolan/64/api.png" },
        ]
    },
];

const TechStack = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6 lg:px-12 relative z-10">

            {/* Background ambient glow */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div variants={textVariant()} className="mb-20">
                <span className="text-text-muted font-mono text-xs sm:text-sm tracking-widest uppercase bg-glass-tint border border-glass-border px-4 py-1.5 rounded-full inline-flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] mb-6">
                    <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                    Technical Arsenal
                </span>
                <h2 className="text-[36px] lg:text-[48px] font-bold text-white tracking-tight leading-none">
                    Core Engineering Stack.
                </h2>
            </motion.div>

            <div className="flex flex-col gap-12 lg:gap-16">
                {skillsByCategory.map((categoryGroup, index) => (
                    <motion.div
                        key={categoryGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: easeApple, delay: index * 0.1 }}
                        className="flex flex-col md:flex-row md:items-start md:gap-12"
                    >
                        {/* Category Sidebar */}
                        <div className="md:w-56 shrink-0 mb-6 md:mb-0 pt-2 border-t md:border-t-0 md:border-l border-glass-border md:pl-6">
                            <h3 className="text-white font-semibold text-[18px] tracking-tight">
                                {categoryGroup.category}
                            </h3>
                        </div>

                        {/* Skills Grid */}
                        <div className="flex flex-wrap gap-4 flex-1">
                            {categoryGroup.skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    transition={{ duration: 0.2, ease: easeApple }}
                                    className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] glass-card-hover group cursor-default relative overflow-hidden"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1.5 group-hover:bg-accent/20 transition-colors duration-300">
                                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-md" />
                                    </div>
                                    <span className="text-white text-[15px] font-medium tracking-wide pr-2">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(TechStack, "tech");

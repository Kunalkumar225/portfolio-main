import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Group technologies by category (simulated parsing based on common stacks)
const categorizeTech = (techList) => {
    const categories = {
        Backend: ["Java", "Spring Boot", "Spring Security", "Microservices", "Node JS", "Express JS"],
        Frontend: ["HTML 5", "CSS 3", "JavaScript", "React JS", "Tailwind CSS", "Redux Toolkit"],
        Databases: ["MySQL", "MongoDB"],
        Tools: ["Git", "GitHub", "Postman", "Docker", "VS Code", "Maven", "Gradle"],
    };

    const grouped = {
        Backend: [],
        Frontend: [],
        Databases: [],
        Tools: [],
        Other: [],
    };

    techList.forEach((tech) => {
        let placed = false;
        for (const [cat, items] of Object.entries(categories)) {
            if (items.includes(tech.name)) {
                grouped[cat].push(tech);
                placed = true;
                break;
            }
        }
        if (!placed) grouped.Other.push(tech);
    });

    // Remove empty categories
    if (grouped.Other.length === 0) delete grouped.Other;
    return grouped;
};

const SkillCategory = ({ title, skills, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
        className="flex flex-col gap-4"
    >
        <h3 className="text-[#9AA4B2] font-medium text-[14px] uppercase tracking-wider">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center p-6 bg-[#111827] border border-white/[0.06] rounded transition-all duration-120 hover:border-[rgba(124,58,237,0.25)] hover:bg-[rgba(124,58,237,0.05)] hover:-translate-y-[2px]"
                >
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain mb-3 filter grayscale opacity-70 transition-all duration-240 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    <span className="text-[#E6EAF2] text-[13px] font-medium text-center">
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    </motion.div>
);

const OrbitSkills = () => {
    const groupedSkills = categorizeTech(technologies);

    return (
        <section className="w-full max-w-7xl mx-auto py-24 px-6 lg:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
                className="mb-16"
            >
                <h2 className="text-[28px] lg:text-[40px] font-bold text-[#E6EAF2] tracking-tight">
                    Tech Stack
                </h2>
                <p className="mt-4 text-[#9AA4B2] text-[16px] max-w-2xl leading-relaxed">
                    Technologies and tools I use to build scalable, high-performance systems and full-stack applications.
                </p>
            </motion.div>

            <div className="flex flex-col gap-12">
                {Object.entries(groupedSkills).map(([category, skills], index) => (
                    skills.length > 0 && (
                        <SkillCategory key={category} title={category} skills={skills} index={index} />
                    )
                ))}
            </div>
        </section>
    );
};

export default SectionWrapper(OrbitSkills, "tech");

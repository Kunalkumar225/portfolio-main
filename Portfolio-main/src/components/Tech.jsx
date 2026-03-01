import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const CATEGORIES = [
  {
    title: "Backend Architecture",
    items: ["Java", "Spring Boot", "Node.js", "REST API", "Microservices", "JWT", "Hibernate", "JDBC", "Spring MVC", "Spring Framework", "Spring AI"]
  },
  {
    title: "Frontend & UI",
    items: ["React JS", "Next.js", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Databases & Tools",
    items: ["SQL", "AWS", "Docker", "Git", "GitHub", "Maven"]
  },
  {
    title: "Core CS",
    items: ["C", "C++", "Python", "DSA", "Leadership"]
  }
];

const Tech = () => {
  // Helper to get image by name from global list
  const getTechIcon = (name) => {
    const tech = technologies.find(t => t.name === name);
    return tech ? tech.icon : null;
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6 lg:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
        className="mb-12"
      >
        <span className="text-text-muted font-mono text-sm tracking-tight mb-2 block">&gt; _tech_stack</span>
        <h2 className="text-[32px] sm:text-[40px] font-bold text-text-primary tracking-tight">
          Tools & <span className="text-text-secondary">Technologies.</span>
        </h2>
      </motion.div>

      {/* Grid Layout  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {CATEGORIES.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.24, delay: catIndex * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col bg-surface border border-hairline rounded p-6"
          >
            {/* Category Title */}
            <h3 className="text-text-primary text-[16px] font-semibold mb-6 pb-3 border-b border-hairline relative">
              {category.title}
              <div className="absolute left-0 bottom-[-1px] w-8 h-[1px] bg-accent" />
            </h3>

            {/* Tech List */}
            <div className="flex flex-col gap-3">
              {category.items.map((itemName) => {
                const icon = getTechIcon(itemName);
                // Only render if we found it in constants, or just render name anyway
                return (
                  <div key={itemName} className="flex items-center gap-3 group cursor-default">
                    <div className="w-6 h-6 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-120">
                      {icon ? (
                        <img src={icon} alt={itemName} className="w-5 h-5 object-contain" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="text-[14px] text-text-secondary font-medium group-hover:text-text-primary transition-colors duration-120">
                      {itemName}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

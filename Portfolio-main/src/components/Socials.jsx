import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { FaFileDownload } from "react-icons/fa";
import { SiLeetcode, SiLinkedin, SiGithub } from "react-icons/si";

const SocialLink = ({ icon: Icon, link, label, delay }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
        className="group flex flex-col items-center gap-2 p-4 sm:p-6 rounded-lg hover:bg-accent-soft transition-colors duration-240"
        title={label}
    >
        <Icon className="w-6 h-6 text-text-muted group-hover:text-text-primary transition-colors duration-240" />
        <span className="text-[11px] font-medium text-text-muted group-hover:text-accent transition-colors duration-240 uppercase tracking-widest">
            {label}
        </span>
    </motion.a>
);

const Socials = () => {
    return (
        <section className="w-full border-y border-hairline bg-primary/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center sm:justify-between items-center flex-wrap gap-4 py-2 sm:py-0">
                <SocialLink icon={SiGithub} link="https://github.com/Kunalkumar225" label="GitHub" delay={0.1} />
                <SocialLink icon={SiLinkedin} link="https://www.linkedin.com/in/kunal-kumar-09b19b256" label="LinkedIn" delay={0.2} />
                <SocialLink icon={SiLeetcode} link="https://leetcode.com/u/kunal_kumar22/" label="LeetCode" delay={0.3} />
                <SocialLink icon={FaFileDownload} link="https://drive.google.com/file/d/1gNBBK2EIAXu_j8fkvhGv_hkOJzHnz389/view" label="Resume" delay={0.4} />
            </div>
        </section>
    );
};

export default Socials;

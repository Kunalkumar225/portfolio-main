import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const easeApple = [0.4, 0, 0.2, 1];

const About = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/kunal_kumar22');
        const data = await response.json();
        if (isMounted && data && typeof data.totalSolved === 'number') {
          setLeetcodeData(data);
        }
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
      }
    };

    fetchLeetcodeData();
    const intervalId = setInterval(fetchLeetcodeData, 5000); // Poll every 5 seconds for rapid updates

    // Also fetch immediately when the user switches back to this tab
    window.addEventListener('focus', fetchLeetcodeData);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
      window.removeEventListener('focus', fetchLeetcodeData);
    };
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-6 lg:px-12 relative z-10">

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      {/* 12-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        {/* Left Side: Bio Container */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: easeApple }}
            className="glass-panel p-8 sm:p-10 rounded-3xl"
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-white leading-tight mb-6 tracking-tight">
              Engineering with <br /> clarity & purpose.
            </h2>
            <div className="w-12 h-1 bg-accent mb-8 rounded-full" />
            <p className="text-text-secondary text-[16px] leading-relaxed mb-6">
              I am a software engineer specializing in Java, Spring Boot, and modern web technologies. I build systems that are robust, highly performant, and deeply focused on user experience.
            </p>
            <p className="text-text-secondary text-[16px] leading-relaxed">
              My approach bridges the gap between complex backend architectures and seamless frontend interfaces, ensuring products scale cleanly and maintain high operational reliability.
            </p>
          </motion.div>
        </div>

        {/* Right Side: 2x2 Floating Metric Grid */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: easeApple, delay: 0.1 }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative"
          >
            {/* Card 1: Experience */}
            <div className="glass-card glass-card-hover rounded-3xl p-8 group relative overflow-hidden">
              {/* Light reflection sweep */}
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
              <h3 className="text-white text-5xl font-bold mb-3 tracking-tight">1<span className="text-accent">+</span></h3>
              <p className="text-white font-semibold mb-1">Years Experience</p>
              <p className="text-text-muted text-[13px] leading-relaxed">Building scalable enterprise backend systems.</p>
            </div>

            {/* Card 2: Projects */}
            <div className="glass-card glass-card-hover rounded-3xl p-8 group relative overflow-hidden mt-0 sm:mt-12">
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
              <h3 className="text-white text-5xl font-bold mb-3 tracking-tight">3<span className="text-accent">+</span></h3>
              <p className="text-white font-semibold mb-1">Major Projects</p>
              <p className="text-text-muted text-[13px] leading-relaxed">From microservices to full-stack applications.</p>
            </div>

            {/* Card 3: Tech domains */}
            <div className="glass-card glass-card-hover rounded-3xl p-8 group relative overflow-hidden sm:-mt-12">
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
              <h3 className="text-white text-5xl font-bold mb-3 tracking-tight">2<span className="text-accent">+</span></h3>
              <p className="text-white font-semibold mb-1">Tech Domains</p>
              <p className="text-text-muted text-[13px] leading-relaxed">Backend, Frontend, DevOps, and Databases.</p>
            </div>

            {/* Card 4: LeetCode Stats */}
            <div className="glass-card glass-card-hover rounded-3xl p-8 group relative overflow-hidden sm:-mt-12 lg:mt-0">
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
              <h3 className="text-white text-5xl font-bold mb-3 tracking-tight">
                {leetcodeData ? leetcodeData.totalSolved : "0"}
                <span className="text-accent">+</span>
              </h3>
              <p className="text-white font-semibold mb-1">LeetCode Solved</p>
              <p className="text-text-muted text-[13px] leading-relaxed">Conquering algorithmic challenges and data structures.</p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");

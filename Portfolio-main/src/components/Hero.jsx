import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-cyan opacity-0 group-hover:opacity-70 animate-pulse translate-x-[2px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-vivid-purple opacity-0 group-hover:opacity-70 animate-pulse -translate-x-[2px]">
        {text}
      </span>
    </div>
  );
};

const DecryptionText = ({ text, delay = 0, className = "" }) => {
  const [display, setDisplay] = useState("");
  const [reveal, setReveal] = useState(false);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    let interval;
    const startDelay = setTimeout(() => {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setReveal(true);
        }

        iteration += 1 / 3;
      }, 30);
    }, delay);

    return () => {
      clearTimeout(startDelay);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span className={`inline-block font-mono ${className} ${reveal ? "text-white" : "text-neon-cyan/80"}`}>
      {display}
    </span>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [leetcodeData, setLeetcodeData] = useState(() => {
    try {
      const saved = localStorage.getItem('leetcode_stats');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });
  const [loading, setLoading] = useState(() => !localStorage.getItem('leetcode_stats'));

  useEffect(() => {
    const fetchValidData = async (url) => {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 5000); // 5s absolute max wait
      try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        if (data && typeof data.totalSolved === 'number') {
          return data;
        }
        throw new Error("Invalid data format or missing totalSolved");
      } catch (error) {
        clearTimeout(id);
        throw error;
      }
    };

    const fetchLeetcodeData = async () => {
      const saveAndSet = (data) => {
        setLeetcodeData(data);
        localStorage.setItem('leetcode_stats', JSON.stringify(data));
      };

      try {
        // RACE ALL 3 APIS SIMULTANEOUSLY
        const fastestData = await Promise.any([
          fetchValidData('https://alfa-leetcode-api.onrender.com/kunal_kumar22/solved'),
          fetchValidData('https://leetcode-api-faisalshohag.vercel.app/kunal_kumar22'),
          fetchValidData('https://leetcode-stats-api.herokuapp.com/kunal_kumar22')
        ]);

        saveAndSet(fastestData);
      } catch (error) {
        console.error('All LeetCode APIs officially failed or timed out:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetcodeData();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePosition({ x, y });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative w-full h-screen mx-auto overflow-hidden bg-primary`}
    >
      {/* Background Grid & Spotlight */}
      <div className="absolute inset-0 bg-grid-animate opacity-20 pointer-events-none" />
      <div
        className="absolute w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-75 ease-out mix-blend-screen"
        style={{
          left: "50%",
          top: "50%",
          transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))`,
        }}
      />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_#915EFF] animate-pulse" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          className="transition-transform duration-100 ease-out flex-1"
        >
          {/* Main Title Area */}
          <div className="relative z-10">
            <h1 className={`${styles.heroHeadText} text-white font-display tracking-tighter cursor-default leading-[1.1]`}>
              Hi, I'm <br className="sm:hidden block" />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-neon-cyan inline-block hover:scale-105 transition-transform duration-300 ml-0 sm:ml-4'>
                <GlitchText text="KUNAL KUMAR" />
              </span>
            </h1>

            {/* Subtitle Area with Decryption */}
            <div className={`${styles.heroSubText} mt-6 text-white-100/90 font-mono font-light h-[80px] flex flex-col justify-start gap-2`}>

              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "2rem" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-[1px] bg-neon-cyan shadow-[0_0_10px_#22D3EE]"
                />
                <span className="text-neon-cyan tracking-widest text-sm uppercase">System.Initialize</span>
              </div>

              <div className="overflow-hidden">
                <span className="text-white font-bold text-2xl sm:text-4xl tracking-tight leading-snug">
                  <DecryptionText text="Building Digital Universes" delay={1000} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60" />
                </span>
              </div>

              {/* LeetCode Badge Overlay */}
              <AnimatePresence>
                {!loading && (
                  <motion.a
                    href="https://leetcode.com/u/kunal_kumar22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="inline-flex items-center gap-3 mt-4 group w-fit relative"
                  >
                    {/* Glowing background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFA116]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                    <div className="relative flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md hover:border-[#FFA116]/50 transition-all duration-300">
                      {/* LeetCode Icon */}
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#FFA116] group-hover:drop-shadow-[0_0_8px_#FFA116] transition-all duration-300">
                        <path d="M16.102 16.225c-1.467 1.258-3.167 1.83-5.013 1.677-1.846-.153-3.411-.976-4.576-2.404-1.164-1.428-1.503-3.159-.988-5.05.515-1.89 1.76-3.328 3.597-4.185 1.838-.856 3.738-.795 5.545.176.705.378 1.41.879 2.057 1.461l1.834-1.517c-.8-.788-1.748-1.46-2.775-1.96-2.31-1.12-4.996-1.1-7.164.05-2.169 1.15-3.666 3.09-4.218 5.46-.552 2.37.042 4.71 1.637 6.47 1.595 1.76 3.69 2.76 5.86 2.82 2.169.05 4.316-.76 5.92-2.22l-1.715-1.468z" fill="currentColor" />
                        <path d="M21.905 13.567l-7.77-1.78.29-1.25 7.77 1.78-.29 1.25z" fill="currentColor" />
                      </svg>

                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/50 tracking-wider uppercase font-mono leading-none mb-1">LeetCode</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-white font-bold text-sm leading-none tabular-nums">
                            {leetcodeData ? leetcodeData.totalSolved : "..."}
                          </span>
                          <span className="text-white/70 text-xs">Solved</span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                )}
              </AnimatePresence>

            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        {/* Holographic Overlay for the 3D Canvas */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBWMGg0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20 mask-image-b-fade" />
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-auto'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] rounded-3xl border-2 border-white/20 flex justify-center items-start p-2 hover:border-neon-cyan/50 transition-colors backdrop-blur-sm bg-black/30 group'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-white group-hover:bg-neon-cyan group-hover:shadow-[0_0_10px_#22D3EE] transition-all mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

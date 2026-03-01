import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiDatabase, FiServer, FiLayers } from "react-icons/fi";
import creator from "../assets/portfolio-image/kunal_kumar.jpeg";

const easeApple = [0.4, 0, 0.2, 1];

const ModernHero = () => {
    // Scroll Parallax for Hero
    const { scrollY } = useScroll();
    const yProfile = useTransform(scrollY, [0, 500], [0, 100]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    const [leetcodeData, setLeetcodeData] = useState(() => {
        try {
            const saved = localStorage.getItem('leetcode_stats');
            return saved ? JSON.parse(saved) : null;
        } catch { return null; }
    });
    const [loadingLeetcode, setLoadingLeetcode] = useState(() => !localStorage.getItem('leetcode_stats'));

    useEffect(() => {
        let isMounted = true;

        const fetchValidData = async (url) => {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), 5000); // 5s absolute max wait per API
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
                if (isMounted) {
                    setLeetcodeData(data);
                    localStorage.setItem('leetcode_stats', JSON.stringify(data));
                }
            };

            try {
                // RACE ALL 3 APIS SIMULTANEOUSLY: The fastest one to return valid data wins!
                // This prevents 10+ second delays when one API times out slowly.
                const fastestData = await Promise.any([
                    fetchValidData('https://alfa-leetcode-api.onrender.com/kunal_kumar22/solved'),
                    fetchValidData('https://leetcode-api-faisalshohag.vercel.app/kunal_kumar22'),
                    fetchValidData('https://leetcode-stats-api.herokuapp.com/kunal_kumar22')
                ]);

                saveAndSet(fastestData);
            } catch (error) {
                console.error('All LeetCode APIs officially failed or timed out:', error);
            } finally {
                if (isMounted) {
                    setLoadingLeetcode(false);
                }
            }
        };

        // Initial fetch
        fetchLeetcodeData();

        // Polling every 5 seconds for rapid updates
        const intervalId = setInterval(fetchLeetcodeData, 5000);

        // Also fetch immediately when the user switches back to this tab
        window.addEventListener('focus', fetchLeetcodeData);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
            window.removeEventListener('focus', fetchLeetcodeData);
        };
    }, []);

    const handleScrollToProjects = (e) => {
        e.preventDefault();
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleScrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section className="relative w-full h-screen min-h-[850px] flex items-center justify-center overflow-hidden bg-primary text-text-primary font-sans pt-20">
            {/* Base Background Depth & Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjAyNCIvPjwvc3ZnPg==')] opacity-[0.03] mix-blend-overlay" />

                {/* Central Subtle Gradient Light Source */}
                <div className="absolute top-[40%] left-[30%] w-[800px] h-[800px] radial-glow-indigo rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60 transition-all duration-1000" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <motion.div style={{ opacity: opacityHero }} className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full">

                    {/* Left: Content (7 Columns) */}
                    <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 relative z-20">

                        {/* Terminal Style Intro Line */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: easeApple }}
                            className="mb-6 flex items-center gap-3"
                        >
                            <span className="text-text-muted font-mono text-xs sm:text-sm tracking-widest uppercase bg-glass-tint border border-glass-border px-4 py-1.5 rounded-full inline-flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                <span className="w-2 h-2 rounded-full bg-accent mr-2 shadow-accent animate-pulse" />
                                Systems // Architecture
                            </span>
                        </motion.div>

                        {/* Massive Bold Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: easeApple, delay: 0.1 }}
                            className="text-[56px] sm:text-[80px] lg:text-[100px] font-bold leading-[0.95] tracking-[-0.04em] mb-4 text-transparent bg-clip-text bg-[linear-gradient(110deg,#F5F7FA,45%,#ffffff,55%,#8B95A5)] bg-[length:200%_100%] animate-glass-shine drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        >
                            Kunal <br className="hidden sm:block" />
                            Kumar.
                        </motion.h1>

                        {/* Liquid Animated Role Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, ease: easeApple, delay: 0.2 }}
                            className="text-[18px] sm:text-[22px] font-medium text-text-secondary mb-8 flex items-center flex-wrap gap-2"
                        >
                            <span className="text-accent bg-accent/10 px-3 py-1 rounded-lg border border-accent/20">Backend Engineer</span>
                            <span className="text-text-muted opacity-50">•</span>
                            <span>Critical Thinker</span>
                            <span className="text-text-muted opacity-50">•</span>
                            <span>System Design</span>
                            <span className="text-text-muted opacity-50">•</span>
                            <span>DSA Solver</span>
                        </motion.div>

                        {/* High-Impact Value Statement */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: easeApple, delay: 0.3 }}
                            className="text-text-secondary text-[16px] sm:text-[18px] leading-relaxed max-w-lg mb-10 opacity-90"
                        >
                            Architecting scalable backend infrastructure and robust AI integrations. Focused on building production-ready systems that demand extreme reliability.
                        </motion.p>

                        {/* Glass CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: easeApple, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:items-center"
                        >
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                                <button onClick={handleScrollToProjects} className="btn-primary w-full sm:w-auto text-[15px] px-8 h-[52px] flex items-center justify-center">
                                    Explore Work
                                </button>
                                <a href="https://drive.google.com/file/d/1gNBBK2EIAXu_j8fkvhGv_hkOJzHnz389/view" target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto text-[15px] px-8 h-[52px] flex items-center justify-center">
                                    View Resume
                                </a>
                            </div>

                            {/* Platform Stat Badges Area */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0 xl:ml-2">
                                {/* LeetCode Live Stat Badge */}
                                <AnimatePresence>
                                    {!loadingLeetcode && (
                                        <motion.a
                                            href="https://leetcode.com/u/kunal_kumar22/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.8 }}
                                            className="relative group w-full sm:w-auto"
                                        >
                                            {/* Glowing background on hover */}
                                            <div className="absolute inset-0 bg-[#FFA116]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="relative h-[52px] flex items-center gap-3 px-5 rounded-full border border-white/10 bg-glass-tint backdrop-blur-md group-hover:border-[#FFA116]/50 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                                {/* LeetCode Icon */}
                                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#FFA116] group-hover:drop-shadow-[0_0_8px_rgba(255,161,22,0.8)] transition-all duration-300 transform group-hover:scale-110">
                                                    <path d="M16.102 16.225c-1.467 1.258-3.167 1.83-5.013 1.677-1.846-.153-3.411-.976-4.576-2.404-1.164-1.428-1.503-3.159-.988-5.05.515-1.89 1.76-3.328 3.597-4.185 1.838-.856 3.738-.795 5.545.176.705.378 1.41.879 2.057 1.461l1.834-1.517c-.8-.788-1.748-1.46-2.775-1.96-2.31-1.12-4.996-1.1-7.164.05-2.169 1.15-3.666 3.09-4.218 5.46-.552 2.37.042 4.71 1.637 6.47 1.595 1.76 3.69 2.76 5.86 2.82 2.169.05 4.316-.76 5.92-2.22l-1.715-1.468z" fill="currentColor" />
                                                    <path d="M21.905 13.567l-7.77-1.78.29-1.25 7.77 1.78-.29 1.25z" fill="currentColor" />
                                                </svg>

                                                <div className="flex flex-col justify-center">
                                                    <span className="text-[10px] text-text-muted tracking-widest uppercase font-mono leading-none mb-1">LeetCode</span>
                                                    <div className="flex items-baseline gap-1.5">
                                                        <span className="text-text-primary font-bold text-sm leading-none tabular-nums">
                                                            {leetcodeData ? leetcodeData.totalSolved : "..."}
                                                        </span>
                                                        <span className="text-text-secondary text-xs">Solved</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.a>
                                    )}
                                </AnimatePresence>

                                {/* GitHub Profile Badge */}
                                <motion.a
                                    href="https://github.com/Kunalkumar225"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                    className="relative group w-full sm:w-auto"
                                >
                                    {/* Glowing background on hover */}
                                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative h-[52px] flex items-center gap-3 px-5 rounded-full border border-white/10 bg-glass-tint backdrop-blur-md group-hover:border-white/50 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                        {/* GitHub Icon */}
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 transform group-hover:scale-110">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>

                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] text-text-muted tracking-widest uppercase font-mono leading-none mb-1">GitHub</span>
                                            <span className="text-text-primary text-sm leading-none tabular-nums font-medium">@Kunalkumar225</span>
                                        </div>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Compact Availability Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: easeApple, delay: 0.5 }}
                            className="flex items-center gap-4 mt-12 text-[13px] font-medium text-text-muted"
                        >
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                Available for impact
                            </div>
                            <div className="w-[1px] h-3 bg-glass-border" />
                            <div>Based in India</div>
                        </motion.div>

                    </div>

                    {/* Right: Visual Identity (5 Columns) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2">
                        <motion.div
                            style={{ y: yProfile }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: easeApple, delay: 0.2 }}
                            className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center group perspective-1000"
                        >
                            {/* Large blurred gradient orb behind profile */}
                            <div className="absolute inset-0 bg-accent/30 blur-[100px] rounded-full group-hover:bg-accent/40 transition-colors duration-normal ease-apple" />

                            {/* Floating Liquid Glass Profile Panel */}
                            <div className="relative w-full h-full rounded-3xl border border-glass-border bg-glass-tint backdrop-blur-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] p-8 transition-all duration-normal ease-apple hover:-translate-y-2 group-hover:border-glass-light flex flex-col justify-between">

                                {/* Inner Grid Pattern */}
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                                {/* Soft light reflection suite */}
                                <div className="absolute -top-[150px] -left-[150px] w-[300px] h-[300px] bg-white/5 blur-[50px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:translate-x-1/2 group-hover:translate-y-1/2" />

                                {/* Profile Image framing */}
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-glass-border shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] bg-surface/50 mb-6">
                                    <img
                                        src={creator}
                                        alt="Kunal Kumar"
                                        className="w-full h-full object-cover object-top mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 ease-apple scale-105 group-hover:scale-100 group-hover:rotate-1"
                                        onError={(e) => { e.target.style.opacity = 0; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
                                </div>

                                {/* Floating internal data nodes */}
                                <div className="flex flex-col gap-3 relative z-10 w-full">
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                        <div className="flex items-center gap-3">
                                            <FiServer className="text-accent" size={18} />
                                            <span className="text-white text-[13px] font-medium tracking-wide">System Auth</span>
                                        </div>
                                        <span className="text-green-400 text-[12px] font-mono">Verified</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                        <div className="flex items-center gap-3">
                                            <FiDatabase className="text-text-muted" size={18} />
                                            <span className="text-text-secondary text-[13px] font-medium tracking-wide">Data Node</span>
                                        </div>
                                        <span className="text-accent text-[12px] font-mono animate-pulse">Syncing...</span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default ModernHero;

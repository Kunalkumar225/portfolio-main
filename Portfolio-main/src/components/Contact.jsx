import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";

const easeApple = [0.4, 0, 0.2, 1];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simple mailto trigger as placeholder for real API
    window.location.href = `mailto:kunalkumar51965@gmail.com?subject=Contact from Portfolio: ${form.name}&body=${form.message} \n\nFrom: ${form.email}`;
    setLoading(false);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative w-full py-24 px-6 lg:px-12 overflow-hidden z-10" id="contact">
      {/* Large blurred gradient orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 pointer-events-none rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: easeApple }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <span className="text-text-muted font-mono text-xs sm:text-sm tracking-widest uppercase bg-glass-tint border border-glass-border px-4 py-1.5 rounded-full inline-flex flex-grow-0 self-start shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
            Connect With Me
          </span>
          <h2 className="text-[40px] lg:text-[56px] font-bold text-white tracking-tight leading-[1.05] mb-6">
            Let's build something <br />
            <span className="text-accent">exceptional.</span>
          </h2>
          <p className="text-text-secondary text-[16px] leading-relaxed mb-12 max-w-md">
            I'm always open to discussing product design work, architecture scaling, or innovative AI system collaborations.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5 text-text-muted hover:text-white transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:border-glass-light transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <span className="text-xl">✉️</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase font-bold tracking-widest mb-1 text-text-muted">Email</span>
                <a href="mailto:kunalkumar51965@gmail.com" className="text-[15px] font-medium tracking-wide">kunalkumar51965@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-5 text-text-muted hover:text-white transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:border-glass-light transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <span className="text-xl">📍</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase font-bold tracking-widest mb-1 text-text-muted">Location</span>
                <span className="text-[15px] font-medium tracking-wide">Noida, India</span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-text-muted hover:text-white transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:border-glass-light transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="w-6 h-6 filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" alt="LinkedIn" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase font-bold tracking-widest mb-1 text-text-muted">LinkedIn</span>
                <a href="https://www.linkedin.com/in/kunal-kumar-09b19b256/" target="_blank" rel="noreferrer" className="text-[15px] font-medium tracking-wide">/in/kunal-kumar</a>
              </div>
            </div>

            <div className="flex items-center gap-5 text-text-muted hover:text-white transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:border-glass-light transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-6 h-6 filter invert opacity-60 group-hover:opacity-100 transition-opacity duration-300" alt="GitHub" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase font-bold tracking-widest mb-1 text-text-muted">GitHub</span>
                <a href="https://github.com/Kunalkumar225" target="_blank" rel="noreferrer" className="text-[15px] font-medium tracking-wide">github.com/Kunalkumar225</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glass Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: easeApple, delay: 0.2 }}
          className="lg:col-span-7 w-full"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-panel rounded-[32px] p-8 sm:p-12 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)] flex flex-col gap-6 relative overflow-hidden"
          >
            {/* Grid background logic inner form */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <label className="flex flex-col gap-2">
                <span className="text-white/80 text-[13px] font-semibold tracking-wide">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Apple"
                  className="bg-white/5 border border-glass-border text-white placeholder:text-text-muted/50 text-[15px] rounded-2xl px-5 h-[56px] outline-none focus:border-glass-light focus:bg-white/10 focus:shadow-glass-glow transition-all duration-300 w-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-white/80 text-[13px] font-semibold tracking-wide">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@apple.com"
                  className="bg-white/5 border border-glass-border text-white placeholder:text-text-muted/50 text-[15px] rounded-2xl px-5 h-[56px] outline-none focus:border-glass-light focus:bg-white/10 focus:shadow-glass-glow transition-all duration-300 w-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 relative z-10">
              <span className="text-white/80 text-[13px] font-semibold tracking-wide">Message</span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="bg-white/5 border border-glass-border text-white placeholder:text-text-muted/50 text-[15px] rounded-2xl px-5 py-5 outline-none focus:border-glass-light focus:bg-white/10 focus:shadow-glass-glow transition-all duration-300 resize-none w-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full h-[56px] text-[16px] mt-4 relative z-10"
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "");

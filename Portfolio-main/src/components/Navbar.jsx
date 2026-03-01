import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center fixed top-0 z-50 px-4 sm:px-6 transition-all duration-normal pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-normal ease-apple rounded-full border shadow-[0_8px_32px_rgba(0,0,0,0.2)] ${scrolled
          ? "w-full max-w-3xl h-[60px] bg-glass-tint backdrop-blur-2xl border-white/10 px-6"
          : "w-full max-w-5xl h-[72px] bg-[rgba(255,255,255,0.01)] backdrop-blur-md border-transparent px-8"
          }`}
      >
        <div className="w-full flex justify-between items-center">
          {/* LOGO */}
          <Link
            to='/'
            className='flex items-center gap-3 group'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className={`flex items-center justify-center transition-all ${scrolled ? '' : 'w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20'}`}>
              <span className="text-text-primary text-[18px] font-bold tracking-tight group-hover:text-accent transition-colors">KK</span>
            </div>
            <p className={`text-[15px] font-semibold cursor-pointer hidden sm:flex items-center tracking-tight transition-colors ${scrolled ? 'text-text-primary' : 'text-text-primary'}`}>
              KUNAL <span className='font-normal text-text-secondary ml-1'>KUMAR</span>
            </p>
          </Link>

          {/* DESKTOP NAV */}
          <ul className='list-none hidden md:flex flex-row items-center space-x-1' onMouseLeave={() => setHovered(null)}>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className='relative cursor-pointer text-[14px] font-medium'
                onMouseEnter={() => setHovered(nav.id)}
                onClick={() => setActive(nav.title)}
              >
                <a
                  href={`#${nav.id}`}
                  className={`relative z-10 px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-normal ease-apple ${active === nav.title ? "text-white font-semibold" : "text-text-secondary hover:text-text-primary"
                    } block`}
                >
                  {nav.title}
                </a>
                {/* Animated Pill for active/hover state */}
                {(active === nav.title || hovered === nav.id) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent/10 backdrop-blur-md rounded-full border border-accent/20 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            ))}
            {/* CTA Button */}
            <li>
              <a href="#contact" className="ml-4 px-5 py-2 flex items-center justify-center text-[13px] font-semibold text-white bg-accent/90 backdrop-blur-md rounded-full border border-white/20 shadow-[0_0_15px_rgba(91,92,255,0.3)] hover:bg-accent hover:shadow-accent transition-all duration-normal ease-apple hover:-translate-y-[1px]">
                Contact
              </a>
            </li>
          </ul>

          {/* MOBILE NAV TOGGLE */}
          <div className='md:hidden flex justify-end items-center'>
            <div className="p-2 -mr-2 cursor-pointer flex items-center justify-center"
              onClick={() => setToggle(!toggle)}>
              <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-6 h-6 object-contain filter invert opacity-90'
              />
            </div>

            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute top-[70px] right-0 mx-4 my-2 min-w-[240px] z-10 rounded-2xl bg-[rgba(20,20,30,0.8)] backdrop-blur-3xl border border-glass-border shadow-2xl p-4"
                >
                  <ul className='list-none flex flex-col gap-1'>
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        className={`font-medium cursor-pointer text-[15px] p-3 rounded-xl transition-all duration-fast ${active === nav.title ? "bg-white/10 text-white" : "text-text-secondary hover:text-white hover:bg-white/5"
                          }`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <a href={`#${nav.id}`} className="block w-full">{nav.title}</a>
                      </li>
                    ))}
                    <li className="pt-3 mt-2 border-t border-glass-border">
                      <a href="#contact" onClick={() => setToggle(false)} className="w-full py-3 flex items-center justify-center text-[14px] font-semibold text-white bg-accent/90 backdrop-blur-md rounded-xl shadow-accent hover:bg-accent transition-all duration-normal">
                        Contact
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


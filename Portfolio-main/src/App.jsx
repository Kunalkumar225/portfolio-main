import { BrowserRouter } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import { Navbar, Socials, Footer, SplashScreen, CanvasLoader } from "./components";
import ModernHero from "./components/ModernHero";

// Lazy Load Heavy Components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const TechStack = lazy(() => import("./components/TechStack"));
const Works = lazy(() => import("./components/Works"));
const Certifications = lazy(() => import("./components/Certifications"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

import ErrorBoundary from "./components/ErrorBoundary.tsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSafeMode, setIsSafeMode] = useState(false);
  const [showForceLoad, setShowForceLoad] = useState(false);

  useEffect(() => {
    console.log("App mounted, starting loading sequence...");
    const timeout = setTimeout(() => {
      setShowForceLoad(true);
    }, 8000); // Show force load after 8s
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Reduced from 1.8 for a snappier, less "floaty" feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle Anchor Links for Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#') && target.origin === window.location.origin) {
        e.preventDefault();
        lenis.scrollTo(target.hash);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading ? (
          <div className="relative h-screen w-full">
            <SplashScreen key="splash" onComplete={() => {
              console.log("DEBUG: Splash screen completed. Mounting main app...");
              setLoading(false);
            }} />
            {showForceLoad && (
              <button
                onClick={() => {
                  console.log("FORCE LOAD triggered");
                  setIsSafeMode(true);
                  setLoading(false);
                }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] px-6 py-2.5 bg-surface/80 backdrop-blur-md border border-hairline text-text-primary rounded-full text-[13px] font-medium hover:border-accent-border hover:shadow-card transition-all"
              >
                Skip Loading
              </button>
            )}
          </div>
        ) : (
          <ErrorBoundary>
            <div className='relative z-0 bg-primary'>
              <Navbar />
              <div className='bg-primary relative z-10'>
                <ErrorBoundary fallback={<div className="h-screen flex items-center justify-center text-neon-blue">Welcome to my Portfolio</div>}>
                  {isSafeMode ? (
                    <div className="h-[70vh] w-full flex flex-col items-center justify-center bg-primary">
                      <h1 className="text-text-primary text-4xl font-bold tracking-tight">Kunal Kumar</h1>
                      <p className="text-text-secondary mt-4">Safe Mode Enabled</p>
                    </div>
                  ) : <ModernHero />}
                </ErrorBoundary>
              </div>
              <Socials />

              <div className="relative z-10 w-full">
                <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Loading...</div>}>
                  <div className="bg-surface w-full"><About /></div>
                  <div className="bg-elevated w-full"><Experience /></div>
                  <div className="bg-primary w-full"><TechStack /></div>
                  <div className="bg-elevated w-full"><Works /></div>
                  <div className="bg-surface w-full"><Certifications /></div>
                  <div className="bg-surface w-full"><Feedbacks /></div>
                  <div className='relative z-0 bg-primary w-full'>
                    <Contact />
                  </div>
                </Suspense>
              </div>

              <Footer />
            </div>
          </ErrorBoundary>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;

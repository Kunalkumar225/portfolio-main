import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CharacterControls: React.FC = () => {
    useEffect(() => {
        // Logic for triggering character gestures based on scroll
        const sections = ['hero', 'about', 'experience', 'tech', 'projects', 'contact'];

        sections.forEach((section) => {
            ScrollTrigger.create({
                trigger: `#${section}`,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    // Signal state change to the character
                    window.dispatchEvent(new CustomEvent('sectionChange', { detail: section }));
                },
                onEnterBack: () => {
                    window.dispatchEvent(new CustomEvent('sectionChange', { detail: section }));
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return null; // Side-effect only component
};

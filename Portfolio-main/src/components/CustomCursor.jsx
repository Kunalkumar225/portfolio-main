import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className='cursor-dot fixed top-0 left-0 w-4 h-4 rounded-full bg-neon-blue pointer-events-none z-[9999] mix-blend-difference'
            animate={{
                x: mousePosition.x - 8,
                y: mousePosition.y - 8,
            }}
            transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.1,
            }}
        />
    );
};

export default CustomCursor;

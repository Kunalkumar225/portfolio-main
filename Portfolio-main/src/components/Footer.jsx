import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-primary py-8 border-t border-glass-border relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Logo/Brand */}
                <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-glass-tint border border-glass-border flex items-center justify-center group-hover:border-glass-light transition-colors duration-normal">
                        <span className="font-bold text-text-primary text-[12px] group-hover:text-accent transition-colors">KK</span>
                    </div>
                    <p className="text-text-primary text-[15px] font-semibold tracking-tight">
                        Kunal Kumar
                    </p>
                </div>

                {/* Copyright */}
                <div className="text-text-secondary text-[14px] font-medium">
                    &copy; {new Date().getFullYear()} All rights reserved. Let's build.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

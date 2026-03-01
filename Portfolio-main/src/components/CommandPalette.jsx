import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";

const CommandPalette = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command) => {
        setOpen(false);
        command();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)}>
            <div
                className="w-full max-w-2xl bg-tertiary border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <Command className="w-full">
                    <div className="flex items-center border-b border-white/10 px-4">
                        <Command.Input
                            placeholder="Type a command or search..."
                            className="w-full bg-transparent p-4 text-white placeholder-white/40 outline-none font-mono text-sm"
                        />
                    </div>

                    <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-py-2">
                        <Command.Empty className="p-4 text-center text-white/40 font-mono text-sm">No results found.</Command.Empty>

                        <Command.Group heading="Navigation" className="text-white/40 text-xs font-mono uppercase tracking-widest px-2 py-1 mb-2">
                            <CommandItem onSelect={() => runCommand(() => window.location.href = "#about")}>Go to About</CommandItem>
                            <CommandItem onSelect={() => runCommand(() => window.location.href = "#works")}>Go to Projects</CommandItem>
                            <CommandItem onSelect={() => runCommand(() => window.location.href = "#contact")}>Go to Contact</CommandItem>
                        </Command.Group>

                        <Command.Group heading="Socials" className="text-white/40 text-xs font-mono uppercase tracking-widest px-2 py-1 mb-2 mt-4">
                            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com", "_blank"))}>GitHub</CommandItem>
                            <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com", "_blank"))}>LinkedIn</CommandItem>
                        </Command.Group>

                        <Command.Group heading="Actions" className="text-white/40 text-xs font-mono uppercase tracking-widest px-2 py-1 mb-2 mt-4">
                            <CommandItem onSelect={() => runCommand(() => window.open("https://drive.google.com/file/d/1gNBBK2EIAXu_j8fkvhGv_hkOJzHnz389/view", "_blank"))}>View Resume</CommandItem>
                            <CommandItem onSelect={() => runCommand(() => window.location.href = "mailto:kunal@example.com")}>Send Email</CommandItem>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    );
};

const CommandItem = ({ children, onSelect }) => {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center gap-2 px-4 py-3 text-white/80 text-sm rounded-lg cursor-pointer hover:bg-white/10 hover:text-white transition-colors aria-selected:bg-white/10 aria-selected:text-white"
        >
            {children}
        </Command.Item>
    );
};

export default CommandPalette;

import React, { useState, useEffect } from 'react';
import { Monitor, Zap, ZapOff } from 'lucide-react';

interface PerformanceToggleProps {
    onToggle: (enabled: boolean) => void;
}

export const PerformanceToggle: React.FC<PerformanceToggleProps> = ({ onToggle }) => {
    const [enabled, setEnabled] = useState(true);

    const handleToggle = () => {
        const newState = !enabled;
        setEnabled(newState);
        onToggle(newState);
    };

    return (
        <button
            onClick={handleToggle}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-lg"
            title={enabled ? "Disable 3D Assistant" : "Enable 3D Assistant"}
        >
            {enabled ? (
                <Zap className="w-6 h-6 text-neon-blue animate-pulse" />
            ) : (
                <ZapOff className="w-6 h-6 text-secondary" />
            )}

            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 px-3 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                {enabled ? "Disable 3D Assistant" : "Enable 3D Assistant"}
            </span>
        </button>
    );
};

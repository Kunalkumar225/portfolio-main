import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Stars, Sparkles, PerspectiveCamera } from '@react-three/drei';
import { AssistantCharacter } from './AssistantCharacter';
import { CharacterControls } from './CharacterControls';

export const Scene: React.FC = () => {
    const [webGLAvailable, setWebGLAvailable] = useState(true);

    useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const isAvailable = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
            setWebGLAvailable(isAvailable);
            console.log("WebGL Availability:", isAvailable);
        } catch (e) {
            setWebGLAvailable(false);
        }
    }, []);

    if (!webGLAvailable) {
        return (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#030014] z-0">
                <div className="text-neon-blue font-mono text-sm tracking-widest animate-pulse items-center flex flex-col">
                    <span className="mb-2">:: RENDER_SYSTEM.FALLBACK ::</span>
                    <div className="w-48 h-[1px] bg-neon-blue/20" />
                </div>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

                {/* Direct Lighting Fallback */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} intensity={1} />

                <Suspense fallback={null}>
                    <AssistantCharacter position={[2.5, -1, 0]} />
                    <Environment preset="city" />
                </Suspense>

                <ContactShadows
                    position={[0, -2, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2.5}
                    far={4}
                    color="#000000"
                />
            </Canvas>
        </div>
    );
};

export default Scene;

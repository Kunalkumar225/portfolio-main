import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot } from "@react-three/drei";

const Geometries = () => {
    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Gentle overall rotation
        groupRef.current.rotation.y = t * 0.05;
    });

    return (
        <group ref={groupRef}>
            {/* Floating Icosahedron - Cyan Neon */}
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                <mesh position={[-3, 1, -2]} scale={0.6}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#00F0FF"
                        wireframe
                        emissive="#00F0FF"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            </Float>

            {/* Floating TorusKnot - Purple Neon */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[3, -1, -3]} scale={0.5}>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <meshStandardMaterial
                        color="#915EFF"
                        wireframe
                        emissive="#915EFF"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            </Float>

            {/* Floating Pyramid - Magenta Neon */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[0, 3, -5]} scale={0.5}>
                    <coneGeometry args={[1, 2, 4]} />
                    <meshStandardMaterial
                        color="#FF00AA"
                        wireframe
                        emissive="#FF00AA"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            </Float>
        </group>
    );
};

const FloatingShapesCanvas = () => {
    return (
        <div className='w-full h-full absolute inset-0 z-[-1] pointer-events-none overflow-hidden'>
            <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
                <Geometries />
            </Canvas>
        </div>
    );
};

export default FloatingShapesCanvas;

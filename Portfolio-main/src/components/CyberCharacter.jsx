import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const CyberCharacter = () => {
    const headRef = useRef();
    const bodyRef = useRef();
    const leftEyeRef = useRef();
    const rightEyeRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Procedural breathing and subtle rotation
        if (headRef.current) {
            headRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
            headRef.current.position.y = Math.sin(t * 1.5) * 0.1;
        }

        // Eyes blinking/pulsing
        const eyeScale = 1 + Math.sin(t * 10) * 0.1;
        if (leftEyeRef.current) leftEyeRef.current.scale.set(eyeScale, eyeScale, eyeScale);
        if (rightEyeRef.current) rightEyeRef.current.scale.set(eyeScale, eyeScale, eyeScale);
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Head */}
                <mesh ref={headRef} position={[0, 1.2, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <MeshDistortMaterial
                        color="#00f0ff"
                        distort={0.3}
                        speed={2}
                        roughness={0}
                        metalness={1}
                        wireframe
                    />
                </mesh>

                {/* Eyes */}
                <mesh ref={leftEyeRef} position={[-0.25, 1.3, 0.5]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshBasicMaterial color="#7000ff" />
                </mesh>
                <mesh ref={rightEyeRef} position={[0.25, 1.3, 0.5]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshBasicMaterial color="#7000ff" />
                </mesh>

                {/* Core / Body */}
                <mesh ref={bodyRef} position={[0, 0, 0]}>
                    <octahedronGeometry args={[0.8, 0]} />
                    <MeshWobbleMaterial
                        color="#7000ff"
                        factor={0.4}
                        speed={2}
                        roughness={0.1}
                    />
                </mesh>

                {/* Outer Tech Shell */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial
                        color="#00f0ff"
                        wireframe
                        transparent
                        opacity={0.05}
                    />
                </mesh>

                {/* Additional Floating Accents */}
                {[...Array(3)].map((_, i) => (
                    <mesh
                        key={i}
                        position={[
                            Math.sin(i * 2) * 2,
                            Math.cos(i * 2) * 2,
                            0
                        ]}
                    >
                        <tetrahedronGeometry args={[0.2, 0]} />
                        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
                    </mesh>
                ))}
            </Float>
        </group>
    );
};

export default CyberCharacter;

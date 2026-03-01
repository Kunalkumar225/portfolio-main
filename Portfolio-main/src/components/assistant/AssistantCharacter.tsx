import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

interface AssistantCharacterProps {
    position?: [number, number, number];
}

export const AssistantCharacter: React.FC<AssistantCharacterProps> = ({ position = [0, 0, 0] }) => {
    const groupRef = useRef<THREE.Group>(null);
    const headRef = useRef<THREE.Mesh>(null);
    const bodyRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    // Procedural Animation Logic
    useFrame((state) => {
        const { clock, mouse } = state;
        if (!clock || !mouse) return;

        const time = clock.getElapsedTime();

        if (groupRef.current) {
            // Hover effect
            groupRef.current.position.y = position[1] + Math.sin(time * 1.5) * 0.15;

            // Mouse tracking (Subtle look-at)
            const targetRotationY = (mouse.x * Math.PI) / 10;
            const targetRotationX = (mouse.y * -Math.PI) / 20;

            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.1);
        }

        if (headRef.current) {
            headRef.current.rotation.z = Math.sin(time * 2) * 0.05;
        }
    });

    return (
        <group ref={groupRef} position={position} scale={0.7}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} {...({} as any)}>
                {/* Advanced Procedural Humanoid Form */}

                {/* Body - Liquid Metal Core */}
                <mesh ref={bodyRef}>
                    <capsuleGeometry args={[0.6, 1.2, 32, 64]} />
                    <MeshDistortMaterial
                        color="#7000ff"
                        speed={2}
                        distort={0.2}
                        roughness={0}
                        metalness={1}
                        emissive="#7000ff"
                        emissiveIntensity={0.2}
                    />
                </mesh>

                {/* Head - Glass Helmet */}
                <mesh ref={headRef} position={[0, 1.4, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshPhysicalMaterial
                        color="#00f0ff"
                        transparent
                        opacity={0.3}
                        transmission={0.9}
                        roughness={0}
                        thickness={0.5}
                        envMapIntensity={2}
                    />
                </mesh>

                {/* Inner Face / Eyes */}
                <group position={[0, 1.4, 0.35]}>
                    <mesh position={[-0.15, 0, 0]}>
                        <planeGeometry args={[0.12, 0.03]} />
                        <meshBasicMaterial color="#00f0ff" />
                    </mesh>
                    <mesh position={[0.15, 0, 0]}>
                        <planeGeometry args={[0.12, 0.03]} />
                        <meshBasicMaterial color="#00f0ff" />
                    </mesh>
                </group>

                {/* Energy Rings */}
                {[0.6, 1.0, 1.4].map((y, i) => (
                    <mesh key={i} position={[0, y - 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.8 + i * 0.1, 0.01, 16, 100]} />
                        <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} />
                    </mesh>
                ))}

                {/* Floating UI Tooltip Placeholder */}
                {hovered && (
                    <group position={[0, 2.5, 0]}>
                        <Text
                            fontSize={0.2}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                        >
                            "Welcome! I am your AI Assistant."
                        </Text>
                    </group>
                )}
            </Float>
        </group>
    );
};

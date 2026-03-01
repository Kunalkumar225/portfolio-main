import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const ProfilePhoto3D = ({ imageUrl }) => {
    const meshRef = useRef();
    const groupRef = useRef();
    const scanRef = useRef();

    // Use a placeholder if the provided image is missing or invalid
    const placeholderImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2a?w=400&h=500&fit=crop";
    const texture = useLoader(THREE.TextureLoader, imageUrl || placeholderImage);

    useFrame((state) => {
        const { mouse, clock } = state;
        const time = clock.elapsedTime;

        if (groupRef.current) {
            // Smooth Parallax based on mouse
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (mouse.x * Math.PI) / 8, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (mouse.y * -Math.PI) / 8, 0.1);
        }

        if (meshRef.current) {
            // Subtle breathing and oscillation
            meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
        }

        if (scanRef.current) {
            // Faster, rhythmic scanning
            scanRef.current.position.y = (Math.sin(time * 3) * 2);
            scanRef.current.material.opacity = 0.5 + Math.sin(time * 10) * 0.5;
        }
    });

    return (
        <group ref={groupRef} position={[2.5, 0, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <group ref={meshRef} scale={0.85}>
                    {/* Inner Digital Debris (Particles) */}
                    <Sparkles
                        count={40}
                        scale={[3.5, 4.5, 1]}
                        size={2}
                        speed={0.5}
                        color="#00f0ff"
                        opacity={0.3}
                    />

                    {/* Holographic Frame */}
                    <mesh position={[0, 0, -0.1]}>
                        <planeGeometry args={[3.2, 4.2]} />
                        <meshStandardMaterial
                            color="#00f0ff"
                            transparent
                            opacity={0.15}
                            wireframe
                            emissive="#00f0ff"
                            emissiveIntensity={0.5}
                        />
                    </mesh>

                    {/* Photo Plane with Glitch Jitter */}
                    <mesh>
                        <planeGeometry args={[3, 4]} />
                        <meshStandardMaterial
                            map={texture}
                            transparent
                            opacity={0.9}
                            side={THREE.DoubleSide}
                            emissive="#00f0ff"
                            emissiveIntensity={0.1}
                        />
                    </mesh>

                    {/* Scanning Line (High Energy) */}
                    <mesh ref={scanRef} position={[0, 0, 0.06]}>
                        <planeGeometry args={[3.3, 0.08]} />
                        <meshBasicMaterial
                            color="#00f0ff"
                            transparent
                            opacity={0.8}
                        />
                    </mesh>

                    {/* Decorative HUD Elements (Corners) */}
                    {[
                        [-1.65, 2.15, 0.1],
                        [1.65, 2.15, 0.1],
                        [-1.65, -2.15, 0.1],
                        [1.65, -2.15, 0.1],
                    ].map((pos, i) => (
                        <mesh key={i} position={pos}>
                            <boxGeometry args={[0.4, 0.1, 0.05]} />
                            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
                        </mesh>
                    ))}
                    {[
                        [-1.65, 2.15, 0.1],
                        [1.65, 2.15, 0.1],
                        [-1.65, -2.15, 0.1],
                        [1.65, -2.15, 0.1],
                    ].map((pos, i) => (
                        <mesh key={`v-${i}`} position={pos}>
                            <boxGeometry args={[0.1, 0.4, 0.05]} />
                            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
                        </mesh>
                    ))}
                </group>
            </Float>
        </group>
    );
};

export default ProfilePhoto3D;

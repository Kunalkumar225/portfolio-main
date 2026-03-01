import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Stars } from "@react-three/drei";
import ErrorBoundary from "../ErrorBoundary.tsx";

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ErrorBoundary fallback={null}>
            <Stars radius={1.2} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </ErrorBoundary>
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

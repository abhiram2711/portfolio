import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Subtle Wireframe Engineering Object (Robotic / Quadcopter Arm Hub)
function RotatingEngineeringPart() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Hub Cylinder */}
      <mesh>
        <cylinderGeometry args={[1.2, 1.2, 0.4, 24]} />
        <meshStandardMaterial
          wireframe
          color="#2F80FF"
          emissive="#0A1628"
          roughness={0.4}
        />
      </mesh>

      {/* Internal Bearing Ring */}
      <mesh>
        <torusGeometry args={[0.7, 0.08, 12, 32]} />
        <meshStandardMaterial
          wireframe
          color="#22D3EE"
          roughness={0.2}
        />
      </mesh>

      {/* 4 Radial Arms / Truss Beams */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
        <group key={i} rotation={[0, angle, 0]}>
          <mesh position={[1.8, 0, 0]}>
            <boxGeometry args={[1.4, 0.12, 0.25]} />
            <meshStandardMaterial
              wireframe
              color="#2F80FF"
              roughness={0.5}
            />
          </mesh>
          {/* Motor Mount Ring */}
          <mesh position={[2.6, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
            <meshStandardMaterial
              wireframe
              color="#22D3EE"
              roughness={0.3}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export const HeroCanvas = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Basic WebGL check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  // Fallback if reduced motion or no WebGL
  if (prefersReducedMotion || !hasWebGL) {
    return (
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-45 overflow-hidden">
      <Canvas
        camera={{ position: [0, 2.5, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#22D3EE" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#2F80FF" />
        <RotatingEngineeringPart />
      </Canvas>
    </div>
  );
};
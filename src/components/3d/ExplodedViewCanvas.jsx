import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function ExplodedAssembly({ isHovered }) {
  const groupRef = useRef();
  const part1Ref = useRef();
  const part2Ref = useRef();
  const part3Ref = useRef();

  useFrame((state, delta) => {
    // Gentle rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }

    // Explode / Separate parts along Z axis when hovered
    const targetOffset = isHovered ? 0.9 : 0;
    
    if (part1Ref.current) {
      part1Ref.current.position.y += (targetOffset - part1Ref.current.position.y) * 0.1;
    }
    if (part3Ref.current) {
      part3Ref.current.position.y += (-targetOffset - part3Ref.current.position.y) * 0.1;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.4, 0, 0]}>
      {/* Top Cap Flange */}
      <mesh ref={part1Ref} position={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.2, 24]} />
        <meshStandardMaterial color="#22D3EE" wireframe roughness={0.3} />
      </mesh>

      {/* Center Body Hub */}
      <mesh ref={part2Ref} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.6, 24]} />
        <meshStandardMaterial color="#2F80FF" wireframe roughness={0.4} />
      </mesh>

      {/* Bottom Mounting Base */}
      <mesh ref={part3Ref} position={[0, 0, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.2, 24]} />
        <meshStandardMaterial color="#22D3EE" wireframe roughness={0.3} />
      </mesh>
    </group>
  );
}

export const ExplodedViewCanvas = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-64 bg-navy-950/80 border border-white/10 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center cursor-pointer group"
    >
      <div className="absolute top-3 left-4 z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-accent animate-ping" />
        <span className="text-xs font-mono text-cyan-accent uppercase tracking-wider">
          Interactive 3D CAD Exploded View
        </span>
      </div>
      <div className="absolute bottom-3 text-center text-xs font-mono text-text-muted z-10 opacity-70 group-hover:opacity-100 transition-opacity">
        {isHovered ? "Release to collapse assembly" : "Hover to explode assembly components"}
      </div>

      <Canvas camera={{ position: [0, 2, 4], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#22D3EE" />
        <ExplodedAssembly isHovered={isHovered} />
      </Canvas>
    </div>
  );
};
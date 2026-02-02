
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing intrinsic types in some environments
const Group = 'group' as any;
const ThreePoints = 'points' as any;
const BufferGeometry = 'bufferGeometry' as any;
const BufferAttribute = 'bufferAttribute' as any;
const PointsMaterial = 'pointsMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

const AnimatedFlow = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4) * 0.2;
    meshRef.current.rotation.y = Math.sin(time / 2) * 0.2;
  });

  return (
    <Group>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.4}>
          <MeshDistortMaterial
            color="#d4af37"
            speed={3}
            distort={0.3}
            radius={1}
            roughness={0.2}
            metalness={0.9}
          />
        </Sphere>
      </Float>
      
      {/* Floating particles to represent "hair luster" or shine */}
      <Points count={120} />
    </Group>
  );
};

const Points = ({ count }: { count: number }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <ThreePoints ref={ref}>
      <BufferGeometry>
        <BufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </BufferGeometry>
      <PointsMaterial size={0.03} color="#ffffff" transparent opacity={0.4} />
    </ThreePoints>
  );
};

const ThreeDBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      {/* dpr={[1, 2]} optimizes for performance on high-res screens */}
      <Canvas dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <AmbientLight intensity={0.4} />
        <PointLight position={[10, 10, 10]} intensity={0.8} color="#d4af37" />
        <PointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />
        <AnimatedFlow />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;

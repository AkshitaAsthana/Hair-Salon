
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
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
  });

  return (
    <Group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
          <MeshDistortMaterial
            color="#d4af37"
            speed={4}
            distort={0.4}
            radius={1}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      {/* Floating particles to represent "hair luster" or shine */}
      <Points count={200} />
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
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
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
      <PointsMaterial size={0.03} color="#ffffff" transparent opacity={0.6} />
    </ThreePoints>
  );
};

const ThreeDBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
        <PointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <AnimatedFlow />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;

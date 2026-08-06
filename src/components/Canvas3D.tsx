'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Float } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';

function Model({ url }: { url: string }) {
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={1.5} />;
  } catch (e) {
    return <FallbackModel />;
  }
}

function FallbackModel() {
  return (
    <group>
      {/* Depo (Tank) */}
      <mesh position={[0, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 2.2, 32]} />
        <meshStandardMaterial color="#E5E7EB" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Paneller (Kolektör) */}
      <mesh position={[0, -0.4, 0.2]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[2, 1.6, 0.1]} />
        <meshStandardMaterial color="#1E3A8A" metalness={0.6} roughness={0.2} />
      </mesh>
      {/* Isı Yansıma Efekti */}
      <mesh position={[0, -0.4, 0.26]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[1.9, 1.5, 0.01]} />
        <meshStandardMaterial color="#3B82F6" emissive="#1D4ED8" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function Canvas3D() {
  const [hasGlb, setHasGlb] = useState(false);

  useEffect(() => {
    fetch('/models/gunisi.glb', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) setHasGlb(true);
      })
      .catch(() => setHasGlb(false));
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[550px] relative cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <Stage environment="city" intensity={0.5}>
              {hasGlb ? <Model url="/models/gunisi.glb" /> : <FallbackModel />}
            </Stage>
          </Float>
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-1.5 rounded-full text-xs text-gray-400 pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-solar-500 animate-ping"></span>
        3D Modeli Döndürmek İçin Sürükleyin
      </div>
    </div>
  );
}

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';

// Kodla Çizilen Ultra Detaylı Profesyonel Günısı Modeli
function RealisticGunisiModel() {
  return (
    <group position={[0, -0.2, 0]} rotation={[0, -Math.PI / 6, 0]}>
      {/* 1. KROM DEPO (MAIN TANK) */}
      <group position={[0, 1.1, -0.3]}>
        {/* Ana Silindir Depo */}
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 2.2, 64]} />
          <meshStandardMaterial
            color="#E5E7EB"
            metalness={0.98}
            roughness={0.08}
            envMapIntensity={1.5}
          />
        </mesh>
        
        {/* Depo Yan Yan Kapak Çemberleri (Krom Detaylar) */}
        <mesh position={[-1.11, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <sphereGeometry args={[0.42, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[1.11, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <sphereGeometry args={[0.42, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Depo Üzerindeki Kırmızı/Mavi Su Giriş Detayları */}
        <mesh position={[-0.6, 0.43, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
          <meshStandardMaterial color="#EF4444" roughness={0.2} />
        </mesh>
        <mesh position={[0.6, 0.43, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
          <meshStandardMaterial color="#3B82F6" roughness={0.2} />
        </mesh>
      </group>

      {/* 2. TASARIM TAŞIYICI ÇELİK İSKELE (SUPPORT FRAME) */}
      <group>
        {/* Sol ve Sağ Arka Dikey Ayaklar */}
        <mesh position={[-0.9, 0.3, -0.3]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.06, 1.6, 0.06]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0.9, 0.3, -0.3]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.06, 1.6, 0.06]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Ön Açılı Ayaklar */}
        <mesh position={[-0.9, 0.1, 0.4]} rotation={[Math.PI / 5, 0, 0]}>
          <boxGeometry args={[0.06, 2.0, 0.06]} />
          <meshStandardMaterial color="#4B5563" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0.9, 0.1, 0.4]} rotation={[Math.PI / 5, 0, 0]}>
          <boxGeometry args={[0.06, 2.0, 0.06]} />
          <meshStandardMaterial color="#4B5563" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* 3. VAKUM TÜPLER (CAM GÜNEŞ KOLEKTÖRLERİ) */}
      <group position={[0, 0.2, 0.3]} rotation={[Math.PI / 4, 0, 0]}>
        {/* Tüp Paneli Alt Çerçevesi */}
        <mesh position={[0, 0, -0.05]}>
          <boxGeometry args={[2.1, 1.7, 0.04]} />
          <meshStandardMaterial color="#1F2937" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* 10 Adet Yüksek Verimli Cam Tüp Dizilimi */}
        {[-0.85, -0.66, -0.47, -0.28, -0.09, 0.1, 0.29, 0.48, 0.67, 0.86].map((x, i) => (
          <group key={i} position={[x, 0, 0.02]}>
            {/* Cam Tüp Dış Katmanı */}
            <mesh>
              <cylinderGeometry args={[0.06, 0.06, 1.6, 24]} />
              <meshPhysicalMaterial
                color="#0F172A"
                emissive="#1E3A8A"
                emissiveIntensity={0.3}
                metalness={0.1}
                roughness={0.1}
                transmission={0.6}
                thickness={0.1}
              />
            </mesh>
            {/* Tüp İçi Yansıtıcı Bakır/Lacivert Çubuk */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 1.58, 16]} />
              <meshStandardMaterial color="#1D4ED8" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

export default function Canvas3D() {
  return (
    <div className="w-full h-[420px] md:h-[550px] relative cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 1, 4.5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        {/* Güneş Işığı Efekti */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.2}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#3B82F6" />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
            <RealisticGunisiModel />
          </Float>
          {/* Zemin Gölgesi */}
          <ContactShadows position={[0, -1.2, 0]} opacity={0.6} scale={6} blur={2} far={4} />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} maxPolarAngle={Math.PI / 2} />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-1.5 rounded-full text-xs text-gray-300 pointer-events-none flex items-center gap-2 border border-solar-500/30">
        <span className="w-2.5 h-2.5 rounded-full bg-solar-500 animate-ping"></span>
        360° Çevirerek İnceleyin
      </div>
    </div>
  );
}

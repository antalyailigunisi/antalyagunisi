'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Text } from '@react-three/drei';
import { Suspense } from 'react';

const TUBE_COUNT = 16;
const TUBE_SPACING = 0.13;
const TUBE_START = -0.98;

function RealZirveGunisiModel() {
  const phone = '0506 252 16 81';

  return (
    <group position={[0, -0.3, 0]} rotation={[0.05, 0, 0]}>
      {/* 1. ÜST BEYAZ SOĞUK SU DEPOSU */}
      <group position={[0, 1.55, -0.2]}>
        {/* Beyaz Gövde */}
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.32, 0.32, 2.1, 64]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.1} />
        </mesh>
        
        {/* Sol & Sağ Beyaz Kapaklar */}
        <mesh position={[-1.06, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <sphereGeometry args={[0.32, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#F3F4F6" roughness={0.2} />
        </mesh>
        <mesh position={[1.06, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <sphereGeometry args={[0.32, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#F3F4F6" roughness={0.2} />
        </mesh>

        {/* Metal Montaj Kelepçeleri (Straps) */}
        <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.33, 0.02, 16, 32]} />
          <meshStandardMaterial color="#9CA3AF" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.33, 0.02, 16, 32]} />
          <meshStandardMaterial color="#9CA3AF" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* 2. ANA MANİFOLD DEPO (TURUNCU KAPAKLI & ZİRVE AMBLEMLİ) */}
      <group position={[0, 0.9, 0]}>
        {/* Ana Beyaz Silindir */}
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.36, 0.36, 2.2, 64]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.05} />
        </mesh>

        {/* SOL CANLI TURUNCU KAPAK */}
        <mesh position={[-1.11, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.37, 0.37, 0.08, 32]} />
          <meshStandardMaterial color="#EA580C" roughness={0.3} />
        </mesh>

        {/* SAĞ CANLI TURUNCU KAPAK */}
        <mesh position={[1.11, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.37, 0.37, 0.08, 32]} />
          <meshStandardMaterial color="#EA580C" roughness={0.3} />
        </mesh>

        {/* 🌟 BEYAZ TABELA / AMBLEM ALANI */}
        <mesh position={[0, 0, 0.361]}>
          <planeGeometry args={[1.5, 0.38]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
        </mesh>

        {/* Logo Sembolü (Kırmızı Küre) */}
        <mesh position={[-0.55, 0.03, 0.37]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#DC2626" roughness={0.3} />
        </mesh>

        {/* ZİRVE Yazısı */}
        <Text
          position={[-0.22, 0.04, 0.37]}
          fontSize={0.13}
          color="#111827"
          anchorX="center"
          anchorY="middle"
        >
          ZİRVE
        </Text>

        {/* Güneş Enerji Sistemleri Alt Yazısı */}
        <Text
          position={[-0.22, -0.08, 0.37]}
          fontSize={0.04}
          color="#166534"
          anchorX="center"
          anchorY="middle"
        >
          Güneş Enerji Sistemleri
        </Text>

        {/* Telefon Numarası */}
        <Text
          position={[0.35, 0, 0.37]}
          fontSize={0.11}
          color="#000000"
          anchorX="center"
          anchorY="middle"
        >
          {phone}
        </Text>
      </group>

      {/* 3. SIMSIYAH PARLAK VAKUM TÜPLER (16 ADET) */}
      <group position={[0, -0.05, 0.38]} rotation={[Math.PI / 3.2, 0, 0]}>
        {Array.from({ length: TUBE_COUNT }, (_, i) => {
          const x = TUBE_START + i * TUBE_SPACING;
          return (
            <group key={i} position={[x, 0, 0]}>
              {/* Siyah Parlak Cam Tüp */}
              <mesh castShadow>
                <cylinderGeometry args={[0.042, 0.042, 1.85, 24]} />
                <meshStandardMaterial
                  color="#050811"
                  metalness={0.9}
                  roughness={0.05}
                  envMapIntensity={2.0}
                />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* 4. ALT TURUNCU TAŞIYICI ÇERÇEVE RAYI */}
      <mesh position={[0, -0.82, 0.88]}>
        <boxGeometry args={[2.3, 0.12, 0.08]} />
        <meshStandardMaterial color="#EA580C" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* 5. ARKA SİYAH İSKELET AYAKLARI */}
      <group>
        <mesh position={[-0.98, 0.35, -0.2]}>
          <boxGeometry args={[0.05, 2.1, 0.05]} />
          <meshStandardMaterial color="#111827" roughness={0.5} />
        </mesh>
        <mesh position={[0.98, 0.35, -0.2]}>
          <boxGeometry args={[0.05, 2.1, 0.05]} />
          <meshStandardMaterial color="#111827" roughness={0.5} />
        </mesh>
      </group>
    </group>
  );
}

export default function Canvas3D() {
  return (
    <div className="w-full h-[450px] md:h-[550px] relative cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0.8, 3.8], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 10, 5]} intensity={2.8} castShadow shadow-mapSize={1024} />
        <directionalLight position={[-3, -5, -3]} intensity={0.5} color="#FFFFFF" />

        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.2}>
            <RealZirveGunisiModel />
          </Float>
          <ContactShadows position={[0, -1.2, 0]} opacity={0.6} scale={6.5} blur={2} far={4} />
        </Suspense>

        <OrbitControls
          enableZoom
          minDistance={2.5}
          maxDistance={5.5}
          autoRotate
          autoRotateSpeed={1.0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-1.5 rounded-full text-xs text-gray-300 pointer-events-none flex items-center gap-2 border border-solar-500/30">
        <span className="w-2.5 h-2.5 rounded-full bg-solar-500 animate-ping"></span>
        3D Modeli Çevirerek İnceleyin
      </div>
    </div>
  );
}

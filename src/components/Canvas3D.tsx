'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Text } from '@react-three/drei';
import { Suspense } from 'react';

// 2 Depolu, Üzerinde İsim ve Telefon Yazan Özel 3D Günısı Modeli
function DualTankCustomModel() {
  const phone = '0506 252 16 81';

  return (
    <group position={[0, -0.2, 0]} rotation={[0, -Math.PI / 5, 0]}>
      {/* 1. ÜST DEPO (Sıcak Su Deposu + Marka & Telefon Yazısı) */}
      <group position={[0, 1.35, -0.2]}>
        {/* Depo Gövdesi */}
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.38, 0.38, 2.2, 64]} />
          <meshStandardMaterial
            color="#F3F4F6"
            metalness={0.96}
            roughness={0.08}
            envMapIntensity={1.8}
          />
        </mesh>
        
        {/* Yan Yuvarlatılmış Kapaklar */}
        <mesh position={[-1.11, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <sphereGeometry args={[0.38, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[1.11, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <sphereGeometry args={[0.38, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* 🌟 Depo Üzerindeki 3D Marka Yazısı (ANTALYA GÜNISI ZİRVE) */}
        <Text
          position={[0, 0.08, 0.39]}
          fontSize={0.095}
          color="#000000"
          font="https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm453WzA3W0.woff"
          anchorX="center"
          anchorY="middle"
        >
          ANTALYA GÜNISI ZİRVE
        </Text>

        {/* 🌟 Depo Üzerindeki 3D Telefon Yazısı (0506 252 16 81) */}
        <Text
          position={[0, -0.08, 0.39]}
          fontSize={0.085}
          color="#D97706"
          font="https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm453WzA3W0.woff"
          anchorX="center"
          anchorY="middle"
        >
          {phone}
        </Text>

        {/* Su Giriş Boru Başlıkları */}
        <mesh position={[-0.7, 0.39, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.1, 16]} />
          <meshStandardMaterial color="#EF4444" roughness={0.2} />
        </mesh>
        <mesh position={[0.7, 0.39, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.1, 16]} />
          <meshStandardMaterial color="#3B82F6" roughness={0.2} />
        </mesh>
      </group>

      {/* 2. ALT DEPO (Soğuk Su / Basınç Dengeleme Deposu) */}
      <group position={[0, 0.72, -0.35]}>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 2.0, 64]} />
          <meshStandardMaterial
            color="#E5E7EB"
            metalness={0.92}
            roughness={0.12}
          />
        </mesh>
        <mesh position={[-1.01, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <sphereGeometry args={[0.26, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#9CA3AF" metalness={0.9} roughness={0.15} />
        </mesh>
        <mesh position={[1.01, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <sphereGeometry args={[0.26, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#9CA3AF" metalness={0.9} roughness={0.15} />
        </mesh>
      </group>

      {/* 3. ÇELİK TAŞIYICI İSKELET (DUAL TANK MOUNTING FRAME) */}
      <group>
        {/* Dikey Sağ ve Sol Çelik Ayaklar */}
        <mesh position={[-0.95, 0.45, -0.3]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.06, 1.9, 0.06]} />
          <meshStandardMaterial color="#1F2937" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0.95, 0.45, -0.3]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.06, 1.9, 0.06]} />
          <meshStandardMaterial color="#1F2937" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Ön Eğimli Destek Ayakları */}
        <mesh position={[-0.95, 0.1, 0.35]} rotation={[Math.PI / 5, 0, 0]}>
          <boxGeometry args={[0.06, 2.2, 0.06]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0.95, 0.1, 0.35]} rotation={[Math.PI / 5, 0, 0]}>
          <boxGeometry args={[0.06, 2.2, 0.06]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* 4. VAKUM TÜPLER (12 ADET LACİVERT CAM TÜP) */}
      <group position={[0, -0.05, 0.32]} rotation={[Math.PI / 4, 0, 0]}>
        {/* Panel Çerçevesi */}
        <mesh position={[0, 0, -0.04]}>
          <boxGeometry args={[2.15, 1.65, 0.04]} />
          <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Cam Tüpler */}
        {[-0.88, -0.72, -0.56, -0.4, -0.24, -0.08, 0.08, 0.24, 0.4, 0.56, 0.72, 0.88].map((x, i) => (
          <group key={i} position={[x, 0, 0.02]}>
            <mesh>
              <cylinderGeometry args={[0.055, 0.055, 1.55, 24]} />
              <meshPhysicalMaterial
                color="#0284C7"
                emissive="#1E3A8A"
                emissiveIntensity={0.4}
                metalness={0.1}
                roughness={0.1}
                transmission={0.65}
                thickness={0.1}
              />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.028, 0.028, 1.53, 16]} />
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
    <div className="w-full h-[450px] md:h-[550px] relative cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 1.2, 4.6], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.5}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.6} color="#F59E0B" />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.3}>
            <DualTankCustomModel />
          </Float>
          <ContactShadows position={[0, -1.2, 0]} opacity={0.6} scale={6.5} blur={2.2} far={4} />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.3} maxPolarAngle={Math.PI / 2} />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-1.5 rounded-full text-xs text-gray-300 pointer-events-none flex items-center gap-2 border border-solar-500/30">
        <span className="w-2.5 h-2.5 rounded-full bg-solar-500 animate-ping"></span>
        3D Modeli Çevirerek İnceleyin
      </div>
    </div>
  );
}

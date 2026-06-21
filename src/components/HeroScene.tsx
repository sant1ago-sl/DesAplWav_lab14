"use client";

import { Float, Box, Cylinder, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function SceneContent() {
  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 5, 5]} intensity={1.8} color="#60a5fa" />
      <pointLight position={[-3, -2, 4]} intensity={1.1} color="#a78bfa" />

      <Float speed={1.4} rotationIntensity={0.7} floatIntensity={0.8}>
        <Box args={[1.5, 1.5, 1.5]} position={[-1.3, 0.3, 0]}>
          <meshStandardMaterial
            color="#dbeafe"
            metalness={0.15}
            roughness={0.3}
            wireframe
          />
        </Box>
      </Float>

      <Float speed={1.7} rotationIntensity={0.9} floatIntensity={1}>
        <Box args={[1.1, 1.1, 1.1]} position={[0.9, 0.9, 0.1]} rotation={[0.4, 0.5, 0.3]}>
          <meshStandardMaterial
            color="#bfdbfe"
            metalness={0.1}
            roughness={0.25}
          />
        </Box>
      </Float>

      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
        <Cylinder args={[0.55, 0.55, 1.2, 32]} position={[1.1, -0.9, -0.2]}>
          <meshStandardMaterial
            color="#e9d5ff"
            metalness={0.12}
            roughness={0.28}
          />
        </Cylinder>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.1} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,_#f8fbff_0%,_#eef4ff_100%)] md:h-[360px]">
      <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 shadow-sm">
        Codigo y stack
      </div>
      <div className="pointer-events-none absolute bottom-5 left-5 flex gap-2">
        <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
          UI
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
          Front
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
          Back
        </span>
      </div>
      <Canvas camera={{ position: [0, 0, 5.8], fov: 42 }}>
        <SceneContent />
      </Canvas>
    </div>
  );
}

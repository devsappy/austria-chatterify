"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PresentationControls, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// Reused materials (so we don't create one per key)
const keyTopMaterial = new THREE.MeshStandardMaterial({
  color: "#262626",
  roughness: 0.5,
  metalness: 0.05,
});

const grilleMaterial = new THREE.MeshStandardMaterial({
  color: "#0a0a0a",
  roughness: 0.9,
});

function KeyboardKeys() {
  // grid laid out behind the trackpad, sitting on the dark deck
  const cols = 14;
  const rows = 4;
  const stepX = 0.128;
  const stepZ = 0.14;
  const startX = -((cols - 1) / 2) * stepX;
  const startZ = -0.28;
  const keyY = 0.05;

  const keys = useMemo(() => {
    const out: Array<{ key: string; pos: [number, number, number]; size: [number, number, number] }> = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // skip the middle of the bottom row — that becomes the spacebar
        if (r === rows - 1 && c >= 5 && c <= 9) continue;
        out.push({
          key: `k-${r}-${c}`,
          pos: [startX + c * stepX, keyY, startZ + r * stepZ],
          size: [0.105, 0.014, 0.105],
        });
      }
    }
    return out;
  }, []);

  return (
    <group>
      {keys.map((k) => (
        <mesh key={k.key} position={k.pos} material={keyTopMaterial}>
          <boxGeometry args={k.size} />
        </mesh>
      ))}
      {/* spacebar */}
      <mesh
        position={[0, 0.05, startZ + (rows - 1) * stepZ]}
        material={keyTopMaterial}
      >
        <boxGeometry args={[0.62, 0.014, 0.105]} />
      </mesh>
    </group>
  );
}

function SpeakerGrille({ x }: { x: number }) {
  // a tight grid of tiny dots that read as a speaker mesh
  const dots = useMemo(() => {
    const out: Array<[number, number, number]> = [];
    const rows = 4;
    const cols = 14;
    const stepX = 0.014;
    const stepZ = 0.04;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const offset = r % 2 === 0 ? 0 : stepX / 2;
        out.push([
          x + (c - cols / 2) * stepX + offset,
          0.0455,
          -0.34 + r * stepZ,
        ]);
      }
    }
    return out;
  }, [x]);

  return (
    <group>
      {dots.map((p, i) => (
        <mesh key={i} position={p} material={grilleMaterial}>
          <boxGeometry args={[0.006, 0.001, 0.006]} />
        </mesh>
      ))}
    </group>
  );
}

function Laptop() {
  const lidRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!lidRef.current) return;
    lidRef.current.rotation.x = THREE.MathUtils.damp(
      lidRef.current.rotation.x,
      -0.18,
      2,
      delta
    );
  });

  return (
    <group position={[0, -0.55, 0]} scale={0.78}>
      {/* base — chassis */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[2.4, 0.08, 1.6]} />
        <meshStandardMaterial color="#d6d8db" metalness={0.85} roughness={0.28} />
      </mesh>

      {/* subtle bottom shadow line */}
      <mesh position={[0, -0.041, 0]}>
        <boxGeometry args={[2.36, 0.005, 1.56]} />
        <meshStandardMaterial color="#9ea2a7" roughness={0.6} />
      </mesh>

      {/* keyboard deck inset (the dark plate where keys sit) */}
      <mesh position={[0, 0.041, -0.05]}>
        <boxGeometry args={[1.95, 0.002, 0.7]} />
        <meshStandardMaterial color="#0e0e0e" roughness={0.85} />
      </mesh>

      <KeyboardKeys />

      {/* speaker grilles flanking the keyboard */}
      <SpeakerGrille x={-1.05} />
      <SpeakerGrille x={1.05} />

      {/* trackpad */}
      <mesh position={[0, 0.0425, 0.55]}>
        <boxGeometry args={[0.8, 0.003, 0.48]} />
        <meshStandardMaterial color="#b8bcc1" roughness={0.4} metalness={0.25} />
      </mesh>
      {/* trackpad bevel ring */}
      <mesh position={[0, 0.0418, 0.55]}>
        <boxGeometry args={[0.84, 0.002, 0.5]} />
        <meshStandardMaterial color="#7c8087" roughness={0.5} />
      </mesh>

      {/* hinge cylinder running along the back */}
      <mesh position={[0, 0.045, -0.78]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 2.2, 24]} />
        <meshStandardMaterial color="#7a7e83" metalness={0.9} roughness={0.4} />
      </mesh>

      {/* lid hinge group */}
      <group
        ref={lidRef}
        position={[0, 0.04, -0.78]}
        rotation={[Math.PI * 0.5, 0, 0]}
      >
        {/* lid back panel — outer aluminum */}
        <mesh position={[0, 0.78, -0.04]} castShadow>
          <boxGeometry args={[2.4, 1.55, 0.05]} />
          <meshStandardMaterial color="#c8cbd0" metalness={0.85} roughness={0.28} />
        </mesh>

        {/* screen bezel (black border around the screen) */}
        <mesh position={[0, 0.78, 0.0001]}>
          <boxGeometry args={[2.34, 1.49, 0.005]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
        </mesh>

        {/* webcam notch */}
        <mesh position={[0, 1.5, 0.003]}>
          <boxGeometry args={[0.18, 0.04, 0.001]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
        </mesh>
        <mesh position={[0, 1.5, 0.004]}>
          <circleGeometry args={[0.012, 24]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.6} />
        </mesh>

        {/* screen background — site paper */}
        <mesh position={[0, 0.76, 0.003]}>
          <boxGeometry args={[2.18, 1.36, 0.002]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* nav strip */}
        <mesh position={[0, 1.39, 0.0045]}>
          <boxGeometry args={[2.18, 0.1, 0.001]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        {/* nav bottom rule */}
        <mesh position={[0, 1.34, 0.0045]}>
          <boxGeometry args={[2.18, 0.003, 0.001]} />
          <meshBasicMaterial color="#d6d6d6" />
        </mesh>
        {/* logo tile */}
        <mesh position={[-0.97, 1.39, 0.005]}>
          <boxGeometry args={[0.05, 0.05, 0.001]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <Text
          position={[-0.9, 1.39, 0.006]}
          fontSize={0.04}
          color="#000000"
          anchorX="left"
          anchorY="middle"
          letterSpacing={-0.02}
        >
          Handwerk · Atelier
        </Text>
        <Text
          position={[0.97, 1.39, 0.006]}
          fontSize={0.032}
          color="#404040"
          anchorX="right"
          anchorY="middle"
          letterSpacing={0.02}
        >
          01 LEISTUNGEN   02 BRANCHEN   03 KONTAKT
        </Text>

        {/* big headline */}
        <Text
          position={[-0.97, 1.13, 0.006]}
          fontSize={0.18}
          color="#000000"
          anchorX="left"
          anchorY="top"
          letterSpacing={-0.04}
        >
          Websites
        </Text>
        <Text
          position={[-0.97, 0.92, 0.006]}
          fontSize={0.18}
          color="#000000"
          anchorX="left"
          anchorY="top"
          letterSpacing={-0.04}
        >
          die dich zum
        </Text>
        <Text
          position={[-0.97, 0.71, 0.006]}
          fontSize={0.18}
          color="#000000"
          anchorX="left"
          anchorY="top"
          letterSpacing={-0.04}
        >
          Staunen
        </Text>
        {/* blue accent dot after Staunen */}
        <mesh position={[-0.27, 0.66, 0.0065]}>
          <circleGeometry args={[0.022, 24]} />
          <meshBasicMaterial color="#4a70a9" />
        </mesh>
        <Text
          position={[-0.97, 0.5, 0.006]}
          fontSize={0.18}
          color="#000000"
          anchorX="left"
          anchorY="top"
          letterSpacing={-0.04}
        >
          bringen.
        </Text>

        {/* CTA button */}
        <mesh position={[-0.69, 0.27, 0.006]}>
          <boxGeometry args={[0.62, 0.085, 0.001]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <Text
          position={[-0.69, 0.27, 0.007]}
          fontSize={0.03}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.01}
        >
          Kostenloses Gespräch buchen  ↗
        </Text>

        {/* stats divider */}
        <mesh position={[0, 0.16, 0.006]}>
          <boxGeometry args={[2.0, 0.002, 0.001]} />
          <meshBasicMaterial color="#d6d6d6" />
        </mesh>

        {/* 4 stats columns */}
        {[
          { letter: "A", label: "STANDORTE", value: "Wien · München" },
          { letter: "B", label: "BRANCHEN", value: "Handwerk · Café" },
          { letter: "C", label: "METHODE", value: "Sorgfalt · Tempo" },
          { letter: "D", label: "ANTWORT", value: "< 24 Std." },
        ].map((s, i) => {
          const x = -0.75 + i * 0.5;
          return (
            <group key={s.letter}>
              <Text
                position={[x - 0.22, 0.07, 0.006]}
                fontSize={0.024}
                color="#404040"
                anchorX="left"
                anchorY="top"
                letterSpacing={0.02}
              >
                {s.letter}
              </Text>
              <Text
                position={[x + 0.22, 0.07, 0.006]}
                fontSize={0.018}
                color="#404040"
                anchorX="right"
                anchorY="top"
                letterSpacing={0.02}
              >
                —
              </Text>
              <Text
                position={[x - 0.22, 0.04, 0.006]}
                fontSize={0.022}
                color="#1a1a1a"
                anchorX="left"
                anchorY="top"
                letterSpacing={0.04}
              >
                {s.label}
              </Text>
              <Text
                position={[x - 0.22, -0.005, 0.006]}
                fontSize={0.026}
                color="#000000"
                anchorX="left"
                anchorY="top"
                letterSpacing={-0.01}
              >
                {s.value}
              </Text>
            </group>
          );
        })}

        {/* logo on back of lid */}
        <mesh position={[0, 0.78, -0.066]}>
          <circleGeometry args={[0.14, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#8fabd4"
            emissiveIntensity={0.3}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroLaptop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative aspect-square w-full"
    >
      <Canvas
        camera={{ position: [0.3, 1.1, 4.6], fov: 28 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 4]} intensity={1.2} />
        <directionalLight position={[-3, 2, -2]} intensity={0.45} />
        <directionalLight position={[0, -2, 4]} intensity={0.25} />
        <Suspense fallback={null}>
          <PresentationControls
            global
            polar={[-0.25, 0.25]}
            azimuth={[-0.6, 0.6]}
            config={{ mass: 1, tension: 170, friction: 26 }}
            snap={{ mass: 4, tension: 40 }}
          >
            <Float floatIntensity={0.12} rotationIntensity={0.08} speed={1.3}>
              <Laptop />
            </Float>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

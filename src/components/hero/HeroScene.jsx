import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function SceneLights() {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    group.current.rotation.y = t * 0.05;
    group.current.rotation.x = Math.sin(t * 0.15) * 0.05;
  });

  return (
    <group ref={group}>

      {/* Ambient Light */}

      <ambientLight intensity={1.8} />

      {/* Main Light */}

      <directionalLight
        position={[6, 6, 5]}
        intensity={2}
        color="#ffffff"
      />

      {/* Purple Glow */}

      <pointLight
        position={[4, 2, 2]}
        intensity={18}
        color="#8b5cf6"
      />

      {/* Blue Glow */}

      <pointLight
        position={[-4, -2, 2]}
        intensity={12}
        color="#3b82f6"
      />

      {/* Pink Accent */}

      <pointLight
        position={[0, 3, -2]}
        intensity={8}
        color="#ec4899"
      />

    </group>
  );
}

function AnimatedStars() {
  const stars = useRef();

  useFrame(({ clock }) => {
    if (!stars.current) return;

    stars.current.rotation.y =
      clock.getElapsedTime() * 0.02;

    stars.current.rotation.x =
      Math.sin(clock.getElapsedTime() * 0.1) * 0.02;
  });

  return (
    <group ref={stars}>

      <Stars
        radius={120}
        depth={60}
        count={4500}
        factor={4}
        saturation={0}
        fade
        speed={0.6}
      />

    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 55,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Background Color */}
      <color attach="background" args={["#050816"]} />

      {/* Soft Fog */}
      <fog attach="fog" args={["#050816", 8, 22]} />

      {/* Scene Lights */}
      <SceneLights />

      {/* Animated Stars */}
      <AnimatedStars />
    </Canvas>
  );
}
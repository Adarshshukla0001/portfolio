import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function SceneLights() {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    group.current.rotation.y = t * 0.03;
    group.current.rotation.x = Math.sin(t * 0.08) * 0.03;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[6, 6, 5]}
        intensity={1.5}
        color="#ffffff"
      />

      <pointLight
        position={[4, 2, 2]}
        intensity={12}
        color="#8b5cf6"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={10}
        color="#3b82f6"
      />

      <pointLight
        position={[0, 3, -2]}
        intensity={8}
        color="#06b6d4"
      />
    </group>
  );
}

function StarLayer({
  radius,
  depth,
  count,
  factor,
  speed,
  rotationSpeed,
}) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y =
      clock.getElapsedTime() * rotationSpeed;
  });

  return (
    <group ref={ref}>
      <Stars
        radius={radius}
        depth={depth}
        count={count}
        factor={factor}
        saturation={0}
        fade
        speed={speed}
      />
    </group>
  );
}

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 5],
          fov: 55,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <color attach="background" args={["#050816"]} />

        <fog attach="fog" args={["#050816", 10, 28]} />

        <SceneLights />

        <StarLayer
          radius={120}
          depth={60}
          count={3500}
          factor={4}
          speed={0.3}
          rotationSpeed={0.01}
        />

        <StarLayer
          radius={90}
          depth={40}
          count={1800}
          factor={2}
          speed={0.2}
          rotationSpeed={-0.005}
        />
      </Canvas>
    </div>
  );
}
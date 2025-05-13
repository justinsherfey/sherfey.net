import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Text3D, Center } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Component for individual falling characters (simplified Matrix-like)
function FallingChar() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const initialY = useMemo(() => Math.random() * 20 + 10, []); // Start above screen
  const speed = useMemo(() => Math.random() * 0.05 + 0.02, []);
  const char = useMemo(
    () => String.fromCharCode(0x30a0 + Math.random() * (0x30ff - 0x30a0 + 1)),
    []
  ); // Katakana characters

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y -= speed;
      if (meshRef.current.position.y < -10) {
        // Reset when off-screen
        meshRef.current.position.y = initialY;
        meshRef.current.position.x = (Math.random() - 0.5) * 20;
      }
      // Optional: slight rotation or color change
      // meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/droid/droid_sans_mono_regular.typeface.json" // Make sure to have this font
      size={0.5}
      height={0.05}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      position={[
        (Math.random() - 0.5) * 20,
        initialY,
        (Math.random() - 0.5) * 5 - 5,
      ]}
    >
      {char}
      <meshStandardMaterial
        color="#00ff00"
        emissive="#00ff00"
        emissiveIntensity={0.5}
      />
    </Text3D>
  );
}

// Component for the main title
function Title3D() {
  return (
    <Center position={[0, 2.5, -5]}>
      <Text3D
        font="/fonts/droid/droid_sans_mono_regular.typeface.json"
        size={1.2}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {`Justin Sherfey`}
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.7}
        />
      </Text3D>
    </Center>
  );
}

const HackerCanvas = () => {
  const numChars = 100; // Number of falling characters

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ff00" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      {/* <Title3D /> */} {/* Optional: Add a 3D title if you like */}
      {Array.from({ length: numChars }).map((_, i) => (
        <FallingChar key={i} />
      ))}
      {/* You can add more 3D elements here */}
      {/* Example: A rotating cube */}
      {/* <mesh position={[0, -2, 0]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ff00ff" wireframe />
      </mesh> */}
    </Canvas>
  );
};

export default HackerCanvas;

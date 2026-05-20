import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const Moon = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Load the moon model and texture
  const obj = useLoader(OBJLoader, "/source/earth.obj");
  const texture = useLoader(THREE.TextureLoader, "/textures/2k_moon.jpeg");

  // Process and center the moon model
  const centeredMoon = useMemo(() => {
    const moon = obj.clone();

    // Apply texture to all meshes
    moon.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
        });
      }
    });

    // Center the model by calculating bounding box
    const box = new THREE.Box3().setFromObject(moon);
    const center = box.getCenter(new THREE.Vector3());

    // Offset the entire model to center it
    moon.position.set(-center.x, -center.y, -center.z);

    return moon;
  }, [obj, texture]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Rotate the moon back and forth (oscillate)
      // Range of about 45 degrees (PI/4) in each direction
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * (Math.PI / 4);

      // Reset position to center
      groupRef.current.position.x = 0;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <primitive object={centeredMoon} scale={1.2} />
    </group>
  );
};

const MoonScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-3, -3, -3]} intensity={0.3} color="#6366f1" />
        <Suspense fallback={null}>
          <Moon />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default MoonScene;

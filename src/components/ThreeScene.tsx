'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Custom liquid holographic shader definition
const HologramShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#00f0ff') }, // electric blue
    uColor2: { value: new THREE.Color('#bd00ff') }, // cyber violet
  },
  vertexShader: `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    // Pseudo-random noise functions
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
    }

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      // Dynamic coordinate-displacement using combined sine waves & simplex-like noise
      vec3 pos = position;
      float noiseFactor = noise(pos.xy * 2.0 + uTime * 0.8);
      float displace = sin(pos.x * 2.5 + uTime) * cos(pos.y * 2.5 + uTime) * 0.14 + (noiseFactor * 0.08);
      pos += normal * displace;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Fresnel outline calculation
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.2);
      
      // Multi-colored neon liquid gradients pulsing over time
      float pulse = sin(uTime * 0.4) * 0.5 + 0.5;
      vec3 gradientColor = mix(uColor1, uColor2, pulse + (vNormal.y * 0.25));
      
      // Add subtle scanline pattern
      float scanlines = sin(vViewPosition.y * 28.0 + uTime * 4.0) * 0.1 + 0.9;
      
      vec3 finalColor = gradientColor * (fresnel + 0.12) * scanlines;
      float alpha = fresnel * 0.7 + 0.15; // semi-transparent glow
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `,
};

// Component for the liquid holographic sphere itself
function HolographicSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Memoize shader material uniforms
  const uniforms = useMemo(() => THREE.UniformsUtils.clone(HologramShader.uniforms), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = time * 0.08;
      
      // Update uniform time variables in custom shader
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      if (mat.uniforms && mat.uniforms.uTime) {
        mat.uniforms.uTime.value = time;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <shaderMaterial
        vertexShader={HologramShader.vertexShader}
        fragmentShader={HologramShader.fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Physical glass rings rotating around the sphere
function GlassRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Counter-rotations for mechanical physical look
      groupRef.current.children[0].rotation.z = time * 0.25;
      groupRef.current.children[0].rotation.x = time * 0.12;
      groupRef.current.children[1].rotation.z = -time * 0.18;
      groupRef.current.children[1].rotation.y = time * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ring 1 - Inner glass physical ring */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.3, 0.06, 16, 100]} />
        <meshPhysicalMaterial
          color="#00f0ff"
          roughness={0.08}
          transmission={0.9}
          thickness={1.5}
          ior={1.45}
          clearcoat={1.0}
          transparent={true}
          opacity={0.65}
        />
      </mesh>
      
      {/* Ring 2 - Outer glass physical ring */}
      <mesh rotation={[-Math.PI / 6, Math.PI / 3, 0]}>
        <torusGeometry args={[2.8, 0.04, 16, 100]} />
        <meshPhysicalMaterial
          color="#bd00ff"
          roughness={0.12}
          transmission={0.85}
          thickness={1.2}
          ior={1.45}
          clearcoat={1.0}
          transparent={true}
          opacity={0.45}
        />
      </mesh>
    </group>
  );
}

// Particle system orbiting with subtle cursor reactivity
function OrbitingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 450;

  // Generate initial coordinates randomly distributed inside a shell
  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const orig = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 2.5; // Orbit shell width
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      orig.push({ x, y, z, theta, phi, radius });
    }
    return [pos, orig];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const points = pointsRef.current;
    if (!points) return;

    const geo = points.geometry;
    const array = geo.attributes.position.array as Float32Array;
    const { pointer } = state; // Normalized pointer: x is [-1, 1], y is [-1, 1]

    for (let i = 0; i < particleCount; i++) {
      const orig = initialPositions[i];
      // Orbit calculation
      const speed = 0.08 + (orig.radius * 0.015);
      const angle = orig.theta + time * speed;
      
      let targetX = orig.radius * Math.sin(orig.phi) * Math.cos(angle);
      let targetY = orig.radius * Math.sin(orig.phi) * Math.sin(angle);
      let targetZ = orig.radius * Math.cos(orig.phi);

      // Magnetic pull towards user's cursor
      const dx = pointer.x * 2.5 - targetX;
      const dy = pointer.y * 2.5 - targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 3.0) {
        // Pull particles in the cursor's vicinity slightly closer
        const pull = (3.0 - dist) * 0.18;
        targetX += dx * pull;
        targetY += dy * pull;
      }

      array[i * 3] = THREE.MathUtils.lerp(array[i * 3], targetX, 0.1);
      array[i * 3 + 1] = THREE.MathUtils.lerp(array[i * 3 + 1], targetY, 0.1);
      array[i * 3 + 2] = THREE.MathUtils.lerp(array[i * 3 + 2], targetZ, 0.1);
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00f0ff"
        size={0.065}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ThreeScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Subtle organic light backdrop behind canvas */}
      <div className="absolute inset-0 bg-radial from-[rgba(189,0,255,0.06)] via-transparent to-transparent opacity-50 blur-3xl pointer-events-none -z-10" />
      
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full min-h-[300px]"
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#bd00ff" />
        
        <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.2}>
          <group position={[0, 0, 0]}>
            <HolographicSphere />
            {!isMobile && <GlassRings />}
            <OrbitingParticles />
          </group>
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

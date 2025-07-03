'use client';

import React, { useRef, useMemo, useState, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { 
  Text3D, 
  OrbitControls, 
  Float, 
  MeshDistortMaterial,
  Instances,
  Instance,
  useTexture,
  useCursor,
  Bounds,
  useBounds,
  ContactShadows,
  Environment,
  CameraControls
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Vector3, Euler, Color, MathUtils } from 'three';
import * as THREE from 'three';
import { Scene3DWrapper } from './3d-scene-wrapper';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { Badge } from '@/glass-ui/src/components/badge';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Play, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'frontend' | 'backend' | 'design' | 'ai' | 'mobile';
  image?: string;
  color: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  featured?: boolean;
}

interface InteractiveGallery3DProps {
  items: GalleryItem[];
  onItemSelect?: (item: GalleryItem) => void;
  className?: string;
}

// Performance-optimized instanced geometry for gallery items
function GalleryInstances({ 
  items, 
  onItemClick 
}: { 
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}) {
  const instancesRef = useRef<THREE.InstancedMesh>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  // Position items in a spiral pattern
  const positions = useMemo(() => {
    return items.map((_, index) => {
      const radius = 8 + Math.floor(index / 6) * 4;
      const angle = (index * Math.PI * 2) / 6;
      const y = Math.sin(index * 0.5) * 2;
      
      return [
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, [items]);

  useFrame((state) => {
    if (!instancesRef.current) return;

    const time = state.clock.elapsedTime;
    
    // Animate each instance
    items.forEach((item, index) => {
      const matrix = new THREE.Matrix4();
      const position = new THREE.Vector3(...positions[index]);
      
      // Add gentle floating animation
      position.y += Math.sin(time + index) * 0.2;
      
      // Add rotation
      const rotation = new THREE.Euler(
        Math.sin(time + index) * 0.1,
        time * 0.1 + index,
        Math.cos(time + index) * 0.05
      );
      
      // Scale based on hover/selection state
      let scale = 1;
      if (selected === index) scale = 1.3;
      else if (hovered === index) scale = 1.1;
      
      matrix.compose(
        position,
        new THREE.Quaternion().setFromEuler(rotation),
        new THREE.Vector3(scale, scale, scale)
      );
      
      instancesRef.current!.setMatrixAt(index, matrix);
    });
    
    instancesRef.current.instanceMatrix.needsUpdate = true;
  });

  const handlePointerOver = useCallback((event: any) => {
    event.stopPropagation();
    setHovered(event.instanceId);
    document.body.style.cursor = 'pointer';
  }, []);

  const handlePointerOut = useCallback(() => {
    setHovered(null);
    document.body.style.cursor = 'auto';
  }, []);

  const handleClick = useCallback((event: any) => {
    event.stopPropagation();
    const index = event.instanceId;
    setSelected(index);
    onItemClick(items[index]);
  }, [items, onItemClick]);

  return (
    <Instances
      ref={instancesRef}
      limit={items.length}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <boxGeometry args={[1, 1, 0.1]} />
      <MeshDistortMaterial
        color="#00D4AA"
        transparent
        opacity={0.8}
        distort={0.2}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
      
      {items.map((item, index) => (
        <Instance key={item.id} />
      ))}
    </Instances>
  );
}

// 3D Text labels for categories
function CategoryLabels({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(items.map(item => item.category)));
    return cats.map((cat, index) => ({
      name: cat,
      position: [
        Math.cos((index * Math.PI * 2) / cats.length) * 15,
        5,
        Math.sin((index * Math.PI * 2) / cats.length) * 15
      ] as [number, number, number],
      color: {
        frontend: '#3B82F6',
        backend: '#10B981',
        design: '#F59E0B',
        ai: '#8B5CF6',
        mobile: '#EF4444'
      }[cat as keyof typeof cats] || '#6B7280'
    }));
  }, [items]);

  return (
    <>
      {categories.map((category, index) => (
        <Float
          key={category.name}
          speed={0.5}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.8}
            height={0.1}
            position={category.position}
            castShadow
          >
            {category.name.toUpperCase()}
            <meshStandardMaterial 
              color={category.color}
              metalness={0.5}
              roughness={0.2}
              emissive={category.color}
              emissiveIntensity={0.1}
            />
          </Text3D>
        </Float>
      ))}
    </>
  );
}

// Particle system for ambient effects
function AmbientParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    
    const time = state.clock.elapsedTime;
    particlesRef.current.rotation.y = time * 0.05;
    
    // Gentle particle movement
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 1] += Math.sin(time + i) * 0.001;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00D4AA"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Camera controls and bounds
function CameraController() {
  const bounds = useBounds();
  const controlsRef = useRef<any>(null);

  return (
    <>
      <CameraControls
        ref={controlsRef}
        makeDefault
        minDistance={5}
        maxDistance={50}
        polarAngle={[0, Math.PI / 2]}
        azimuthAngle={[-Math.PI, Math.PI]}
        mouseButtons={{
          left: 1,
          right: 2,
          wheel: 16,
          middle: 8
        }}
        touches={{
          one: 32,
          two: 512,
          three: 256
        }}
        smoothTime={0.25}
        draggingSmoothTime={0.125}
      />
      
      <Bounds
        fit
        clip
        observe
        margin={1.5}
        onFit={() => {
          console.log('Camera bounds fitted');
        }}
      >
        {/* Bounds content will be provided by parent */}
      </Bounds>
    </>
  );
}

// Main scene content
function Scene3DContent({ 
  items, 
  selectedItem, 
  onItemSelect 
}: {
  items: GalleryItem[];
  selectedItem: GalleryItem | null;
  onItemSelect: (item: GalleryItem) => void;
}) {
  return (
    <>
      {/* Environment and lighting */}
      <Environment preset="city" />
      
      {/* Contact shadows for grounding */}
      <ContactShadows
        position={[0, -10, 0]}
        opacity={0.3}
        scale={50}
        blur={2}
        far={20}
      />

      {/* Camera and controls */}
      <CameraController />

      {/* Main gallery instances */}
      <GalleryInstances items={items} onItemClick={onItemSelect} />

      {/* Category labels */}
      <CategoryLabels items={items} />

      {/* Ambient particles */}
      <AmbientParticles />

      {/* Featured item highlight */}
      {selectedItem && (
        <Float speed={2} rotationIntensity={0.5}>
          <mesh position={[0, 8, 0]} scale={[2, 0.1, 2]}>
            <cylinderGeometry args={[2, 2, 0.1, 32]} />
            <meshStandardMaterial
              color={selectedItem.color}
              transparent
              opacity={0.3}
              emissive={selectedItem.color}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      )}
    </>
  );
}

// Item details panel
function ItemDetailsPanel({ 
  item, 
  onClose 
}: { 
  item: GalleryItem | null;
  onClose: () => void;
}) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        className="absolute top-4 right-4 z-20 w-80"
      >
        <Card variant="glass-dark" blur="xl" className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <Badge 
                variant="outline"
                style={{ borderColor: item.color, color: item.color }}
              >
                {item.category}
              </Badge>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              className="text-white/60 hover:text-white"
            >
              ×
            </Button>
          </div>

          <p className="text-white/70 text-sm mb-4">
            {item.description}
          </p>

          <div className="mb-4">
            <h4 className="text-white font-medium text-sm mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1">
              {item.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            {item.links.live && (
              <Button size="sm" variant="glass" className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </Button>
            )}
            {item.links.github && (
              <Button size="sm" variant="outline" className="flex-1">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
            {item.links.demo && (
              <Button size="sm" variant="secondary" className="flex-1">
                <Play className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

// Main component
export function InteractiveGallery3D({
  items,
  onItemSelect,
  className
}: InteractiveGallery3DProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [performanceData, setPerformanceData] = useState({ factor: 1, fps: 60 });

  const handleItemSelect = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
    onItemSelect?.(item);
  }, [onItemSelect]);

  const handlePerformanceChange = useCallback((data: { factor: number; fps: number }) => {
    setPerformanceData(data);
    
    // Log performance for monitoring
    if (data.fps < 30) {
      console.warn('3D Gallery performance degraded:', data);
    }
  }, []);

  return (
    <div className={cn('relative w-full h-[600px]', className)}>
      <Scene3DWrapper
        lighting="dramatic"
        performance={{
          adaptive: true,
          regress: true,
          dpr: [0.5, 2]
        }}
        camera={{
          position: [0, 5, 20],
          fov: 50
        }}
        onPerformanceChange={handlePerformanceChange}
        className="h-full"
      >
        <Scene3DContent
          items={items}
          selectedItem={selectedItem}
          onItemSelect={handleItemSelect}
        />
      </Scene3DWrapper>

      {/* Item details panel */}
      <ItemDetailsPanel
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Gallery info overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 left-4 z-20"
      >
        <Card variant="glass-dark" blur="sm" className="px-4 py-2">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span className="text-white/70">
                {items.length} Projects
              </span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-white/50 text-xs">
              Click to explore • Drag to navigate
            </span>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

export default InteractiveGallery3D;

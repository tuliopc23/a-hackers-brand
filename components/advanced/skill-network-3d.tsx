'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, MeshDistortMaterial, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  Zap, 
  Brain,
  Globe,
  Cpu,
  Monitor,
  Smartphone
} from 'lucide-react';
import { Card } from '@/glass-ui/src/components/card';
import { cn } from '@/lib/utils';

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'cloud' | 'ai' | 'mobile';
  level: number; // 0-1
  position: [number, number, number];
  connections: string[];
  icon: React.ElementType;
  color: string;
  description: string;
}

interface SkillNetwork3DProps {
  className?: string;
  skills?: Skill[];
  interactive?: boolean;
  autoRotate?: boolean;
  showConnections?: boolean;
  theme?: 'tech' | 'creative' | 'professional';
}

// 3D Skill Node Component
function SkillNode({ 
  skill, 
  isHovered, 
  isSelected,
  onHover, 
  onSelect 
}: {
  skill: Skill;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (skill: Skill | null) => void;
  onSelect: (skill: Skill) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Breathing animation based on skill level
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1 * skill.level;
      meshRef.current.scale.setScalar(breathe);
      
      // Rotation based on category
      meshRef.current.rotation.y += 0.005;
      
      if (isSelected) {
        meshRef.current.rotation.z += 0.02;
      }
    }
    
    if (glowRef.current) {
      // Glow intensity animation
      const glowIntensity = isHovered ? 1.5 : skill.level;
      glowRef.current.scale.setScalar(glowIntensity * 2);
    }
  });

  const nodeSize = 0.3 + skill.level * 0.5;

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.1}>
      <group position={skill.position}>
        {/* Glow effect */}
        <mesh
          ref={glowRef}
          onPointerEnter={() => onHover(skill)}
          onPointerLeave={() => onHover(null)}
          onClick={() => onSelect(skill)}
        >
          <sphereGeometry args={[nodeSize * 1.5, 16, 16]} />
          <meshBasicMaterial
            color={skill.color}
            transparent
            opacity={isHovered ? 0.3 : 0.1}
          />
        </mesh>
        
        {/* Main skill sphere */}
        <mesh
          ref={meshRef}
          onPointerEnter={() => onHover(skill)}
          onPointerLeave={() => onHover(null)}
          onClick={() => onSelect(skill)}
        >
          <sphereGeometry args={[nodeSize, 32, 32]} />
          <MeshDistortMaterial
            color={skill.color}
            distort={isHovered ? 0.4 : 0.2}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            emissive={skill.color}
            emissiveIntensity={isHovered ? 0.3 : skill.level * 0.2}
          />
        </mesh>
        
        {/* Skill level indicator ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[nodeSize * 1.2, nodeSize * 1.4, 32]} />
          <meshBasicMaterial
            color={skill.color}
            transparent
            opacity={skill.level * 0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* 3D Text label */}
        {isHovered && (
          <Html distanceFactor={10} position={[0, nodeSize + 0.5, 0]}>
            <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20 text-white text-sm font-semibold whitespace-nowrap">
              {skill.name}
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

// Connection lines between skills
function SkillConnections({ 
  skills, 
  hoveredSkill 
}: { 
  skills: Skill[];
  hoveredSkill: Skill | null;
}) {
  const connections = useMemo(() => {
    const lines: Array<{
      from: [number, number, number];
      to: [number, number, number];
      strength: number;
      color: string;
    }> = [];
    
    skills.forEach(skill => {
      skill.connections.forEach(connectionId => {
        const targetSkill = skills.find(s => s.id === connectionId);
        if (targetSkill) {
          const strength = Math.min(skill.level, targetSkill.level);
          lines.push({
            from: skill.position,
            to: targetSkill.position,
            strength,
            color: skill.color
          });
        }
      });
    });
    
    return lines;
  }, [skills]);

  return (
    <>
      {connections.map((connection, index) => {
        const isHighlighted = hoveredSkill && (
          skills.some(s => 
            s.position === connection.from && 
            (s.id === hoveredSkill.id || s.connections.includes(hoveredSkill.id))
          )
        );
        
        const points = [
          new THREE.Vector3(...connection.from),
          new THREE.Vector3(...connection.to)
        ];
        
        return (
          <line key={index}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={connection.color}
              transparent
              opacity={isHighlighted ? 0.8 : connection.strength * 0.5}
              linewidth={isHighlighted ? 3 : 1}
            />
          </line>
        );
      })}
    </>
  );
}

// Particle system for background
function SkillParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        transparent
        opacity={0.6}
        color="#00D4AA"
        sizeAttenuation={true}
      />
    </points>
  );
}

// Main 3D Scene
function SkillNetworkScene({ 
  skills, 
  showConnections, 
  autoRotate,
  onSkillHover,
  onSkillSelect,
  hoveredSkill,
  selectedSkill
}: {
  skills: Skill[];
  showConnections: boolean;
  autoRotate: boolean;
  onSkillHover: (skill: Skill | null) => void;
  onSkillSelect: (skill: Skill) => void;
  hoveredSkill: Skill | null;
  selectedSkill: Skill | null;
}) {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={0.8} color="#00D4AA" />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#3B82F6" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#EF4444" />

      {/* Background particles */}
      <SkillParticles />

      {/* Skill nodes */}
      {skills.map(skill => (
        <SkillNode
          key={skill.id}
          skill={skill}
          isHovered={hoveredSkill?.id === skill.id}
          isSelected={selectedSkill?.id === skill.id}
          onHover={onSkillHover}
          onSelect={onSkillSelect}
        />
      ))}

      {/* Skill connections */}
      {showConnections && (
        <SkillConnections skills={skills} hoveredSkill={hoveredSkill} />
      )}

      {/* Central core */}
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#00D4AA" />
      </mesh>

      {/* Camera controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={autoRotate}
        autoRotateSpeed={0.5}
        maxDistance={25}
        minDistance={5}
      />
    </>
  );
}

// Main component
export function SkillNetwork3D({
  className,
  skills: externalSkills,
  interactive = true,
  autoRotate = true,
  showConnections = true,
  theme = 'tech'
}: SkillNetwork3DProps) {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Default skills data
  const defaultSkills: Skill[] = useMemo(() => [
    // Frontend Skills
    {
      id: 'react',
      name: 'React',
      category: 'frontend',
      level: 0.95,
      position: [3, 2, 1],
      connections: ['typescript', 'nextjs', 'framer-motion'],
      icon: Code2,
      color: '#61DAFB',
      description: 'Advanced React development with hooks, context, and performance optimization'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'frontend',
      level: 0.9,
      position: [2, 3, -1],
      connections: ['react', 'nodejs', 'nextjs'],
      icon: Code2,
      color: '#3178C6',
      description: 'Type-safe JavaScript development with advanced TypeScript patterns'
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'frontend',
      level: 0.88,
      position: [4, 1, 2],
      connections: ['react', 'typescript', 'vercel'],
      icon: Globe,
      color: '#000000',
      description: 'Full-stack React framework with SSR, SSG, and API routes'
    },
    {
      id: 'framer-motion',
      name: 'Framer Motion',
      category: 'design',
      level: 0.85,
      position: [1, 4, 0],
      connections: ['react', 'design-systems'],
      icon: Zap,
      color: '#FF0055',
      description: 'Advanced animations and micro-interactions for React'
    },
    
    // Backend Skills
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'backend',
      level: 0.87,
      position: [-2, 2, 1],
      connections: ['typescript', 'express', 'postgresql'],
      icon: Database,
      color: '#339933',
      description: 'Server-side JavaScript with Express, APIs, and microservices'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'backend',
      level: 0.82,
      position: [-3, 1, -1],
      connections: ['nodejs', 'prisma'],
      icon: Database,
      color: '#336791',
      description: 'Advanced SQL database design, optimization, and scaling'
    },
    {
      id: 'graphql',
      name: 'GraphQL',
      category: 'backend',
      level: 0.78,
      position: [-1, 3, 2],
      connections: ['nodejs', 'react'],
      icon: Database,
      color: '#E10098',
      description: 'Query language for APIs with type-safe data fetching'
    },
    
    // Design Skills
    {
      id: 'design-systems',
      name: 'Design Systems',
      category: 'design',
      level: 0.92,
      position: [0, -2, 3],
      connections: ['figma', 'framer-motion', 'tailwind'],
      icon: Palette,
      color: '#FF6B6B',
      description: 'Component libraries, design tokens, and visual consistency'
    },
    {
      id: 'figma',
      name: 'Figma',
      category: 'design',
      level: 0.85,
      position: [2, -3, 1],
      connections: ['design-systems', 'ui-ux'],
      icon: Palette,
      color: '#F24E1E',
      description: 'UI/UX design, prototyping, and design-to-code workflows'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'design',
      level: 0.9,
      position: [1, -1, 2],
      connections: ['design-systems', 'react'],
      icon: Palette,
      color: '#06B6D4',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    
    // Cloud & DevOps
    {
      id: 'aws',
      name: 'AWS',
      category: 'cloud',
      level: 0.75,
      position: [-4, 0, 0],
      connections: ['docker', 'kubernetes'],
      icon: Cloud,
      color: '#FF9900',
      description: 'Cloud infrastructure, serverless, and containerization'
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'cloud',
      level: 0.8,
      position: [-3, -1, 2],
      connections: ['aws', 'kubernetes', 'nodejs'],
      icon: Cloud,
      color: '#2496ED',
      description: 'Containerization and microservices architecture'
    },
    {
      id: 'vercel',
      name: 'Vercel',
      category: 'cloud',
      level: 0.88,
      position: [-2, -2, -1],
      connections: ['nextjs', 'react'],
      icon: Cloud,
      color: '#000000',
      description: 'Frontend deployment and edge computing platform'
    },
    
    // AI & Advanced
    {
      id: 'webgl',
      name: 'WebGL',
      category: 'frontend',
      level: 0.72,
      position: [3, 0, -2],
      connections: ['threejs', 'react'],
      icon: Cpu,
      color: '#990000',
      description: '3D graphics and GPU-accelerated web applications'
    },
    {
      id: 'threejs',
      name: 'Three.js',
      category: 'frontend',
      level: 0.78,
      position: [4, -1, -1],
      connections: ['webgl', 'react'],
      icon: Cpu,
      color: '#000000',
      description: '3D visualization and interactive experiences'
    },
    {
      id: 'ai-integration',
      name: 'AI Integration',
      category: 'ai',
      level: 0.7,
      position: [0, 0, -3],
      connections: ['nodejs', 'python'],
      icon: Brain,
      color: '#7C3AED',
      description: 'LLM integration, AI-powered features, and machine learning'
    }
  ], []);

  const skills = externalSkills || defaultSkills;

  const handleSkillSelect = (skill: Skill) => {
    setSelectedSkill(selectedSkill?.id === skill.id ? null : skill);
  };

  // Get category stats
  const categoryStats = useMemo(() => {
    const stats: Record<string, { count: number; avgLevel: number; color: string }> = {};
    
    skills.forEach(skill => {
      if (!stats[skill.category]) {
        stats[skill.category] = { count: 0, avgLevel: 0, color: skill.color };
      }
      stats[skill.category].count++;
      stats[skill.category].avgLevel += skill.level;
    });
    
    Object.keys(stats).forEach(category => {
      stats[category].avgLevel /= stats[category].count;
    });
    
    return stats;
  }, [skills]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn('relative w-full h-[700px]', className)}
    >
      <Card
        variant="glass-dark"
        blur="xl"
        className="h-full overflow-hidden relative"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30"
            >
              <Brain className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg">Skill Network</h3>
              <p className="text-white/60 text-sm">
                Interactive 3D visualization of technical expertise
              </p>
            </div>
          </div>

          {/* Category Legend */}
          <div className="flex items-center gap-2">
            {Object.entries(categoryStats).map(([category, stats]) => (
              <div
                key={category}
                className="flex items-center gap-2 px-3 py-1 bg-black/40 rounded-lg border border-white/10"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: stats.color }}
                />
                <span className="text-white text-xs font-medium capitalize">
                  {category}
                </span>
                <span className="text-white/60 text-xs">
                  {stats.count}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [8, 8, 8], fov: 60 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
        >
          <SkillNetworkScene
            skills={skills}
            showConnections={showConnections}
            autoRotate={autoRotate}
            onSkillHover={setHoveredSkill}
            onSkillSelect={handleSkillSelect}
            hoveredSkill={hoveredSkill}
            selectedSkill={selectedSkill}
          />
        </Canvas>

        {/* Skill Details Panel */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="absolute top-20 right-4 w-80 p-6 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: selectedSkill.color }}
                  />
                  <h4 className="text-white font-bold text-lg">{selectedSkill.name}</h4>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-white/60 text-sm">Category:</span>
                  <span className="text-white ml-2 capitalize">{selectedSkill.category}</span>
                </div>

                <div>
                  <span className="text-white/60 text-sm">Proficiency Level:</span>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedSkill.level * 100}%` }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${selectedSkill.color}, ${selectedSkill.color}aa)`
                        }}
                      />
                    </div>
                    <span className="text-white text-sm font-semibold">
                      {(selectedSkill.level * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-white/60 text-sm">Description:</span>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                {selectedSkill.connections.length > 0 && (
                  <div>
                    <span className="text-white/60 text-sm">Connected Skills:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedSkill.connections.map(connectionId => {
                        const connectedSkill = skills.find(s => s.id === connectionId);
                        return connectedSkill ? (
                          <span
                            key={connectionId}
                            className="px-2 py-1 bg-white/10 rounded text-xs text-white/80"
                            style={{ borderLeft: `3px solid ${connectedSkill.color}` }}
                          >
                            {connectedSkill.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 z-10"
        >
          <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg p-4">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>🖱️ Drag to rotate • 🔍 Scroll to zoom • 👆 Click skills for details</span>
              <span className="text-emerald-400 font-medium">
                {skills.length} skills • {skills.reduce((acc, skill) => acc + skill.connections.length, 0)} connections
              </span>
            </div>
          </div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                scale: 0
              }}
              animate={{
                y: -50,
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
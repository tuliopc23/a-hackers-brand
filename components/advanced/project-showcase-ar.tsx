'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float, Text3D, useTexture } from '@react-three/drei';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import * as THREE from 'three';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2,
  Award,
  Calendar,
  Code,
  Users,
  Star,
  Eye,
  Zap
} from 'lucide-react';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { cn } from '@/lib/utils';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ai' | 'design' | 'tool';
  status: 'completed' | 'in-progress' | 'concept';
  featured: boolean;
  metrics: {
    stars?: number;
    views?: number;
    users?: number;
    performance?: number;
  };
  timeline: string;
  team?: string[];
  awards?: string[];
  position: [number, number, number];
  rotation: [number, number, number];
}

interface ProjectShowcaseARProps {
  className?: string;
  projects?: ProjectData[];
  autoRotate?: boolean;
  enableAR?: boolean;
  theme?: 'portfolio' | 'gallery' | 'museum';
  onProjectSelect?: (project: ProjectData) => void;
}

// 3D Project Card Component
function ProjectCard3D({ 
  project, 
  isSelected, 
  isHovered,
  onHover, 
  onSelect 
}: {
  project: ProjectData;
  isSelected: boolean;
  isHovered: boolean;
  onHover: (project: ProjectData | null) => void;
  onSelect: (project: ProjectData) => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const cardRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + project.position[0]) * 0.002;
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.003;
      
      if (isSelected) {
        // Highlight animation for selected project
        meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      }
    }
    
    if (cardRef.current && isHovered) {
      // Hover animation
      cardRef.current.scale.setScalar(1.05);
    } else if (cardRef.current) {
      cardRef.current.scale.setScalar(1);
    }
  });

  const cardWidth = 3;
  const cardHeight = 2;
  const cardDepth = 0.1;

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <group
        ref={meshRef}
        position={project.position}
        rotation={project.rotation}
        onPointerEnter={() => onHover(project)}
        onPointerLeave={() => onHover(null)}
        onClick={() => onSelect(project)}
      >
        {/* Main card */}
        <mesh ref={cardRef}>
          <boxGeometry args={[cardWidth, cardHeight, cardDepth]} />
          <meshStandardMaterial
            color={isSelected ? '#00D4AA' : '#1F2937'}
            metalness={0.3}
            roughness={0.4}
            emissive={isSelected ? '#00D4AA' : '#000000'}
            emissiveIntensity={isSelected ? 0.2 : 0}
          />
        </mesh>
        
        {/* Card content overlay */}
        <Html
          position={[0, 0, cardDepth / 2 + 0.01]}
          transform
          scale={0.1}
          style={{
            width: `${cardWidth * 100}px`,
            height: `${cardHeight * 100}px`,
            pointerEvents: 'none'
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white">
            {/* Project image placeholder */}
            <div className="w-full h-24 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg mb-3 flex items-center justify-center">
              <div className="text-2xl">🚀</div>
            </div>
            
            {/* Project title */}
            <h3 className="font-bold text-lg mb-2 truncate">{project.title}</h3>
            
            {/* Project description */}
            <p className="text-sm text-white/70 line-clamp-2 mb-3">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 3).map(tech => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-white/10 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-white/10 rounded text-xs">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            
            {/* Status badge */}
            <div className="flex items-center justify-between">
              <span className={cn(
                "px-2 py-1 rounded text-xs font-medium",
                project.status === 'completed' && "bg-green-500/20 text-green-400",
                project.status === 'in-progress' && "bg-yellow-500/20 text-yellow-400",
                project.status === 'concept' && "bg-blue-500/20 text-blue-400"
              )}>
                {project.status}
              </span>
              
              {project.featured && (
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              )}
            </div>
          </div>
        </Html>
        
        {/* Glow effect for featured projects */}
        {project.featured && (
          <mesh>
            <boxGeometry args={[cardWidth * 1.2, cardHeight * 1.2, cardDepth * 2]} />
            <meshBasicMaterial
              color="#FFD700"
              transparent
              opacity={0.1}
            />
          </mesh>
        )}
        
        {/* Selection ring */}
        {isSelected && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[cardWidth * 0.8, cardWidth * 0.9, 32]} />
            <meshBasicMaterial
              color="#00D4AA"
              transparent
              opacity={0.8}
              side={THREE.DoubleSide}
            />
          </mesh>
        )}
      </group>
    </Float>
  );
}

// Gallery Environment
function GalleryEnvironment() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#0F172A"
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 15, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#1E293B"
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Gallery walls */}
      <mesh position={[0, 5, -15]}>
        <planeGeometry args={[50, 20]} />
        <meshStandardMaterial
          color="#1E293B"
          transparent
          opacity={0.1}
        />
      </mesh>
    </>
  );
}

// Floating particles and effects
function EnvironmentalEffects() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 200;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
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
        size={0.05}
        transparent
        opacity={0.4}
        color="#00D4AA"
        sizeAttenuation={true}
      />
    </points>
  );
}

// Main 3D Scene
function ProjectShowcaseScene({ 
  projects, 
  autoRotate,
  selectedProject,
  hoveredProject,
  onProjectHover,
  onProjectSelect
}: {
  projects: ProjectData[];
  autoRotate: boolean;
  selectedProject: ProjectData | null;
  hoveredProject: ProjectData | null;
  onProjectHover: (project: ProjectData | null) => void;
  onProjectSelect: (project: ProjectData) => void;
}) {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 15, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 10, 0]} intensity={0.8} color="#00D4AA" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#3B82F6"
        castShadow
      />
      
      {/* Environment */}
      <GalleryEnvironment />
      <EnvironmentalEffects />
      
      {/* Project cards */}
      {projects.map(project => (
        <ProjectCard3D
          key={project.id}
          project={project}
          isSelected={selectedProject?.id === project.id}
          isHovered={hoveredProject?.id === project.id}
          onHover={onProjectHover}
          onSelect={onProjectSelect}
        />
      ))}
      
      {/* Gallery title */}
      <Float speed={0.5} rotationIntensity={0.1}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={1}
          height={0.2}
          position={[0, 8, -10]}
          rotation={[0, 0, 0]}
        >
          Project Gallery
          <meshStandardMaterial color="#00D4AA" metalness={0.5} roughness={0.2} />
        </Text3D>
      </Float>
      
      {/* Camera controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={autoRotate}
        autoRotateSpeed={0.2}
        maxDistance={30}
        minDistance={8}
        maxPolarAngle={Math.PI / 2.2}
      />
    </>
  );
}

// Main component
export function ProjectShowcaseAR({
  className,
  projects: externalProjects,
  autoRotate = true,
  enableAR = false,
  theme = 'portfolio',
  onProjectSelect
}: ProjectShowcaseARProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [hoveredProject, setHoveredProject] = useState<ProjectData | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoRotate);

  // Default projects data
  const defaultProjects: ProjectData[] = React.useMemo(() => [
    {
      id: 'glass-ui',
      title: 'Glass UI Library',
      description: 'Advanced React component library with liquid glass morphism effects',
      longDescription: 'A comprehensive design system featuring cutting-edge glass morphism effects, performance-optimized animations, and accessibility-first components.',
      image: '/projects/glass-ui.jpg',
      demoUrl: 'https://glass-ui.tuliocunha.dev',
      githubUrl: 'https://github.com/tuliopc23/glass-ui',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      category: 'design',
      status: 'completed',
      featured: true,
      metrics: { stars: 245, views: 15000, users: 1200 },
      timeline: '2023-2024',
      team: ['Tulio Cunha'],
      awards: ['Best Design System 2024'],
      position: [-4, 2, 0],
      rotation: [0, 0.3, 0]
    },
    {
      id: 'neural-visualizer',
      title: 'Neural Network Visualizer',
      description: '3D interactive neural network visualization with WebGL acceleration',
      longDescription: 'Real-time 3D visualization of neural networks with WebGL acceleration, supporting various architectures and training visualization.',
      image: '/projects/neural-viz.jpg',
      demoUrl: 'https://neural-viz.tuliocunha.dev',
      githubUrl: 'https://github.com/tuliopc23/neural-visualizer',
      technologies: ['Three.js', 'WebGL', 'React', 'WebAssembly'],
      category: 'ai',
      status: 'completed',
      featured: true,
      metrics: { stars: 189, views: 8500, performance: 98 },
      timeline: '2024',
      team: ['Tulio Cunha', 'AI Research Team'],
      position: [0, 3, 2],
      rotation: [0, 0, 0]
    },
    {
      id: 'terminal-fusion',
      title: 'Terminal Fusion',
      description: 'Liquid glass terminal interface with AI-powered command suggestions',
      longDescription: 'Revolutionary terminal interface combining liquid glass aesthetics with AI-powered command suggestions and real-time performance monitoring.',
      image: '/projects/terminal.jpg',
      demoUrl: 'https://terminal.tuliocunha.dev',
      githubUrl: 'https://github.com/tuliopc23/terminal-fusion',
      technologies: ['React', 'AI/ML', 'WebAssembly', 'Framer Motion'],
      category: 'tool',
      status: 'in-progress',
      featured: true,
      metrics: { stars: 156, views: 6200 },
      timeline: '2024',
      team: ['Tulio Cunha'],
      position: [4, 1, -1],
      rotation: [0, -0.3, 0]
    },
    {
      id: 'portfolio-3d',
      title: '3D Portfolio Experience',
      description: 'Immersive 3D portfolio with WebXR support and spatial computing',
      longDescription: 'Next-generation portfolio experience leveraging WebXR, spatial computing, and advanced 3D graphics for an unforgettable showcase.',
      image: '/projects/portfolio-3d.jpg',
      demoUrl: 'https://3d.tuliocunha.dev',
      githubUrl: 'https://github.com/tuliopc23/portfolio-3d',
      technologies: ['WebXR', 'Three.js', 'Spatial Computing', 'WebGL'],
      category: 'web',
      status: 'concept',
      featured: false,
      metrics: { views: 3100 },
      timeline: '2024-2025',
      team: ['Tulio Cunha'],
      position: [-2, 0, 3],
      rotation: [0, 0.5, 0]
    },
    {
      id: 'design-system',
      title: 'Quantum Design System',
      description: 'Enterprise design system with quantum computing-inspired aesthetics',
      longDescription: 'Comprehensive design system for enterprise applications featuring quantum computing-inspired visual language and advanced component architecture.',
      image: '/projects/design-system.jpg',
      technologies: ['Design Tokens', 'Figma', 'React', 'Storybook'],
      category: 'design',
      status: 'completed',
      featured: false,
      metrics: { users: 500, performance: 95 },
      timeline: '2023',
      team: ['Tulio Cunha', 'Design Team'],
      position: [2, -1, 2],
      rotation: [0, -0.2, 0]
    },
    {
      id: 'ai-dashboard',
      title: 'AI Performance Dashboard',
      description: 'Real-time AI model performance monitoring with predictive analytics',
      longDescription: 'Advanced dashboard for monitoring AI model performance with real-time metrics, predictive analytics, and automated optimization suggestions.',
      image: '/projects/ai-dashboard.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'WebSocket'],
      category: 'ai',
      status: 'completed',
      featured: false,
      metrics: { users: 800, performance: 92 },
      timeline: '2023-2024',
      team: ['Tulio Cunha', 'ML Engineers'],
      position: [-1, -2, -2],
      rotation: [0, 0.1, 0]
    }
  ], []);

  const projects = externalProjects || defaultProjects;

  const handleProjectSelect = (project: ProjectData) => {
    const newSelection = selectedProject?.id === project.id ? null : project;
    setSelectedProject(newSelection);
    onProjectSelect?.(project);
  };

  const toggleAutoRotate = () => {
    setIsPlaying(!isPlaying);
  };

  const resetView = () => {
    setSelectedProject(null);
    setHoveredProject(null);
  };

  // Category statistics
  const categoryStats = React.useMemo(() => {
    const stats: Record<string, number> = {};
    projects.forEach(project => {
      stats[project.category] = (stats[project.category] || 0) + 1;
    });
    return stats;
  }, [projects]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn('relative w-full h-[800px]', className)}
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
              animate={{ rotateY: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30"
            >
              <Award className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg">Project Showcase</h3>
              <p className="text-white/60 text-sm">
                Interactive 3D gallery • {projects.filter(p => p.featured).length} featured projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="glass"
              onClick={toggleAutoRotate}
              className="flex items-center gap-2"
            >
              {isPlaying ? (
                <><Pause className="w-4 h-4" /> Pause</>
              ) : (
                <><Play className="w-4 h-4" /> Rotate</>
              )}
            </Button>
            
            <Button size="sm" variant="glass" onClick={resetView}>
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [0, 5, 15], fov: 60 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
          shadows
        >
          <ProjectShowcaseScene
            projects={projects}
            autoRotate={isPlaying}
            selectedProject={selectedProject}
            hoveredProject={hoveredProject}
            onProjectHover={setHoveredProject}
            onProjectSelect={handleProjectSelect}
          />
        </Canvas>

        {/* Project Details Panel */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 400 }}
              className="absolute top-20 right-4 w-96 max-h-[calc(100%-120px)] overflow-y-auto bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {selectedProject.featured && (
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    )}
                    <h4 className="text-white font-bold text-xl">{selectedProject.title}</h4>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white/60 hover:text-white transition-colors text-xl"
                  >
                    ×
                  </button>
                </div>

                {/* Project image placeholder */}
                <div className="w-full h-32 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-white/80 font-semibold mb-2">Description</h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-white/80 font-semibold mb-2">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-white/80 font-semibold mb-2">Status</h5>
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        selectedProject.status === 'completed' && "bg-green-500/20 text-green-400",
                        selectedProject.status === 'in-progress' && "bg-yellow-500/20 text-yellow-400",
                        selectedProject.status === 'concept' && "bg-blue-500/20 text-blue-400"
                      )}>
                        {selectedProject.status}
                      </span>
                    </div>
                    
                    <div>
                      <h5 className="text-white/80 font-semibold mb-2">Timeline</h5>
                      <span className="text-white/70 text-sm">{selectedProject.timeline}</span>
                    </div>
                  </div>

                  {Object.keys(selectedProject.metrics).length > 0 && (
                    <div>
                      <h5 className="text-white/80 font-semibold mb-2">Metrics</h5>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.metrics.stars && (
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-white text-sm">{selectedProject.metrics.stars}</span>
                          </div>
                        )}
                        {selectedProject.metrics.views && (
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-blue-400" />
                            <span className="text-white text-sm">{selectedProject.metrics.views.toLocaleString()}</span>
                          </div>
                        )}
                        {selectedProject.metrics.users && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-green-400" />
                            <span className="text-white text-sm">{selectedProject.metrics.users}</span>
                          </div>
                        )}
                        {selectedProject.metrics.performance && (
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-emerald-400" />
                            <span className="text-white text-sm">{selectedProject.metrics.performance}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedProject.team && (
                    <div>
                      <h5 className="text-white/80 font-semibold mb-2">Team</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.team.map(member => (
                          <span key={member} className="text-white/70 text-sm">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.awards && (
                    <div>
                      <h5 className="text-white/80 font-semibold mb-2">Awards</h5>
                      <div className="space-y-1">
                        {selectedProject.awards.map(award => (
                          <div key={award} className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-400" />
                            <span className="text-white/70 text-sm">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    {selectedProject.demoUrl && (
                      <Button
                        size="sm"
                        variant="glass"
                        className="flex items-center gap-2"
                        onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button
                        size="sm"
                        variant="glass"
                        className="flex items-center gap-2"
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
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
            <div className="flex items-center justify-between text-sm">
              <div className="text-white/70">
                🖱️ Drag to orbit • 🔍 Scroll to zoom • 👆 Click projects for details
              </div>
              <div className="flex items-center gap-4 text-white/60">
                {Object.entries(categoryStats).map(([category, count]) => (
                  <span key={category} className="capitalize">
                    {category}: {count}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
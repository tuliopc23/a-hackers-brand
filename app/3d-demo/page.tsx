'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InteractiveGallery3D } from '@/components/3d/interactive-gallery-3d';
import { Scene3DWrapper } from '@/components/3d/3d-scene-wrapper';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { Badge } from '@/glass-ui/src/components/badge';
import { cn } from '@/lib/utils';
import { 
  Cube, 
  Zap, 
  Monitor, 
  Cpu, 
  Palette, 
  Brain,
  Smartphone,
  BarChart3,
  Settings,
  Info
} from 'lucide-react';

// Sample gallery data
const sampleGalleryItems = [
  {
    id: '1',
    title: 'Neural Dashboard',
    description: 'Real-time AI analytics dashboard with machine learning insights and predictive modeling capabilities.',
    category: 'ai' as const,
    color: '#8B5CF6',
    technologies: ['React', 'TensorFlow.js', 'WebGL', 'Python'],
    links: {
      live: 'https://neural-dashboard.demo',
      github: 'https://github.com/user/neural-dashboard',
      demo: 'https://demo.neural-dashboard.com'
    },
    featured: true
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin panel.',
    category: 'frontend' as const,
    color: '#3B82F6',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    links: {
      live: 'https://ecommerce.demo',
      github: 'https://github.com/user/ecommerce'
    }
  },
  {
    id: '3',
    title: 'Microservices API',
    description: 'Scalable microservices architecture with Docker, Kubernetes, and service mesh implementation.',
    category: 'backend' as const,
    color: '#10B981',
    technologies: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
    links: {
      github: 'https://github.com/user/microservices-api',
      demo: 'https://api-docs.demo.com'
    }
  },
  {
    id: '4',
    title: 'Design System',
    description: 'Comprehensive design system with component library, tokens, and design guidelines.',
    category: 'design' as const,
    color: '#F59E0B',
    technologies: ['Figma', 'Storybook', 'Tailwind', 'TypeScript'],
    links: {
      live: 'https://designsystem.demo',
      github: 'https://github.com/user/design-system'
    }
  },
  {
    id: '5',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    category: 'mobile' as const,
    color: '#EF4444',
    technologies: ['React Native', 'Firebase', 'Biometrics', 'Encryption'],
    links: {
      demo: 'https://banking-demo.app'
    }
  },
  {
    id: '6',
    title: 'IoT Dashboard',
    description: 'Real-time IoT device monitoring with data visualization and predictive maintenance.',
    category: 'frontend' as const,
    color: '#06B6D4',
    technologies: ['Vue.js', 'Socket.io', 'InfluxDB', 'MQTT'],
    links: {
      live: 'https://iot-dashboard.demo',
      github: 'https://github.com/user/iot-dashboard'
    }
  }
];

// Performance metrics component
function PerformanceMetrics({ 
  data 
}: { 
  data: { factor: number; fps: number } 
}) {
  return (
    <Card variant="glass-dark" blur="sm" className="p-4">
      <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-emerald-400" />
        Performance Metrics
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-white/70 text-xs">Frame Rate</span>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                data.fps >= 55 && "bg-green-400",
                data.fps >= 30 && data.fps < 55 && "bg-yellow-400",
                data.fps < 30 && "bg-red-400"
              )}
            />
            <span className="text-white font-mono text-xs">
              {data.fps} fps
            </span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-white/70 text-xs">Quality Factor</span>
          <span className="text-white font-mono text-xs">
            {(data.factor * 100).toFixed(0)}%
          </span>
        </div>
        
        <div className="w-full bg-white/10 rounded-full h-1">
          <div
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              data.factor >= 0.8 && "bg-green-400",
              data.factor >= 0.5 && data.factor < 0.8 && "bg-yellow-400",
              data.factor < 0.5 && "bg-red-400"
            )}
            style={{ width: `${data.factor * 100}%` }}
          />
        </div>
      </div>
    </Card>
  );
}

// Demo controls component
function DemoControls({
  selectedLighting,
  onLightingChange,
  adaptivePerformance,
  onAdaptiveToggle
}: {
  selectedLighting: 'minimal' | 'standard' | 'dramatic';
  onLightingChange: (lighting: 'minimal' | 'standard' | 'dramatic') => void;
  adaptivePerformance: boolean;
  onAdaptiveToggle: () => void;
}) {
  return (
    <Card variant="glass-dark" blur="sm" className="p-4">
      <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
        <Settings className="w-4 h-4 text-emerald-400" />
        Scene Controls
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-white/70 text-xs block mb-2">Lighting Mode</label>
          <div className="flex gap-1">
            {(['minimal', 'standard', 'dramatic'] as const).map((mode) => (
              <Button
                key={mode}
                size="sm"
                variant={selectedLighting === mode ? 'glass' : 'ghost'}
                onClick={() => onLightingChange(mode)}
                className="text-xs capitalize"
              >
                {mode}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-white/70 text-xs">Adaptive Performance</label>
          <Button
            size="sm"
            variant={adaptivePerformance ? 'glass' : 'outline'}
            onClick={onAdaptiveToggle}
            className="text-xs"
          >
            {adaptivePerformance ? 'ON' : 'OFF'}
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Simple 3D test scene
function Test3DScene() {
  return (
    <>
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00D4AA" transparent opacity={0.8} />
      </mesh>
      
      <mesh position={[4, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <cylinderGeometry args={[1, 1, 2, 8]} />
        <meshStandardMaterial color="#3B82F6" wireframe />
      </mesh>
      
      <mesh position={[-4, 0, 0]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#EF4444" metalness={0.8} roughness={0.2} />
      </mesh>
    </>
  );
}

export default function ThreeDDemoPage() {
  const [selectedItem, setSelectedItem] = useState<typeof sampleGalleryItems[0] | null>(null);
  const [performanceData, setPerformanceData] = useState({ factor: 1, fps: 60 });
  const [lighting, setLighting] = useState<'minimal' | 'standard' | 'dramatic'>('standard');
  const [adaptivePerformance, setAdaptivePerformance] = useState(true);
  const [currentDemo, setCurrentDemo] = useState<'gallery' | 'scene'>('gallery');

  const handleItemSelect = (item: typeof sampleGalleryItems[0]) => {
    setSelectedItem(item);
    console.log('Selected item:', item);
  };

  const handlePerformanceChange = (data: { factor: number; fps: number }) => {
    setPerformanceData(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-emerald-900/20 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Cube className="w-8 h-8 text-emerald-400" />
            3D Components Demo
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Interactive 3D components built with React Three Fiber and Drei, 
            featuring performance optimization, adaptive rendering, and Web Vitals integration.
          </p>
        </motion.div>

        {/* Demo selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-2"
        >
          <Button
            variant={currentDemo === 'gallery' ? 'glass' : 'outline'}
            onClick={() => setCurrentDemo('gallery')}
            className="flex items-center gap-2"
          >
            <Palette className="w-4 h-4" />
            Interactive Gallery
          </Button>
          <Button
            variant={currentDemo === 'scene' ? 'glass' : 'outline'}
            onClick={() => setCurrentDemo('scene')}
            className="flex items-center gap-2"
          >
            <Cube className="w-4 h-4" />
            Test Scene
          </Button>
        </motion.div>

        {/* Main content area */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* 3D Scene - spans 3 columns on xl screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="xl:col-span-3"
          >
            {currentDemo === 'gallery' ? (
              <InteractiveGallery3D
                items={sampleGalleryItems}
                onItemSelect={handleItemSelect}
                className="h-[700px]"
              />
            ) : (
              <Scene3DWrapper
                lighting={lighting}
                performance={{
                  adaptive: adaptivePerformance,
                  regress: true,
                  dpr: [0.5, 2]
                }}
                camera={{
                  position: [0, 0, 10],
                  fov: 60
                }}
                onPerformanceChange={handlePerformanceChange}
                className="h-[700px]"
              >
                <Test3DScene />
              </Scene3DWrapper>
            )}
          </motion.div>

          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Performance metrics */}
            <PerformanceMetrics data={performanceData} />

            {/* Demo controls */}
            {currentDemo === 'scene' && (
              <DemoControls
                selectedLighting={lighting}
                onLightingChange={setLighting}
                adaptivePerformance={adaptivePerformance}
                onAdaptiveToggle={() => setAdaptivePerformance(!adaptivePerformance)}
              />
            )}

            {/* Selected item info */}
            {currentDemo === 'gallery' && selectedItem && (
              <Card variant="glass-dark" blur="sm" className="p-4">
                <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-emerald-400" />
                  Selected Project
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium text-sm">{selectedItem.title}</h4>
                    <Badge 
                      variant="outline" 
                      style={{ borderColor: selectedItem.color, color: selectedItem.color }}
                      className="mt-1"
                    >
                      {selectedItem.category}
                    </Badge>
                  </div>
                  
                  <p className="text-white/70 text-xs">{selectedItem.description}</p>
                  
                  <div>
                    <h5 className="text-white/80 text-xs font-medium mb-1">Technologies</h5>
                    <div className="flex flex-wrap gap-1">
                      {selectedItem.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {selectedItem.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{selectedItem.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Tech stack info */}
            <Card variant="glass-dark" blur="sm" className="p-4">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                Tech Stack
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Monitor className="w-3 h-3 text-blue-400" />
                  <span className="text-white/70">React Three Fiber</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Cpu className="w-3 h-3 text-green-400" />
                  <span className="text-white/70">Drei Helpers</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Brain className="w-3 h-3 text-purple-400" />
                  <span className="text-white/70">Adaptive Performance</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Smartphone className="w-3 h-3 text-red-400" />
                  <span className="text-white/70">WebGL Optimization</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Features overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Card variant="glass-dark" blur="sm" className="p-4 text-center">
            <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold text-sm mb-1">Performance Optimized</h3>
            <p className="text-white/60 text-xs">
              Adaptive rendering, instanced meshes, and demand-based frame loops
            </p>
          </Card>
          
          <Card variant="glass-dark" blur="sm" className="p-4 text-center">
            <Monitor className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold text-sm mb-1">Responsive Design</h3>
            <p className="text-white/60 text-xs">
              Works seamlessly across desktop, tablet, and mobile devices
            </p>
          </Card>
          
          <Card variant="glass-dark" blur="sm" className="p-4 text-center">
            <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold text-sm mb-1">Web Vitals Ready</h3>
            <p className="text-white/60 text-xs">
              Integrated with performance monitoring and Core Web Vitals tracking
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

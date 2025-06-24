'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Activity, 
  Settings, 
  Play, 
  Pause, 
  RotateCcw,
  Maximize2,
  Download,
  Share2
} from 'lucide-react';
import * as THREE from 'three';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { cn } from '@/lib/utils';

interface NeuralNode {
  id: string;
  position: [number, number, number];
  activation: number;
  layer: number;
  type: 'input' | 'hidden' | 'output';
  connections: string[];
}

interface NeuralConnection {
  from: string;
  to: string;
  weight: number;
  active: boolean;
}

interface NeuralNetworkVisualizerProps {
  className?: string;
  nodes?: NeuralNode[];
  connections?: NeuralConnection[];
  isTraining?: boolean;
  showLabels?: boolean;
  interactive?: boolean;
  theme?: 'quantum' | 'neural' | 'cyberpunk';
  onNodeClick?: (node: NeuralNode) => void;
  onConnectionClick?: (connection: NeuralConnection) => void;
}

// 3D Neural Node Component
function NeuralNodeMesh({ 
  node, 
  isActive, 
  theme, 
  onClick 
}: { 
  node: NeuralNode; 
  isActive: boolean; 
  theme: string;
  onClick?: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  const nodeColor = useMemo(() => {
    const baseColors = {
      quantum: {
        input: '#00D4AA',
        hidden: '#3B82F6',
        output: '#EF4444'
      },
      neural: {
        input: '#10B981',
        hidden: '#8B5CF6',
        output: '#F59E0B'
      },
      cyberpunk: {
        input: '#FF0080',
        hidden: '#00FFFF',
        output: '#FFFF00'
      }
    };
    return baseColors[theme as keyof typeof baseColors]?.[node.type] || '#6B7280';
  }, [theme, node.type]);

  useFrame((state) => {
    if (meshRef.current) {
      // Pulsing animation based on activation
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2 * node.activation;
      meshRef.current.scale.setScalar(pulse);
      
      // Rotation animation
      meshRef.current.rotation.y += 0.01;
      
      // Active state glow
      if (isActive) {
        meshRef.current.rotation.z += 0.05;
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.2}>
      <mesh
        ref={meshRef}
        position={node.position}
        onClick={onClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[0.3 + node.activation * 0.2, 32, 32]} />
        <MeshDistortMaterial
          color={nodeColor}
          distort={hovered ? 0.4 : 0.2}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={nodeColor}
          emissiveIntensity={hovered ? 0.5 : node.activation * 0.3}
        />
      </mesh>
      
      {/* Node glow effect */}
      <Sphere args={[0.5 + node.activation * 0.3]} position={node.position}>
        <meshBasicMaterial
          color={nodeColor}
          transparent
          opacity={0.1 + node.activation * 0.2}
        />
      </Sphere>
    </Float>
  );
}

// 3D Connection Line Component
function ConnectionLine({ 
  connection, 
  nodes, 
  theme 
}: { 
  connection: NeuralConnection; 
  nodes: NeuralNode[];
  theme: string;
}) {
  const lineRef = useRef<THREE.Line>(null);
  const fromNode = nodes.find(n => n.id === connection.from);
  const toNode = nodes.find(n => n.id === connection.to);
  
  if (!fromNode || !toNode) return null;

  const points = [
    new THREE.Vector3(...fromNode.position),
    new THREE.Vector3(...toNode.position)
  ];
  
  const lineColor = connection.active ? '#00D4AA' : '#374151';
  const lineOpacity = Math.abs(connection.weight) * 0.8 + 0.2;
  
  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color={lineColor}
        transparent
        opacity={lineOpacity}
        linewidth={Math.abs(connection.weight) * 3 + 1}
      />
    </line>
  );
}

// Neural Network Scene
function NeuralNetworkScene({ 
  nodes, 
  connections, 
  isTraining, 
  theme, 
  onNodeClick 
}: {
  nodes: NeuralNode[];
  connections: NeuralConnection[];
  isTraining: boolean;
  theme: string;
  onNodeClick?: (node: NeuralNode) => void;
}) {
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
  
  // Simulate neural network training
  useEffect(() => {
    if (!isTraining) return;
    
    const interval = setInterval(() => {
      // Randomly activate nodes to simulate data flow
      const randomNodes = nodes
        .filter(() => Math.random() > 0.7)
        .map(node => node.id);
      setActiveNodes(new Set(randomNodes));
    }, 500);
    
    return () => clearInterval(interval);
  }, [isTraining, nodes]);

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Directional lights */}
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#00D4AA" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3B82F6" />
      
      {/* Point lights for drama */}
      <pointLight position={[0, 0, 10]} intensity={1} color="#FFFFFF" />
      
      {/* Neural nodes */}
      {nodes.map((node) => (
        <NeuralNodeMesh
          key={node.id}
          node={node}
          isActive={activeNodes.has(node.id)}
          theme={theme}
          onClick={() => onNodeClick?.(node)}
        />
      ))}
      
      {/* Neural connections */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={`${connection.from}-${connection.to}-${index}`}
          connection={connection}
          nodes={nodes}
          theme={theme}
        />
      ))}
      
      {/* Background particles */}
      <Points count={1000} />
      
      {/* 3D Text labels */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        position={[-8, 4, 0]}
      >
        Neural Network
        <meshNormalMaterial />
      </Text3D>
      
      {/* Camera controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
}

// Floating particles for background effect
function Points({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.6}
        color="#00D4AA"
        sizeAttenuation={true}
      />
    </points>
  );
}

// Main Neural Network Visualizer Component
export function NeuralNetworkVisualizer({
  className,
  nodes: externalNodes,
  connections: externalConnections,
  isTraining: externalIsTraining,
  showLabels = true,
  interactive = true,
  theme = 'quantum',
  onNodeClick,
  onConnectionClick
}: NeuralNetworkVisualizerProps) {
  const [isTraining, setIsTraining] = useState(externalIsTraining ?? false);
  const [selectedNode, setSelectedNode] = useState<NeuralNode | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Generate default neural network if none provided
  const defaultNodes = useMemo(() => {
    const nodes: NeuralNode[] = [];
    
    // Input layer
    for (let i = 0; i < 4; i++) {
      nodes.push({
        id: `input-${i}`,
        position: [-6, i * 2 - 3, 0],
        activation: Math.random(),
        layer: 0,
        type: 'input',
        connections: []
      });
    }
    
    // Hidden layers
    for (let layer = 1; layer <= 2; layer++) {
      for (let i = 0; i < 6; i++) {
        nodes.push({
          id: `hidden-${layer}-${i}`,
          position: [-2 + layer * 2, i * 1.5 - 3.75, Math.random() * 2 - 1],
          activation: Math.random(),
          layer,
          type: 'hidden',
          connections: []
        });
      }
    }
    
    // Output layer
    for (let i = 0; i < 3; i++) {
      nodes.push({
        id: `output-${i}`,
        position: [6, i * 2 - 2, 0],
        activation: Math.random(),
        layer: 3,
        type: 'output',
        connections: []
      });
    }
    
    return nodes;
  }, []);

  const defaultConnections = useMemo(() => {
    const connections: NeuralConnection[] = [];
    const nodes = externalNodes || defaultNodes;
    
    // Connect all nodes to next layer
    for (let i = 0; i < 3; i++) {
      const currentLayer = nodes.filter(n => n.layer === i);
      const nextLayer = nodes.filter(n => n.layer === i + 1);
      
      currentLayer.forEach(fromNode => {
        nextLayer.forEach(toNode => {
          connections.push({
            from: fromNode.id,
            to: toNode.id,
            weight: (Math.random() - 0.5) * 2,
            active: Math.random() > 0.5
          });
        });
      });
    }
    
    return connections;
  }, [externalNodes, defaultNodes]);

  const nodes = externalNodes || defaultNodes;
  const connections = externalConnections || defaultConnections;

  const handleNodeClick = (node: NeuralNode) => {
    setSelectedNode(node);
    onNodeClick?.(node);
  };

  const toggleTraining = () => {
    setIsTraining(!isTraining);
  };

  const resetNetwork = () => {
    setIsTraining(false);
    setSelectedNode(null);
  };

  const exportNetwork = () => {
    const data = { nodes, connections };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'neural-network.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'relative',
        isFullscreen ? 'fixed inset-0 z-50' : 'w-full h-[600px]',
        className
      )}
    >
      <Card
        variant="glass-dark"
        blur="xl"
        className={cn(
          'overflow-hidden relative',
          isFullscreen ? 'h-full rounded-none' : 'h-full'
        )}
      >
        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: isTraining ? 360 : 0 }}
              transition={{ duration: 2, repeat: isTraining ? Infinity : 0, ease: 'linear' }}
              className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30"
            >
              <Brain className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg">Neural Network</h3>
              <p className="text-white/60 text-sm">
                {nodes.length} nodes • {connections.length} connections
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="glass"
              onClick={toggleTraining}
              className="flex items-center gap-2"
            >
              {isTraining ? (
                <><Pause className="w-4 h-4" /> Pause</>
              ) : (
                <><Play className="w-4 h-4" /> Train</>
              )}
            </Button>
            
            <Button size="sm" variant="glass" onClick={resetNetwork}>
              <RotateCcw className="w-4 h-4" />
            </Button>
            
            <Button size="sm" variant="glass" onClick={exportNetwork}>
              <Download className="w-4 h-4" />
            </Button>
            
            <Button size="sm" variant="glass" onClick={() => setIsFullscreen(!isFullscreen)}>
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
        >
          <NeuralNetworkScene
            nodes={nodes}
            connections={connections}
            isTraining={isTraining}
            theme={theme}
            onNodeClick={handleNodeClick}
          />
        </Canvas>

        {/* Node Information Panel */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="absolute top-20 right-4 w-72 p-4 bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-semibold">Node Information</h4>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedNode(null)}
                  className="text-white/60 hover:text-white"
                >
                  ×
                </Button>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-white/60">ID:</span>
                  <span className="text-white ml-2 font-mono">{selectedNode.id}</span>
                </div>
                <div>
                  <span className="text-white/60">Type:</span>
                  <span className={cn(
                    "ml-2 px-2 py-1 rounded text-xs font-medium",
                    selectedNode.type === 'input' && "bg-emerald-500/20 text-emerald-400",
                    selectedNode.type === 'hidden' && "bg-blue-500/20 text-blue-400",
                    selectedNode.type === 'output' && "bg-red-500/20 text-red-400"
                  )}>
                    {selectedNode.type}
                  </span>
                </div>
                <div>
                  <span className="text-white/60">Layer:</span>
                  <span className="text-white ml-2">{selectedNode.layer}</span>
                </div>
                <div>
                  <span className="text-white/60">Activation:</span>
                  <div className="mt-1">
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedNode.activation * 100}%` }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                      />
                    </div>
                    <span className="text-white text-xs">
                      {(selectedNode.activation * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-white/60">Position:</span>
                  <div className="text-white font-mono text-xs mt-1">
                    x: {selectedNode.position[0].toFixed(1)}<br/>
                    y: {selectedNode.position[1].toFixed(1)}<br/>
                    z: {selectedNode.position[2].toFixed(1)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Training Status */}
        {isTraining && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 z-10"
          >
            <div className="bg-black/60 backdrop-blur-xl border border-emerald-500/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Activity className="w-5 h-5 text-emerald-400" />
                </motion.div>
                <span className="text-emerald-400 font-semibold">Training in Progress</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-white/60">Epoch:</span>
                  <span className="text-white ml-2 font-mono">247</span>
                </div>
                <div>
                  <span className="text-white/60">Loss:</span>
                  <span className="text-white ml-2 font-mono">0.0342</span>
                </div>
                <div>
                  <span className="text-white/60">Accuracy:</span>
                  <span className="text-white ml-2 font-mono">94.7%</span>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quantum particles background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                y: [null, -100],
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
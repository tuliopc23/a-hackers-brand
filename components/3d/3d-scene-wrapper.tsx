'use client';

import React, { Suspense, useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Preload, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertTriangle, Info } from 'lucide-react';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { cn } from '@/lib/utils';

interface Scene3DWrapperProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
    near?: number;
    far?: number;
  };
  performance?: {
    adaptive?: boolean;
    regress?: boolean;
    dpr?: [number, number];
    fps?: number;
  };
  controls?: {
    enableZoom?: boolean;
    enablePan?: boolean;
    enableRotate?: boolean;
    autoRotate?: boolean;
  };
  lighting?: 'minimal' | 'standard' | 'dramatic';
  onPerformanceChange?: (data: { factor: number; fps: number }) => void;
  onError?: (error: Error) => void;
}

// Performance monitoring component
function PerformanceTracker({ 
  onPerformanceChange 
}: { 
  onPerformanceChange?: (data: { factor: number; fps: number }) => void;
}) {
  const { gl, performance } = useThree();
  const frameRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  
  useFrame(() => {
    frameRef.current++;
    
    // Calculate FPS every second
    const now = Date.now();
    if (now - lastTimeRef.current >= 1000) {
      const fps = frameRef.current;
      frameRef.current = 0;
      lastTimeRef.current = now;
      
      onPerformanceChange?.({
        factor: performance.current,
        fps
      });
    }
  });

  return null;
}

// Adaptive lighting setup
function LightingRig({ type }: { type: 'minimal' | 'standard' | 'dramatic' }) {
  const lightConfigs = useMemo(() => {
    switch (type) {
      case 'minimal':
        return {
          ambient: { intensity: 0.6, color: '#ffffff' },
          directional: { intensity: 0.4, position: [5, 5, 5], color: '#ffffff' }
        };
      case 'standard':
        return {
          ambient: { intensity: 0.4, color: '#ffffff' },
          directional: { intensity: 0.8, position: [10, 10, 5], color: '#ffffff' },
          point: { intensity: 0.6, position: [0, 0, 0], color: '#00D4AA' }
        };
      case 'dramatic':
        return {
          ambient: { intensity: 0.2, color: '#1a1a2e' },
          directional: { intensity: 1.2, position: [10, 15, 5], color: '#ffffff' },
          point: [
            { intensity: 0.8, position: [5, 5, 5], color: '#00D4AA' },
            { intensity: 0.6, position: [-5, -5, -5], color: '#3B82F6' },
            { intensity: 0.4, position: [0, 10, 0], color: '#EF4444' }
          ]
        };
      default:
        return { ambient: { intensity: 0.5, color: '#ffffff' } };
    }
  }, [type]);

  return (
    <>
      <ambientLight 
        intensity={lightConfigs.ambient.intensity} 
        color={lightConfigs.ambient.color} 
      />
      
      {lightConfigs.directional && (
        <directionalLight
          intensity={lightConfigs.directional.intensity}
          position={lightConfigs.directional.position}
          color={lightConfigs.directional.color}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      )}
      
      {lightConfigs.point && !Array.isArray(lightConfigs.point) && (
        <pointLight
          intensity={lightConfigs.point.intensity}
          position={lightConfigs.point.position}
          color={lightConfigs.point.color}
        />
      )}
      
      {Array.isArray(lightConfigs.point) && 
        lightConfigs.point.map((light, index) => (
          <pointLight
            key={index}
            intensity={light.intensity}
            position={light.position}
            color={light.color}
          />
        ))
      }
    </>
  );
}

// Error boundary for 3D scenes
function Scene3DErrorBoundary({ 
  children, 
  fallback,
  onError 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
}) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('3D Scene Error:', event.error);
      setError(event.error);
      setHasError(true);
      onError?.(event.error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [onError]);

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-full text-center p-8"
      >
        <AlertTriangle className="w-16 h-16 text-red-400 mb-4" />
        <h3 className="text-white font-semibold text-lg mb-2">3D Scene Error</h3>
        <p className="text-white/60 text-sm mb-4 max-w-md">
          There was an issue loading the 3D scene. This might be due to WebGL compatibility or resource constraints.
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="glass"
            onClick={() => {
              setHasError(false);
              setError(null);
            }}
          >
            Retry
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </Button>
        </div>
        {error && (
          <details className="mt-4 text-xs text-white/40">
            <summary className="cursor-pointer">Error Details</summary>
            <pre className="mt-2 text-left">{error.message}</pre>
          </details>
        )}
      </motion.div>
    );
  }

  return <>{children}</>;
}

// Loading fallback component
function Scene3DLoader({ message = "Loading 3D Scene..." }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="mb-4"
      >
        <Loader2 className="w-8 h-8 text-emerald-400" />
      </motion.div>
      <p className="text-white/70 text-sm">{message}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
        <Info className="w-4 h-4" />
        <span>Optimizing for your device...</span>
      </div>
    </motion.div>
  );
}

// Main 3D Scene wrapper component
export function Scene3DWrapper({
  children,
  className,
  fallback,
  camera = {
    position: [0, 0, 10],
    fov: 60,
    near: 0.1,
    far: 1000
  },
  performance = {
    adaptive: true,
    regress: true,
    dpr: [0.5, 2],
    fps: 60
  },
  controls = {
    enableZoom: true,
    enablePan: true,
    enableRotate: true,
    autoRotate: false
  },
  lighting = 'standard',
  onPerformanceChange,
  onError
}: Scene3DWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [performanceInfo, setPerformanceInfo] = useState({ factor: 1, fps: 60 });

  const handlePerformanceChange = (data: { factor: number; fps: number }) => {
    setPerformanceInfo(data);
    onPerformanceChange?.(data);
  };

  const canvasProps = useMemo(() => ({
    camera: {
      position: camera.position,
      fov: camera.fov,
      near: camera.near,
      far: camera.far
    },
    gl: {
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance' as const,
      stencil: false,
      depth: true
    },
    shadows: lighting === 'dramatic',
    dpr: performance.dpr,
    performance: {
      min: performance.dpr?.[0] || 0.5,
      max: performance.dpr?.[1] || 2,
      debounce: 200,
      regress: performance.regress
    },
    frameloop: 'demand' as const
  }), [camera, performance, lighting]);

  return (
    <div className={cn('relative w-full h-full', className)}>
      <Card
        variant="glass-dark"
        blur="xl"
        className="h-full overflow-hidden relative"
      >
        <Scene3DErrorBoundary fallback={fallback} onError={onError}>
          <Suspense
            fallback={
              fallback || <Scene3DLoader message="Loading 3D Scene..." />
            }
          >
            <Canvas {...canvasProps}>
              {/* Performance optimization components */}
              {performance.adaptive && (
                <>
                  <AdaptiveDpr pixelated />
                  <AdaptiveEvents />
                  <PerformanceMonitor
                    onIncline={() => {
                      // Increase quality on good performance
                    }}
                    onDecline={() => {
                      // Reduce quality on poor performance
                    }}
                  />
                </>
              )}

              {/* Lighting setup */}
              <LightingRig type={lighting} />

              {/* Performance tracking */}
              <PerformanceTracker onPerformanceChange={handlePerformanceChange} />

              {/* Scene content */}
              {children}

              {/* Preload all geometries and materials */}
              <Preload all />
            </Canvas>
          </Suspense>
        </Scene3DErrorBoundary>

        {/* Performance indicator */}
        <AnimatePresence>
          {performance.adaptive && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-4 right-4 z-10"
            >
              <div className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                <div className="flex items-center gap-2 text-xs">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full",
                      performanceInfo.fps >= 55 && "bg-green-400",
                      performanceInfo.fps >= 30 && performanceInfo.fps < 55 && "bg-yellow-400",
                      performanceInfo.fps < 30 && "bg-red-400"
                    )}
                  />
                  <span className="text-white/70">
                    {performanceInfo.fps}fps • {(performanceInfo.factor * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}

export default Scene3DWrapper;

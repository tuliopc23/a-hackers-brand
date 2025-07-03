// 3D Components Index
// Provides convenient imports for all 3D-related components

export { Scene3DWrapper } from './3d-scene-wrapper';
export { InteractiveGallery3D } from './interactive-gallery-3d';

// Export types (inline interfaces)
export interface Scene3DWrapperProps {
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

export interface GalleryItem {
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

export interface InteractiveGallery3DProps {
  items: GalleryItem[];
  onItemSelect?: (item: GalleryItem) => void;
  className?: string;
}

'use client';

import { useEffect } from 'react';
import { WebVitalsTracker } from '../../lib/performance/core-web-vitals';

export function WebVitalsInit() {
  useEffect(() => {
    // Initialize Web Vitals tracking
    const tracker = WebVitalsTracker.getInstance();
    tracker.startTracking();
    
    console.log('🎯 Performance monitoring initialized');
  }, []);

  // This component doesn't render anything
  return null;
}

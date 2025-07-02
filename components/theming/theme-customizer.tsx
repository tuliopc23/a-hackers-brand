'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Download, 
  Upload, 
  RotateCcw, 
  Copy, 
  Check,
  Settings,
  Sliders,
  Zap,
  Eye,
  EyeOff,
  Monitor,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { cn } from '@/lib/utils';
import { 
  Theme, 
  ThemeColors, 
  ThemeEffects,
  defaultThemes, 
  ThemeGenerator, 
  CSSVariableGenerator, 
  ColorUtilities 
} from '@/lib/theming/theme-system';

interface ThemeCustomizerProps {
  className?: string;
  currentTheme?: Theme;
  onThemeChange?: (theme: Theme) => void;
  showPreview?: boolean;
  enableExport?: boolean;
}

// Color Picker Component
function ColorPicker({ 
  label, 
  value, 
  onChange, 
  description 
}: { 
  label: string; 
  value: string; 
  onChange: (color: string) => void;
  description?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const presetColors = [
    '#00D4AA', '#3B82F6', '#EF4444', '#F59E0B', '#10B981',
    '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16', '#F97316',
    '#FF0080', '#00FFFF', '#FFFF00', '#FF6B6B', '#4ECDC4'
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-white/80 text-sm font-medium">{label}</label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-6 h-6 rounded border-2 border-white/20 cursor-pointer hover:border-white/40 transition-colors"
          style={{ backgroundColor: value }}
        />
      </div>
      
      {description && (
        <p className="text-white/50 text-xs">{description}</p>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3 p-3 bg-black/40 rounded-lg border border-white/10"
          >
            {/* Color input */}
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-20 px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs font-mono"
                placeholder="#000000"
              />
            </div>

            {/* Preset colors */}
            <div className="grid grid-cols-5 gap-2">
              {presetColors.map(color => (
                <button
                  key={color}
                  onClick={() => setTempValue(color)}
                  className="w-6 h-6 rounded border border-white/20 hover:border-white/40 transition-colors"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Apply/Cancel buttons */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="glass"
                onClick={() => {
                  onChange(tempValue);
                  setIsOpen(false);
                }}
                className="flex-1"
              >
                Apply
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setTempValue(value);
                  setIsOpen(false);
                }}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Slider Component
function Slider({ 
  label, 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1,
  suffix = '',
  description 
}: { 
  label: string; 
  value: number; 
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-white/80 text-sm font-medium">{label}</label>
        <span className="text-white/60 text-sm font-mono">
          {value}{suffix}
        </span>
      </div>
      
      {description && (
        <p className="text-white/50 text-xs">{description}</p>
      )}
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
        />
        <div 
          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-lg pointer-events-none"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );
}

// Theme Preview Component
function ThemePreview({ theme, isActive }: { theme: Theme; isActive: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200',
        isActive 
          ? 'border-emerald-500 bg-emerald-500/10' 
          : 'border-white/20 bg-white/5 hover:border-white/40'
      )}
    >
      {/* Theme preview colors */}
      <div className="flex items-center gap-2 mb-3">
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.brand.primary }}
        />
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.brand.secondary }}
        />
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.brand.accent }}
        />
        {isActive && <Check className="w-4 h-4 text-emerald-400 ml-auto" />}
      </div>
      
      <h4 className="text-white font-medium text-sm mb-1">{theme.displayName}</h4>
      <p className="text-white/60 text-xs line-clamp-2">{theme.description}</p>
      
      {/* Mini preview */}
      <div className="mt-3 h-16 rounded border border-white/10 overflow-hidden">
        <div 
          className="h-1/3 flex"
          style={{ backgroundColor: theme.colors.background.primary }}
        >
          <div 
            className="flex-1"
            style={{ backgroundColor: theme.colors.brand.primary, opacity: 0.1 }}
          />
          <div 
            className="flex-1"
            style={{ backgroundColor: theme.colors.brand.secondary, opacity: 0.1 }}
          />
        </div>
        <div 
          className="h-2/3 p-2 flex items-center justify-center"
          style={{ backgroundColor: theme.colors.background.secondary }}
        >
          <div 
            className="w-8 h-2 rounded"
            style={{ backgroundColor: theme.colors.brand.primary }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Main Theme Customizer Component
export function ThemeCustomizer({
  className,
  currentTheme,
  onThemeChange,
  showPreview = true,
  enableExport = true
}: ThemeCustomizerProps) {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(currentTheme || defaultThemes.quantum);
  const [customTheme, setCustomTheme] = useState<Theme>(selectedTheme);
  const [activeTab, setActiveTab] = useState<'presets' | 'colors' | 'effects'>('presets');
  const [isPreviewVisible, setIsPreviewVisible] = useState(showPreview);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (currentTheme) {
      setSelectedTheme(currentTheme);
      setCustomTheme(currentTheme);
    }
  }, [currentTheme]);

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    setCustomTheme(theme);
    onThemeChange?.(theme);
  };

  const handleColorChange = (colorPath: string, newColor: string) => {
    const pathArray = colorPath.split('.');
    const updatedTheme = { ...customTheme };
    
    let current: any = updatedTheme.colors;
    for (let i = 0; i < pathArray.length - 1; i++) {
      current = current[pathArray[i]];
    }
    current[pathArray[pathArray.length - 1]] = newColor;
    
    setCustomTheme(updatedTheme);
    onThemeChange?.(updatedTheme);
  };

  const exportTheme = () => {
    const cssVariables = CSSVariableGenerator.generateCSSVariables(customTheme);
    const blob = new Blob([cssVariables], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${customTheme.name}-theme.css`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyThemeCSS = async () => {
    const cssVariables = CSSVariableGenerator.generateCSSVariables(customTheme);
    await navigator.clipboard.writeText(cssVariables);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const resetTheme = () => {
    const original = defaultThemes[selectedTheme.name] || defaultThemes.quantum;
    setCustomTheme(original);
    onThemeChange?.(original);
  };

  const tabs = [
    { id: 'presets', label: 'Presets', icon: Palette },
    { id: 'colors', label: 'Colors', icon: Sliders },
    { id: 'effects', label: 'Effects', icon: Sparkles }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('w-full', className)}
    >
      <Card
        variant="glass-dark"
        blur="xl"
        className="overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30"
            >
              <Palette className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg">Theme Customizer</h3>
              <p className="text-white/60 text-sm">
                Create and customize your perfect theme
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {showPreview && (
              <Button
                size="sm"
                variant="glass"
                onClick={() => setIsPreviewVisible(!isPreviewVisible)}
              >
                {isPreviewVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            )}
            
            <Button size="sm" variant="glass" onClick={resetTheme}>
              <RotateCcw className="w-4 h-4" />
            </Button>
            
            {enableExport && (
              <>
                <Button size="sm" variant="glass" onClick={copyThemeCSS}>
                  {copySuccess ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
                
                <Button size="sm" variant="glass" onClick={exportTheme}>
                  <Download className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 border-r border-white/10">
            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    'flex-1 flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors',
                    activeTab === tab.id
                      ? 'text-emerald-400 bg-emerald-500/10 border-b-2 border-emerald-500'
                      : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4 h-96 overflow-y-auto">
              {activeTab === 'presets' && (
                <div className="space-y-4">
                  <h4 className="text-white font-semibold mb-3">Official Themes</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.values(defaultThemes).map(theme => (
                      <button
                        key={theme.name}
                        onClick={() => handleThemeSelect(theme)}
                        className="text-left"
                      >
                        <ThemePreview 
                          theme={theme} 
                          isActive={selectedTheme.name === theme.name}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'colors' && (
                <div className="space-y-6">
                  {/* Brand Colors */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Brand Colors</h4>
                    <div className="space-y-4">
                      <ColorPicker
                        label="Primary"
                        value={customTheme.colors.brand.primary}
                        onChange={(color) => handleColorChange('brand.primary', color)}
                        description="Main brand color used for primary actions"
                      />
                      <ColorPicker
                        label="Secondary"
                        value={customTheme.colors.brand.secondary}
                        onChange={(color) => handleColorChange('brand.secondary', color)}
                        description="Supporting brand color for secondary elements"
                      />
                      <ColorPicker
                        label="Accent"
                        value={customTheme.colors.brand.accent}
                        onChange={(color) => handleColorChange('brand.accent', color)}
                        description="Highlight color for special emphasis"
                      />
                    </div>
                  </div>

                  {/* Background Colors */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Background Colors</h4>
                    <div className="space-y-4">
                      <ColorPicker
                        label="Primary Background"
                        value={customTheme.colors.background.primary}
                        onChange={(color) => handleColorChange('background.primary', color)}
                        description="Main background color"
                      />
                      <ColorPicker
                        label="Secondary Background"
                        value={customTheme.colors.background.secondary}
                        onChange={(color) => handleColorChange('background.secondary', color)}
                        description="Card and panel backgrounds"
                      />
                    </div>
                  </div>

                  {/* State Colors */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">State Colors</h4>
                    <div className="space-y-4">
                      <ColorPicker
                        label="Success"
                        value={customTheme.colors.state.success}
                        onChange={(color) => handleColorChange('state.success', color)}
                      />
                      <ColorPicker
                        label="Warning"
                        value={customTheme.colors.state.warning}
                        onChange={(color) => handleColorChange('state.warning', color)}
                      />
                      <ColorPicker
                        label="Error"
                        value={customTheme.colors.state.error}
                        onChange={(color) => handleColorChange('state.error', color)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'effects' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Animation Durations</h4>
                    <div className="space-y-4">
                      <Slider
                        label="Fast Animations"
                        value={parseInt(customTheme.effects.animations.duration.fast)}
                        onChange={(value) => {
                          const updatedTheme = { ...customTheme };
                          updatedTheme.effects.animations.duration.fast = `${value}ms`;
                          setCustomTheme(updatedTheme);
                          onThemeChange?.(updatedTheme);
                        }}
                        min={50}
                        max={500}
                        step={10}
                        suffix="ms"
                        description="Duration for quick interactions"
                      />
                      <Slider
                        label="Normal Animations"
                        value={parseInt(customTheme.effects.animations.duration.normal)}
                        onChange={(value) => {
                          const updatedTheme = { ...customTheme };
                          updatedTheme.effects.animations.duration.normal = `${value}ms`;
                          setCustomTheme(updatedTheme);
                          onThemeChange?.(updatedTheme);
                        }}
                        min={100}
                        max={1000}
                        step={25}
                        suffix="ms"
                        description="Duration for standard animations"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Blur Effects</h4>
                    <div className="space-y-4">
                      <Slider
                        label="Small Blur"
                        value={parseInt(customTheme.effects.blur.sm)}
                        onChange={(value) => {
                          const updatedTheme = { ...customTheme };
                          updatedTheme.effects.blur.sm = `${value}px`;
                          setCustomTheme(updatedTheme);
                          onThemeChange?.(updatedTheme);
                        }}
                        min={1}
                        max={20}
                        suffix="px"
                        description="Subtle blur for glass effects"
                      />
                      <Slider
                        label="Medium Blur"
                        value={parseInt(customTheme.effects.blur.md)}
                        onChange={(value) => {
                          const updatedTheme = { ...customTheme };
                          updatedTheme.effects.blur.md = `${value}px`;
                          setCustomTheme(updatedTheme);
                          onThemeChange?.(updatedTheme);
                        }}
                        min={5}
                        max={50}
                        suffix="px"
                        description="Standard blur for overlays"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Preview Area */}
          {isPreviewVisible && (
            <div className="flex-1 p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Live Preview</h4>
                  <p className="text-white/60 text-sm mb-4">
                    See how your theme looks with real components
                  </p>
                </div>

                {/* Theme Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/60">Theme Name:</span>
                    <span className="text-white ml-2 font-medium">{customTheme.displayName}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Category:</span>
                    <span className="text-white ml-2 capitalize">{customTheme.category}</span>
                  </div>
                </div>

                {/* Component Previews */}
                <div className="space-y-4">
                  {/* Button Preview */}
                  <div>
                    <h5 className="text-white/80 text-sm font-medium mb-2">Buttons</h5>
                    <div className="flex gap-3">
                      <button 
                        className="px-4 py-2 rounded-lg text-white font-medium transition-colors"
                        style={{ 
                          backgroundColor: customTheme.colors.brand.primary,
                          color: customTheme.colors.foreground.inverse
                        }}
                      >
                        Primary
                      </button>
                      <button 
                        className="px-4 py-2 rounded-lg border transition-colors"
                        style={{ 
                          borderColor: customTheme.colors.brand.primary,
                          color: customTheme.colors.brand.primary,
                          backgroundColor: 'transparent'
                        }}
                      >
                        Secondary
                      </button>
                    </div>
                  </div>

                  {/* Card Preview */}
                  <div>
                    <h5 className="text-white/80 text-sm font-medium mb-2">Card</h5>
                    <div 
                      className="p-4 rounded-lg border backdrop-blur-xl"
                      style={{ 
                        backgroundColor: customTheme.colors.background.glass,
                        borderColor: customTheme.colors.brand.primary + '30'
                      }}
                    >
                      <h6 className="text-white font-semibold mb-2">Sample Card</h6>
                      <p className="text-white/70 text-sm">
                        This is how your theme will look on glass morphism cards.
                      </p>
                    </div>
                  </div>

                  {/* Status Colors */}
                  <div>
                    <h5 className="text-white/80 text-sm font-medium mb-2">Status Colors</h5>
                    <div className="grid grid-cols-3 gap-2">
                      <div 
                        className="p-2 rounded text-center text-xs font-medium"
                        style={{ 
                          backgroundColor: customTheme.colors.state.success + '20',
                          color: customTheme.colors.state.success
                        }}
                      >
                        Success
                      </div>
                      <div 
                        className="p-2 rounded text-center text-xs font-medium"
                        style={{ 
                          backgroundColor: customTheme.colors.state.warning + '20',
                          color: customTheme.colors.state.warning
                        }}
                      >
                        Warning
                      </div>
                      <div 
                        className="p-2 rounded text-center text-xs font-medium"
                        style={{ 
                          backgroundColor: customTheme.colors.state.error + '20',
                          color: customTheme.colors.state.error
                        }}
                      >
                        Error
                      </div>
                    </div>
                  </div>
                </div>

                {/* CSS Variables Output */}
                <div>
                  <h5 className="text-white/80 text-sm font-medium mb-2">Generated CSS Variables</h5>
                  <div className="bg-black/40 border border-white/20 rounded-lg p-3 max-h-32 overflow-y-auto">
                    <pre className="text-xs text-white/60 font-mono">
                      {CSSVariableGenerator.generateCSSVariables(customTheme).split('\n').slice(0, 10).join('\n')}
                      {CSSVariableGenerator.generateCSSVariables(customTheme).split('\n').length > 10 && '\n...'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00D4AA, #3B82F6);
          cursor: pointer;
          border: 2px solid white;
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00D4AA, #3B82F6);
          cursor: pointer;
          border: 2px solid white;
        }
      `}</style>
    </motion.div>
  );
}
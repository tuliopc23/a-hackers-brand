# 🚀 A Hacker's Brand - Installation Guide

## ⚡ **Bun + Svelte 5 (Recommended)**

### **Quick Start**
```bash
# 1. Install with Bun (fastest)
bun add a-hacker-brand

# 2. Install Svelte 5 (peer dependency)
bun add svelte@^5.0.0

# 3. Start using components
```

```svelte
<script>
  import { Button, Card, Icon } from 'a-hacker-brand';
</script>

<Card variant="terminal">
  <Icon name="terminal" style="solid" />
  <Button variant="terminal">Execute</Button>
</Card>
```

## 📦 **Dependencies Explained**

### **Required (Automatic)**
- ✅ **Font Awesome 6.7.2** - Icons (bundled with library)
- ✅ **Svelte 5** - Framework (peer dependency)

### **Optional (WebGL Components Only)**
- 🎯 **Three.js** - Only needed for 3D components
- 🎯 **@threlte/core** - Svelte Three.js integration
- 🎯 **@threlte/extras** - Additional 3D utilities

```bash
# Only install if using WebGL components (GlassScene, TerminalOrbit, etc.)
bun add three @threlte/core @threlte/extras
```

## 🎯 **Streamlined Setup**

### **1. Bun-First Strategy**
```json
// package.json
{
  "packageManager": "bun@1.2.20",
  "engines": {
    "bun": ">=1.0.0"
  }
}
```

### **2. Minimal Dependencies**
- **Only Svelte 5 required** - everything else is optional
- **Font Awesome bundled** - no external icon dependencies
- **WebGL optional** - install only if needed

### **3. Version Lock Strategy**
```bash
# Lock to exact versions for stability
bun add svelte@5.38.1 a-hacker-brand@latest
```

## 🛠️ **Framework Integration**

### **SvelteKit**
```bash
# SvelteKit + A Hacker's Brand
bun create svelte@latest my-app
cd my-app
bun add a-hacker-brand svelte@^5.0.0
```

### **Vite + Svelte**
```bash
# Vite + Svelte + A Hacker's Brand
bun create vite my-app --template svelte-ts
cd my-app
bun add a-hacker-brand svelte@^5.0.0
```

## 🎨 **CSS Integration**

### **Option 1: Auto Import (Recommended)**
```svelte
<!-- Components automatically include styles -->
<script>
  import { Button } from 'a-hacker-brand';
</script>

<Button variant="terminal">Styled Button</Button>
```

### **Option 2: Manual CSS Import**
```css
/* app.css */
@import 'a-hacker-brand/dist/styles/index.css';
```

## 🚨 **Troubleshooting**

### **Issue: Svelte Version Mismatch**
```bash
# Solution: Ensure Svelte 5+
bun remove svelte && bun add svelte@^5.0.0
```

### **Issue: WebGL Components Not Working**
```bash
# Solution: Install optional 3D dependencies
bun add three @threlte/core @threlte/extras
```

### **Issue: Icons Not Showing**
```bash
# Solution: Font Awesome is bundled, check CSS import
# Ensure styles are loading properly
```

### **Issue: Build Errors**
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules bun.lockb
bun install
```

## ✅ **Verification**

### **Test Installation**
```svelte
<!-- Test.svelte -->
<script>
  import { Button, Card, Icon } from 'a-hacker-brand';
</script>

<Card variant="glass">
  <Icon name="check" style="solid" />
  <h2>Installation Successful!</h2>
  <Button variant="glass">All Working</Button>
</Card>
```

### **Check Bundle Size**
```bash
# Analyze what you're importing
bun run build --analyze
```

## 🎯 **Best Practices**

### **1. Selective Imports**
```javascript
// ✅ Good - Tree shaking works
import { Button, Card } from 'a-hacker-brand';

// ❌ Avoid - Imports everything
import * as AHB from 'a-hacker-brand';
```

### **2. Component-Specific Imports**
```javascript
// ✅ Even better - Minimal bundle
import Button from 'a-hacker-brand/components/Button';
import Card from 'a-hacker-brand/components/Card';
```

### **3. WebGL Components**
```javascript
// ✅ Lazy load heavy components
const GlassScene = lazy(() => import('a-hacker-brand/components/GlassScene'));
```

## 📊 **Bundle Impact**

### **Minimal Setup**
- **Core components**: ~50KB gzipped
- **With Font Awesome**: ~80KB gzipped
- **Full library**: ~168KB gzipped

### **WebGL Components**
- **Three.js**: +400KB (only if imported)
- **Threlte**: +50KB (only if imported)

## 🚀 **Ready to Launch!**

With this streamlined setup:
- ✅ **Single peer dependency** (Svelte 5)
- ✅ **Bun-optimized** for fastest installs
- ✅ **Font Awesome bundled** - no external icon issues
- ✅ **Optional WebGL** - install only if needed
- ✅ **Clear troubleshooting** - solve issues quickly

**Installation complexity: SOLVED! 🎉**

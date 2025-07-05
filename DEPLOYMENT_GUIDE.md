# A Hacker's Brand - Deployment Guide

## 🚀 NPM Package

The design system is now published and available on NPM:

**Package Name:** `a-hackers-brand`  
**Version:** 0.2.0  
**NPM URL:** https://www.npmjs.com/package/a-hackers-brand

### Installation

```bash
npm install a-hackers-brand
# or
yarn add a-hackers-brand
# or
pnpm add a-hackers-brand
```

### Basic Usage

```javascript
// Import components
import { Button, Card, Input } from 'a-hackers-brand';

// Import motion system
import { liquidBlur, glassFade } from 'a-hackers-brand/motion';

// Import design tokens
import { colors, spacing } from 'a-hackers-brand/tokens';
```

## 🌐 Vercel Deployment

### Automatic Deployment

The design system documentation site can be deployed to Vercel with the following steps:

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in and click "New Project"
   - Import the GitHub repository: `tuliopc23/a-hackers-brand`

2. **Configure Build Settings**
   - Framework Preset: **SvelteKit**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

3. **Environment Variables**
   ```
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy" and Vercel will automatically build and deploy
   - The site will be available at: `https://a-hackers-brand.vercel.app`

### Manual Deployment via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. Go to Vercel project dashboard
2. Navigate to "Settings" > "Domains"
3. Add your custom domain (e.g., `design.yourcompany.com`)
4. Configure DNS records as instructed
5. SSL certificates are automatically generated

## 📦 CLI Tool Deployment

The CLI tool is included in the NPM package and can be used immediately:

```bash
# Create a new project using the design system
npx create-hackers-brand my-app

# Interactive mode
npx create-hackers-brand

# With specific template
npx create-hackers-brand my-dashboard --template=dashboard --demo
```

## 🔧 GitHub Integration

### Automated Workflows

To set up GitHub Actions workflows, add these files to `.github/workflows/`:

#### 1. CI Workflow (`.github/workflows/ci.yml`)

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - run: npm test
    - run: npm run lint
```

#### 2. Release Workflow (`.github/workflows/release.yml`)

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        registry-url: 'https://registry.npmjs.org'
    - run: npm ci
    - run: npm run build:package
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

#### 3. Bundle Size Monitor (`.github/workflows/bundle-size.yml`)

```yaml
name: Bundle Size Monitor

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  bundle-size:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run bundle:ci
```

### Required Secrets

Add these secrets to your GitHub repository:

1. **NPM_TOKEN**: NPM authentication token for publishing
2. **VERCEL_TOKEN**: Vercel token for automated deployments (optional)

## 🌍 CDN Distribution

The package is available via popular CDNs:

### jsDelivr
```html
<script type="module">
  import { Button } from 'https://cdn.jsdelivr.net/npm/a-hackers-brand@latest/dist/index.js';
</script>
```

### unpkg
```html
<script type="module">
  import { Button } from 'https://unpkg.com/a-hackers-brand@latest/dist/index.js';
</script>
```

### Standalone CSS
```html
<!-- Complete design system CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/a-hackers-brand@latest/dist/css/complete.min.css">

<!-- Or individual bundles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/a-hackers-brand@latest/dist/css/core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/a-hackers-brand@latest/dist/css/components.min.css">
```

## 📊 Analytics & Monitoring

### Package Analytics

Monitor package usage at:
- NPM: https://www.npmjs.com/package/a-hackers-brand
- NPM Stats: https://npm-stat.com/charts.html?package=a-hackers-brand

### Site Analytics

For the documentation site, consider adding:
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Lighthouse CI**: Performance monitoring
- **Bundle Analyzer**: Size monitoring

## 🔄 Update Process

### Patch Releases (0.2.x)

```bash
# Make changes
git add .
git commit -m "fix: description"

# Update version
npm version patch

# Build and publish
npm run build:package
npm publish

# Push changes and tags
git push origin main --tags
```

### Minor Releases (0.x.0)

```bash
# Make changes
git add .
git commit -m "feat: new feature"

# Update version
npm version minor

# Build and publish
npm run build:package
npm publish

# Push changes and tags
git push origin main --tags
```

### Major Releases (x.0.0)

```bash
# Make breaking changes
git add .
git commit -m "feat!: breaking change"

# Update version
npm version major

# Build and publish
npm run build:package
npm publish

# Push changes and tags
git push origin main --tags
```

## 🚨 Rollback Strategy

If issues are discovered after deployment:

### NPM Rollback

```bash
# Deprecate current version
npm deprecate a-hackers-brand@0.2.0 "Issues found, use 0.1.x instead"

# Publish fixed version
npm version patch
npm publish
```

### Vercel Rollback

1. Go to Vercel project dashboard
2. Navigate to "Deployments"
3. Find previous stable deployment
4. Click "Promote to Production"

## 📞 Support & Issues

- **GitHub Issues**: https://github.com/tuliopc23/a-hackers-brand/issues
- **NPM Package**: https://www.npmjs.com/package/a-hackers-brand
- **Documentation**: https://a-hackers-brand.vercel.app

---

*This deployment guide ensures reliable, scalable distribution of A Hacker's Brand design system across all platforms and environments.*
#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Build Histoire
console.log('🔨 Building Histoire documentation...');
execSync('pnpm docs:build', { stdio: 'inherit' });

// Ensure the static directory exists in build output
const buildDir = './build';
const docsStaticDir = join(buildDir, 'docs', 'static');

if (!existsSync(docsStaticDir)) {
	mkdirSync(docsStaticDir, { recursive: true });
}

// Copy Histoire build to static/docs
console.log('📂 Copying Histoire build to SvelteKit build...');
execSync(`cp -r .histoire/dist/* ${docsStaticDir}/`, { stdio: 'inherit' });

// Update the docs route to serve static files
console.log('✅ Documentation integration complete!');
console.log(`📚 Histoire docs available at: ${docsStaticDir}`);

// Optional: Create a redirect file for production
const redirectContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting to Documentation</title>
  <meta http-equiv="refresh" content="0; url=./static/index.html">
  <link rel="canonical" href="./static/index.html">
</head>
<body>
  <p>Redirecting to <a href="./static/index.html">documentation</a>...</p>
</body>
</html>
`;

writeFileSync(join(buildDir, 'docs', 'index.html'), redirectContent);
console.log('🚀 Created redirect page for docs route');

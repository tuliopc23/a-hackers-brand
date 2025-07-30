#!/usr/bin/env bun
import { build } from 'bun';
import { readdir, rm, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function bunBuild() {
	try {
		console.log('🚀 Starting Bun build process...\n');
		
		// Clean dist directory
		await rm(join(rootDir, 'dist'), { recursive: true, force: true });
		await mkdir(join(rootDir, 'dist'), { recursive: true });
		
		// Build configuration
		const buildConfig = {
			entrypoints: [
				join(rootDir, 'src/lib/index.ts'),
				join(rootDir, 'src/lib/components/index.ts'),
				join(rootDir, 'src/lib/tokens/index.ts')
			],
			outdir: join(rootDir, 'dist'),
			target: 'browser',
			format: 'esm',
			splitting: true,
			sourcemap: 'external',
			minify: {
				whitespace: true,
				identifiers: false,
				syntax: true
			},
			// External dependencies (handled by consumer)
			external: [
				'svelte',
				'svelte/*',
				'@sveltejs/kit',
				'@sveltejs/kit/*',
				'@threlte/core',
				'@threlte/extras',
				'three',
				'three/*'
			],
			loader: {
				'.svelte': 'js',
				'.ts': 'ts',
				'.tsx': 'tsx',
				'.js': 'js',
				'.jsx': 'jsx',
				'.css': 'css'
			},
			naming: {
				// Output naming strategy
				entry: '[dir]/[name]',
				chunk: 'chunks/[name]-[hash]',
				asset: 'assets/[name]-[hash]'
			}
		};
		
		console.log('📦 Building library modules...');
		const result = await build(buildConfig);
		
		if (result.success) {
			console.log('✅ Build completed successfully!');
			
			// Log build stats
			const outputs = result.outputs || [];
			console.log(`\n📊 Build Stats:`);
			console.log(`  - Total files: ${outputs.length}`);
			console.log(`  - Output directory: dist/`);
			
			// Generate TypeScript declarations
			console.log('\n📝 Generating TypeScript declarations...');
			await generateDTS();
			
			console.log('\n✅ Build process complete!');
		} else {
			throw new Error('Build failed');
		}
		
	} catch (error) {
		console.error('❌ Build failed:', error);
		process.exit(1);
	}
}

async function generateDTS() {
	// For TypeScript declarations, we still need to use tsc
	const { spawn } = await import('bun');
	
	const tsc = spawn(['bunx', '--bun', 'tsc', '--emitDeclarationOnly', '--outDir', 'dist'], {
		stdout: 'inherit',
		stderr: 'inherit'
	});
	
	const exitCode = await tsc.exited;
	if (exitCode !== 0) {
		throw new Error(`TypeScript declaration generation failed with code ${exitCode}`);
	}
}

// Run the build
await bunBuild();
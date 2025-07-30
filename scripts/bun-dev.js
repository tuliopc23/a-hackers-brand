#!/usr/bin/env bun
import { serve } from 'bun';
import { watch } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'bun';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function startDevServer() {
	console.log('🚀 Starting Bun development server...\n');
	
	// Start Vite dev server with Bun
	const viteProcess = spawn(['bunx', '--bun', 'vite', 'dev', '--host'], {
		stdout: 'inherit',
		stderr: 'inherit',
		stdin: 'inherit',
		env: {
			...process.env,
			NODE_ENV: 'development'
		}
	});
	
	// Set up file watcher for hot reload
	const srcDir = join(rootDir, 'src');
	console.log(`👀 Watching for changes in ${srcDir}...\n`);
	
	// Handle process termination
	process.on('SIGINT', async () => {
		console.log('\n👋 Shutting down development server...');
		viteProcess.kill();
		process.exit(0);
	});
	
	// Wait for the process
	await viteProcess.exited;
}

// Additional Bun-specific dev server (optional)
async function bunDevServer() {
	const server = serve({
		port: 3000,
		hostname: '0.0.0.0',
		
		async fetch(req) {
			const url = new URL(req.url);
			
			// Serve static files
			if (url.pathname.startsWith('/static/')) {
				const file = Bun.file(join(rootDir, url.pathname));
				if (await file.exists()) {
					return new Response(file);
				}
			}
			
			// API routes
			if (url.pathname.startsWith('/api/')) {
				return new Response(JSON.stringify({ 
					message: 'API endpoint',
					path: url.pathname 
				}), {
					headers: { 'Content-Type': 'application/json' }
				});
			}
			
			// Default response
			return new Response('Bun Dev Server', {
				headers: { 'Content-Type': 'text/plain' }
			});
		},
		
		error(error) {
			return new Response(`Error: ${error.message}`, { 
				status: 500,
				headers: { 'Content-Type': 'text/plain' }
			});
		}
	});
	
	console.log(`🚀 Bun server running at http://localhost:${server.port}`);
}

// Run the development server
await startDevServer();
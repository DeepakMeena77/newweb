import path from 'node:path';
import { spawn } from 'node:child_process';

const command = process.argv[2] || 'dev';
const extraArgs = process.argv.slice(3);
const rootDir = process.cwd();
const nextBin = path.join(rootDir, 'node_modules', 'next', 'dist', 'bin', 'next');
const wasmDir = path.join(rootDir, 'node_modules', '@next', 'swc-wasm-nodejs');

const args = [nextBin, command, ...extraArgs];

if ((command === 'dev' || command === 'build') && !extraArgs.includes('--webpack')) {
  args.push('--webpack');
}

const child = spawn(process.execPath, args, {
  stdio: 'inherit',
  env: {
    ...process.env,
    NEXT_TEST_WASM: '1',
    NEXT_TEST_WASM_DIR: wasmDir,
  },
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

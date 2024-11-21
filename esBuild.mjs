import esbuild from 'esbuild'
import { glob } from 'glob'

const filteredEntryPoints = [
  ...(glob.sync('src/tooling/**/*.ts') || []),
  ...(glob.sync('src/problems/**/*.{ts,js}') || [])
].filter((entry) => !entry.includes('.test.'))

esbuild
  .build({
    entryPoints: filteredEntryPoints,
    bundle: true,
    outdir: 'dist',
    outbase: 'src',
    platform: 'node',
    target: 'node14',
    external: ['express'],
    entryNames: '[dir]/[name]',
    format: 'cjs'
  })
  .then(() => {
    console.log('---')
  })
  .catch((err) => {
    console.error('Build Error:', err)
    return process.exit(1)
  })

import dotenv from 'dotenv'
import minimist from 'minimist'
import { spawn } from 'child_process'

dotenv.config()

;(async () => {
  try {
    const args = minimist(process.argv.slice(2))
    const problemNumber: string = args.p ?? null
    if (problemNumber === null) {
      throw new Error('Problem number is required: -p <problem number>')
    }

    const problemFilePath = `./problems/problem-${problemNumber}/problem-${problemNumber}.js`
    const testExecCommand = `yarn jest src/problems/problem-${problemNumber}/problem-${problemNumber}.test.ts`

    const problemModule = await import(problemFilePath)
    if (typeof problemModule.default?.default !== 'function') {
      throw new Error(`Problem ${problemNumber} not found`)
    }

    await problemModule.default?.default()

    await new Promise((resolve, reject) => {
      spawn('yarn', ['jest', '--color', testExecCommand], {
        stdio: 'inherit',
        shell: true
      }).on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`Test command exited with code ${code ?? 'unknown'}`))
          return
        }
        resolve(true)
      })
    })
  } catch (error) {
    console.error(error)
  } finally {
    process.exit(0)
  }
})().catch(error => {
  console.error('Unhandled error:', error)
  process.exit(1)
})

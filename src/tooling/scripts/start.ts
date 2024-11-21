import dotenv from 'dotenv'
import minimist from 'minimist'
import { spawnJestCommand } from '../lib/spawnJestCommand'
import { checkAndBuildProblemFile } from '../lib/checkAndBuildProblemFile'
import path from 'path'

dotenv.config()
;(async () => {
  try {
    const args = minimist(process.argv.slice(2))
    const problemNumber: string = args.p ?? null
    if (problemNumber === null) {
      throw new Error('Problem number is required: -p <problem number>')
    }

    const problemFilePath = path.resolve(
      process.cwd(),
      `dist/problems/problem-${problemNumber}/problem-${problemNumber}.js`
    )

    await checkAndBuildProblemFile(problemNumber, true)

    const problemModule = await import(problemFilePath)
    if (typeof problemModule.default?.default !== 'function') {
      throw new Error(`Problem ${problemNumber} not found`)
    }

    await problemModule.default?.default()

    const runTest: boolean = typeof args.t !== 'undefined'
    if (runTest) {
      await spawnJestCommand(problemNumber)
    }
  } catch (error) {
    console.error(error)
  } finally {
    process.exit(0)
  }
})().catch((error) => {
  console.error('Unhandled error:', error)
  process.exit(1)
})

import dotenv from 'dotenv'
import minimist from 'minimist'
import { spawnJestCommand } from '../lib/spawnJestCommand'

dotenv.config()

;(async () => {
  try {
    const args = minimist(process.argv.slice(2))
    const problemNumber: string = args.p ?? null
    if (problemNumber === null) {
      throw new Error('Problem number is required: -p <problem number>')
    }

    await spawnJestCommand(problemNumber)
  } catch (error) {
    console.error(error)
  } finally {
    process.exit(0)
  }
})().catch(error => {
  console.error('Unhandled error:', error)
  process.exit(1)
})

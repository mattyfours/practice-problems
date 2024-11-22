import { spawn } from 'child_process'

export const spawnJestCommand = async (
  problemNumber: string | number,
  testName: string | null
): Promise<number> => {
  const testPath = `./problems/problem-${problemNumber}/problem-${problemNumber}.test.ts`

  const testFlag = testName ? ['-t', testName] : []

  return await new Promise((resolve, reject) => {
    spawn('yarn', ['jest', testPath, ...testFlag, '--watch'], {
      stdio: 'inherit',
      shell: true
    }).on('close', (code) => {
      if (code !== 0) {
        console.error(`Jest exited with code ${code ?? 'unknown'}`)
        resolve(code ?? 0)
        return
      }
      resolve(code)
    })
  })
}

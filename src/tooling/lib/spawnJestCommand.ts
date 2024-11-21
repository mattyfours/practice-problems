import { spawn } from 'child_process'

export const spawnJestCommand = async (
  problemNumber: string | number
): Promise<number> => {
  const testPath = `src/problems/problem-${problemNumber}/problem-${problemNumber}.test.ts`

  return await new Promise((resolve, reject) => {
    spawn('yarn', ['jest', testPath], {
      stdio: 'inherit',
      shell: true
    }).on('close', (code) => {
      if (code !== 0) {
        console.error(`Jest exited with code ${code ?? 'unknown'}`)
        reject(code)
        return
      }
      resolve(code)
    })
  })
}

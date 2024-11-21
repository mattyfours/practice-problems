import { spawn } from 'child_process'

export const spawnBuild = async (): Promise<number> => {
  return await new Promise((resolve, reject) => {
    spawn('yarn', ['build-and-format'], {
      stdio: 'ignore',
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

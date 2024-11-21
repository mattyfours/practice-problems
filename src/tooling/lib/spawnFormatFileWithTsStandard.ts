import { spawn } from 'child_process'

export const spawnFormatFileWithTsStandard = async (filePath: string): Promise<any> => {
  return await new Promise((resolve, reject) => {
    spawn('yarn', ['ts-standard', '--fix', filePath], {
      stdio: 'ignore',
      shell: false
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

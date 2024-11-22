import path from 'path'
import fs from 'fs-extra'
import { defaultProblemFunctionString } from '../helpers/defaultProblemFunctionString'
import { spawnBuild } from './spawnBuild'
import { spawnFormat } from './spawnFormat'

export const checkAndBuildProblemFile = async (
  problemNumber: string | number,
  buildAfterCreate: boolean = false
): Promise<string> => {
  const problemFilePath = path.resolve(
    process.cwd(),
    `src/problems/problem-${problemNumber}/problem-${problemNumber}.ts`
  )

  const problemReadmeFilePath = path.resolve(
    process.cwd(),
    `src/problems/problem-${problemNumber}/README.md`
  )

  const problemFileExist = await fs.exists(problemFilePath)
  if (problemFileExist) {
    return problemFilePath
  }

  await fs.ensureFile(problemReadmeFilePath)
  const readMeContent = fs.readFileSync(problemReadmeFilePath, 'utf-8')

  const defaultProblemContent: string =
    readMeContent
      .split('```')
      .find(
        (partialContent: string) =>
          partialContent.includes('export default function') ||
          partialContent.includes('export default async function')
      ) ?? defaultProblemFunctionString

  fs.writeFileSync(problemFilePath, defaultProblemContent)

  if (buildAfterCreate) {
    await spawnBuild()
  }

  return problemFilePath
}

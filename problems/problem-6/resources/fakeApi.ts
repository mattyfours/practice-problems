import { pause } from '../../../src/lib/utils'

export const fakeApi = async (
  responseString: string,
  delayMs: number
): Promise<string> => {
  await pause(delayMs)

  return responseString
}

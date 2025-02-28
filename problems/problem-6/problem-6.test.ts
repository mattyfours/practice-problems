import { renderLiquid } from '../../src/lib/utils'
import problem from './problem-6'
import { fakeApi } from './resources/fakeApi'

const INVALID_INPUT_VALUE = 'INVALID INPUT'

type TestGoup = [string, number][]

test('a', async () => {
  const testGroup: TestGoup = [
    ['jake', 10],
    ['jane', 100],
    ['janet', 150]
  ]

  const requests = testGroup.map(([name, delay]) => fakeApi(name, delay))

  const fastestName: string = await problem(requests)

  expect(fastestName).toEqual('jake')
})

test('b', async () => {
  const testGroup: TestGoup = [
    ['jake', 110],
    ['jane', 100],
    ['janet', 50]
  ]

  const requests = testGroup.map(([name, delay]) => fakeApi(name, delay))
  const fastestName: string = await problem(requests)

  expect(fastestName).toEqual('janet')
})

test('c', async () => {
  const testGroup: TestGoup = [
    ['jake', 100],
    ['jane', 100],
    ['janet', 100]
  ]

  const requests = testGroup.map(([name, delay]) => fakeApi(name, delay))
  const fastestName: string = await problem(requests)

  expect(fastestName).toEqual('jake')
})

test('d', async () => {
  const testGroup: TestGoup = [
    ['jake', 23],
    ['jane', -100],
    ['janet', 1]
  ]

  const requests = testGroup.map(([name, delay]) => fakeApi(name, delay))
  const fastestName: string = await problem(requests)

  expect(fastestName).toEqual('jane')
})

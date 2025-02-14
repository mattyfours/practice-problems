import { renderLiquid } from '../../src/lib/utils'
import problem from './problem-5'

const INVALID_INPUT_VALUE = 'INVALID INPUT'

test('a', async () => {
  const answerKey = [
    [1000, '$10.00'],
    [12878, '$128.78'],
    [128755328, '$1,287,553.28'],
    [297632, '$2,976.32'],
    [0, '$0.00'],
    [5, '$0.05'],
    [14, '$0.14'],
    [199, '$1.99'],
    [-199, '-$1.99']
  ]

  const liquidString: string = await problem()

  for (const [original, answer] of answerKey) {
    await renderLiquid(liquidString, { original_number: original })
    const formattedNumberElm = document.querySelector('[data-formatted-number]')
    const formattedNumberString = formattedNumberElm?.textContent?.trim() ?? ''
    console.log(
      `Original Number ${original} \nCorrect Answer: ${answer} \nSubmitted Answer: ${formattedNumberString}`
    )
    expect(formattedNumberString).toEqual(answer)
  }
})
test('b', async () => {
  const answerKey = [
    [250, '$2.50'],
    [1, '$0.01'],
    [205, '$2.05'],
    [2358, '$23.58'],
    [-199, '-$1.99'],
    ['530', '$5.30'],
    ['213530', '$2,135.30'],
    ['-248', '-$2.48'],
    ['-248.00', INVALID_INPUT_VALUE],
    ['2-4800', INVALID_INPUT_VALUE],
    ['a', INVALID_INPUT_VALUE],
    [-199.54, INVALID_INPUT_VALUE],
    ['2135.30', INVALID_INPUT_VALUE]
  ]

  const liquidString: string = await problem()

  for (const [original, answer] of answerKey) {
    await renderLiquid(liquidString, { original_number: original })
    const formattedNumberElm = document.querySelector('[data-formatted-number]')
    const formattedNumberString = formattedNumberElm?.textContent?.trim() ?? ''
    console.log(
      `Original Number ${original} \nCorrect Answer: ${answer} \nSubmitted Answer: ${formattedNumberString}`
    )
    expect(formattedNumberString).toEqual(answer)
  }
})

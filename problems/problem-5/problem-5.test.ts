import { renderLiquid } from '../../src/lib/utils'
import problem from './problem-5'

test('a', async () => {
  const answerKey = [
    [1000, '$10.00'],
    [12878, '$128.78'],
    [128755328, '$1,287,553.28'],
    [297632, '$2,976.32'],
    [0, '$0.00'],
    [5, '$0.05'],
    [14, '$0.14'],
    [199, '$1.99']
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

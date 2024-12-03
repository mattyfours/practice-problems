import { get } from 'http'
import { html, setDomBody, triggerEvent } from '../../src/lib/utils'
import problem from './problem-3'
import { getEventListeners } from 'events'

const createProblemTest = async (
  input: string,
  output: string,
  sortOrder: 'smallToLarge' | 'largeToSmall' | 'alphabetical'
) => {
  setDomBody(input + output)

  const randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
  const randomUpdate = `update_${randomNumber}`

  const inputDiv = document.querySelector('[data-input]')
  const inputDivItems = document.querySelectorAll('[data-input] [data-item]')

  await problem(inputDiv as HTMLElement, sortOrder)

  inputDivItems.forEach((item) => {
    item.setAttribute('data-item-update', randomUpdate)
  })

  const updatedItems = document.querySelectorAll('[data-input] [data-item]')
  const outputItems = document.querySelectorAll('[data-output] [data-item]')

  updatedItems.forEach((item, index) => {
    const updatedAttribute = item.getAttribute('data-item-update')
    expect(updatedAttribute).toBe(randomUpdate)
    expect(item.innerHTML).toBe(outputItems[index]?.innerHTML)
  })

  return true
}

test('a', async () => {
  const inputHTML = html`
    <div data-input>
      <p data-item>This is the longest string</p>
      <p data-item>This is the second longest string</p>
      <p data-item>I'm a shorter string</p>
    </div>
  `

  const outputHTML = html`
    <div data-output>
      <p data-item>I'm a shorter string</p>
      <p data-item>This is the longest string</p>
      <p data-item>This is the second longest string</p>
    </div>
  `

  await createProblemTest(inputHTML, outputHTML, 'smallToLarge')
})

test('b', async () => {
  const inputHTML = html`
    <div data-input>
      <p data-item>This is the longest string</p>
      <p data-item>This is the second longest string</p>
      <p data-item>I'm a shorter string</p>
    </div>
  `

  const outputHTML = html`
    <div data-output>
      <p data-item>This is the second longest string</p>
      <p data-item>This is the longest string</p>
      <p data-item>I'm a shorter string</p>
    </div>
  `

  await createProblemTest(inputHTML, outputHTML, 'largeToSmall')
})

test('c', async () => {
  const inputHTML = html`
    <div data-input>
      <p data-item>C String</p>
      <p data-item>A String</p>
      <p data-item>B String</p>
    </div>
  `

  const outputHTML = html`
    <div data-output>
      <p data-item>A String</p>
      <p data-item>B String</p>
      <p data-item>C String</p>
    </div>
  `

  await createProblemTest(inputHTML, outputHTML, 'alphabetical')
})

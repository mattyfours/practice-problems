import { html, setDomBody, triggerEvent } from '../../src/lib/utils'
import problem from './problem-2'

const createFormAndEvent = async (peopleAges: number[]): Promise<number> => {
  setDomBody(html`
    <form id="loginForm" data-login-form id="nameForm">
      ${peopleAges
        .map(
          (personAge, index: number) => html`
            <input type="number" value="${personAge}" name="age_${index}" />
          `
        )
        .join('')}
    </form>
  `)

  const eventResponse = await triggerEvent(
    document.querySelector('[data-login-form]'),
    'submit',
    problem
  )

  return eventResponse
}

test('a', async () => {
  expect(await createFormAndEvent([54, 65, 29, 44, 22])).toEqual(214)
})

test('b', async () => {
  expect(await createFormAndEvent([54, 65, 29, 44, 54, 22, 65])).toEqual(214)
})

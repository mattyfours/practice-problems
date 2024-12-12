import { html, renderLiquid } from '../../src/lib/utils'
import problem from './problem-4'
import SectionAData from './resources/testASectionData'
import SectionBData from './resources/testBSectionData'

const cleanHtmlString = (htmlString: string) => htmlString.replace(/\s| /g, '')

test('a', async () => {
  const expectedHtml = html`
    <h2>Heading A</h2>
    <ul>
      <li>Info item A 1</li>
      <li>Info item A 2</li>
      <li>Info item A 3</li>
    </ul>
    <h2>Heading B</h2>
    <ul>
      <li>Info item B 1</li>
    </ul>
    <h2>Heading C</h2>
    <ul>
      <li>Info item C 1</li>
      <li>Info item C 2</li>
    </ul>
  `

  const liquidString: string = await problem()
  const liquidHtml = await renderLiquid(liquidString, {
    section: { ...SectionAData }
  })

  expect(cleanHtmlString(liquidHtml)).toEqual(cleanHtmlString(expectedHtml))
})

test('b', async () => {
  const expectedHtml = html`
    <h2>Heading A</h2>
    <ul>
      <li>Info item A 1</li>
      <li>Info item A 2</li>
      <li>Info item A 3</li>
    </ul>
    <h2>Heading B</h2>
    <ul>
      <li>Info item B 1</li>
    </ul>
    <h2>Heading D</h2>
    <ul>
      <li>Info item D 1</li>
      <li>Info item D 2</li>
    </ul>
  `

  const liquidString: string = await problem()
  const liquidHtml = await renderLiquid(liquidString, {
    section: { ...SectionBData }
  })

  expect(cleanHtmlString(liquidHtml)).toEqual(cleanHtmlString(expectedHtml))
})

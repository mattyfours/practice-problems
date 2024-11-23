import { JSDOM } from 'jsdom'

export const pause = (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime))

export const html = String.raw

export const createDom = (htmlString: string) => {
  const dom = new JSDOM(htmlString.toString())
  const document = dom.window.document
  const body = document.body
  const Event = document.defaultView!.Event

  return {
    dom,
    document,
    body,
    Event
  }
}

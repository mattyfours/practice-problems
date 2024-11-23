import { rejects } from 'assert'
import { JSDOM } from 'jsdom'

export const pause = (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime))

export const html = String.raw

export const createDom = (htmlString: string) => {
  const dom = new JSDOM(htmlString.toString())
  const document = dom.window.document
  const body = document.body
  const Event = document.defaultView!.Event

  const triggerEvent = (
    element: HTMLElement | null,
    eventName: string,
    eventFunction: (event: Event) => Promise<any> | any
  ) =>
    new Promise((resolve, reject) => {
      try {
        const listenerResponse = async (event: Event) => {
          event.preventDefault()
          element?.removeEventListener(eventName, listenerResponse)
          const listnerResponse = await eventFunction(event)
          resolve(listnerResponse)
        }

        element?.addEventListener(eventName, listenerResponse)

        element?.dispatchEvent(
          new Event(eventName, {
            bubbles: true,
            cancelable: true
          })
        )
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })

  return {
    dom,
    document,
    body,
    triggerEvent,
    Event
  }
}

import {} from 'jsdom'
import { Liquid } from 'liquidjs'

export const html = String.raw
export const liquid = String.raw
export const gql = String.raw

export const pause = (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime))

export const setDomBody = (htmlString: string): HTMLBodyElement => {
  document.body.innerHTML = htmlString
  return document.body as HTMLBodyElement
}

export const domBodyHtml = (): string => document.body.innerHTML

export const triggerEvent = (
  element: any,
  eventName: string,
  eventFunction: (event: Event) => Promise<any> | any
): any =>
  new Promise((resolve, reject) => {
    try {
      const listenerResponse = async (event: Event) => {
        event.preventDefault()
        element.removeEventListener(eventName, listenerResponse)
        const listnerResponse = await eventFunction(event)
        resolve(listnerResponse)
      }

      element.addEventListener(eventName, listenerResponse)
      element.dispatchEvent(
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

export const renderLiquid = async (
  liquidString: string,
  data: any = {},
  setRenderToDomBody: boolean = true
) => {
  try {
    const engine = new Liquid()
    const engineRender = await engine.parseAndRender(liquidString, data)

    if (setRenderToDomBody) {
      setDomBody(engineRender)
    }

    return engineRender
  } catch (error) {
    console.error(error)
    return null
  }
}

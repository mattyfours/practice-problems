import {} from 'jsdom'

export const pause = (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime))

export const html = String.raw

export const setDomBody = (htmlString: string): HTMLBodyElement => {
  document.body.innerHTML = htmlString
  return document.body as HTMLBodyElement
}

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

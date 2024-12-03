### Description

- Sort p elements in the holderDivElement based on the sortOrder
- Modify the order of the existing elements, do not replace them

### Starting Point

```
export default async function (
  holderDivElement: HTMLElement,
  sortOrder: 'smallToLarge' | 'largeToSmall' | 'alphabetical'
): Promise<HTMLElement> {
  console.log('holderDivElement', holderDivElement.innerHTML)

  return holderDivElement
}

```

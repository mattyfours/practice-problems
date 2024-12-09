### Description

- Sort `<p>` elements in `holderDivElement` based on the `sortOrder` parameter.
- The `<p>` tag will be sorded based on it's contents.
- Modify the order of the existing elements, do not replace them.

`smallToLarge`

- Smallest string to largest string

`largeToSmall`

- Largest string to smallest string

`largeToSmall`

- Strings sorted from A-Z

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

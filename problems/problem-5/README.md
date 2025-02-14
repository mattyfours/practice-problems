### Description

- Money filters will not work, create a custom one to display the formatted dollar values
- Only code inside the liquid template literal can be modified
- Format will always display two digits in the cents
- Format will use commas for longer numbers
- Format will display 0.XX for values less than $1
- Format will include dollor sign
- Filter will only accept full cents, no decimals
- Filter should accept string inputs
- Filter should accept negative number inputs
- Negative numbers wil be formatted as `-$XX.XX`
- Invalid inputs will return a value of `INVALID INPUT`

### Starting Point

```
import { liquid } from '../../src/lib/utils'

export default async function (): Promise<string> {
  const liquidCode = liquid`
    {%- liquid
      assign formatted_number = original_number
    -%}

    <span data-formatted-number>{{ formatted_number }}</span>
  `

  return liquidCode
}
```

### Description

- There is a section with two types of blocks, `heading` and `info`
- Render the blocks using liquid to match the following criteria
- A `heading` block should be rendered in an `h2`
- The following `info` blocks should be rendered in a `<ul>` list
- `heading` blocks with no releated `info` blocks should not be rendered
- `info` blocks will not render if they don't come after a `heading` block
- See section data in `/resources`

Example Output:

```
<h2>Heading A</h2>
<ul>
  <li>Info item A 1</li>
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
```

### Starting Point

```
import { liquid } from '../../src/lib/utils'

export default async function (): Promise<string> {
  const liquidCode = liquid``

  return liquidCode
}
```

### Description

- A submit form event is created that has multiple number input fields.
- Use the event data to grab the sum of all the inputed ages.
- If a age is inputed multiple times, only the first input should count towards the total.

Example Form HTML:

```
<form id="loginForm" data-login-form>
  <input type="number" value="54" name="age_0">
  <input type="number" value="65" name="age_1">
  <input type="number" value="22" name="age_2">
  <input type="number" value="44" name="age_3">
  <input type="number" value="21" name="age_4">
  <input type="number" value="45" name="age_5">
</form>
```

### Starting Point

```
export default async function (event: Event): Promise<number> {
  const form = event.target as HTMLFormElement
  console.log(form.outerHTML)

  return 0
}
```

### Test Names

- `a`
- `b`

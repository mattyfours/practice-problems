# Practice Problems

### Getting Started

- Install Yarn `npm install --global yarn`
- Run `yarn install`
- Run `yarn start -p <PROBLEM_NUMBER> -t <TEST_NAME>`
  - Example `yarn start -p 1 -t a`
- Open a problem file from `./problems/problem-*/problem-*.ts`
- Return solution in the default function

### Commands

- `yarn start`
  - `-p <PROBLEM_NUMBER>` (Required) : Problem numbers match the number in the problems directory
  - `-t <TEST_NAME>` : Test names can be found in a problem README or test file
- `yarn format`

### Notes

- Copilot is disabled by default. To enable it, update the following in `.vscode/settings.json`

```
"github.copilot.enable": {
  "*": false <-- true to enable | false to disabel
}
```

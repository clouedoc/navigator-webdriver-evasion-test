# testing `navigator.webdriver` evasion

See <https://github.com/berstend/puppeteer-extra/issues/490> for more information.

## Installation

`pnpm install`

## Usage

Edit `EVASION_ENABLED` in `index.ts`. Set it to true or false. The console will print the value of `navigator.webdriver` and if the evasion was enabled or not.

To run the script, use `pnpm start`

## License

MIT

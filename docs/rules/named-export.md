# Requires named exports to be documented.

## Rule Details

Examples of **incorrect** code for this rule:

```js
export const maxLength = 1;

export function stripEmoji() {}

const max = 1;
export { max as maxLength };
```

Examples of **correct** code for this rule:

```js
/* Maximum length of an input string. */
export const maxLength = 1;

/* Helper to remove emoji from a string. */
export function stripEmoji() {}

/* Maximum length of an input string. */
const max = 1;
export { max as maxLength };
```

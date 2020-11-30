# Requires default exports to be documented.

## Rule Details

Examples of **incorrect** code for this rule:

```js
const maxLength = 1;
export default maxLength;

export default function stripEmoji() {}
```

Examples of **correct** code for this rule:

```js
/* Maximum length of an input string. */
const maxLength = 1;
export default maxLength;

/* Helper to remove emoji from a string. */
export default function stripEmoji() {}
```

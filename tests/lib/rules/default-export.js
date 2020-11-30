/**
 * @fileoverview TODO
 */
const rule = require('../../../lib/rules/default-export');
const RuleTester = require('eslint').RuleTester;
const parserOptionsMapper = require('../../parserOptionsMapper');
const { errors } = require('../../../lib/constants');

const { defaultExport, defaultExportNamed } = errors;

const ruleTester = new RuleTester();
ruleTester.run('default-export', rule, {
    valid: [
        { code: `/* default export */export default 1;` },
        { code: `/* default export */const foo = 1;export default foo;` },
        { code: `/* default export */let foo = 1;export default foo;` },
        { code: `/* default export */var foo = 1;export default foo;` },
        { code: `/* default export */function foo(){};export default foo;` },
        { code: `/* default export */class Foo{};export default foo;` },
        { code: `/* default export */export default function foo(){}` },
        { code: `/* default export */export default class Foo{}` },
        { code: `/* default export */const foo = 1;export {foo as default};` },
        { code: `/* default export */const foo = 1;const bar = 1;export {foo as default, bar};` },
        { code: `export {default} from './file';` },
        { code: `export {foo as default} from './file';` }
    ].map(parserOptionsMapper),

    invalid: [
        {
            code: `export default 1;`,
            errors: [defaultExport]
        },
        {
            code: `const foo = 1;export default foo;`,
            errors: [defaultExport]
        },
        {
            code: `let foo = 1;export default foo;`,
            errors: [defaultExport]
        },
        {
            code: `var foo = 1;export default foo;`,
            errors: [defaultExport]
        },
        {
            code: `export default function foo(){}`,
            errors: [defaultExport]
        },
        {
            code: `export default class Foo{}`,
            errors: [defaultExport]
        },
        {
            code: `const foo = 1;export {foo as default};`,
            errors: [defaultExportNamed]
        },
        {
            code: `const foo = 1;const bar = 1;export {foo as default, bar};`,
            errors: [defaultExportNamed]
        }
    ].map(parserOptionsMapper)
});

/**
 * @fileoverview TODO
 */
const rule = require('../../../lib/rules/named-export');
const RuleTester = require('eslint').RuleTester;
const parserOptionsMapper = require('../../parserOptionsMapper');
const { errors } = require('../../../lib/constants');

const { namedExport } = errors;

const ruleTester = new RuleTester();
ruleTester.run('named-export', rule, {
    valid: [
        { code: `/* named export */export const foo = 1;` },
        { code: `/* named export */export let foo = 1;` },
        { code: `/* named export */export var foo = 1;` },
        { code: `/* named export */export function foo(){};` },
        { code: `/* named export */export class Foo{};` },
        { code: `/* renamed export */const foo = 1; export {foo as bar};` },
        { code: `/* renamed export */let foo = 1; export {foo as bar};` },
        { code: `/* renamed export */var foo = 1; export {foo as bar};` },
        { code: `/* renamed export */function foo(){}; export {foo as bar};` },
        { code: `/* renamed export */class Foo{}; export {Foo as Bar};` },
        {
            code: `/* renamed and destructured export */const obj = {foo: 1, bar: 2};
export const { foo, bar: renamedBar } = obj;`
        },
        { code: `export * from './file';` },
        { code: `export {foo} from './file';` },
        { code: `export {foo as bar} from './file';` },
        { code: `export {default} from './file';` },
        { code: `const foo = 1;/* named export */export {foo};` },
        { code: `function foo(){};/* renamed export */export {foo as bar};` }
    ].map(parserOptionsMapper),

    invalid: [
        {
            code: `export const foo = 1;`,
            errors: [namedExport]
        },
        {
            code: `export let foo = 1;`,
            errors: [namedExport]
        },
        {
            code: `export var foo = 1;`,
            errors: [namedExport]
        },
        {
            code: `export function foo(){};`,
            errors: [namedExport]
        },
        {
            code: `export class Foo{};`,
            errors: [namedExport]
        },
        {
            code: `const foo = 1; export {foo as bar};`,
            errors: [namedExport]
        },
        {
            code: `let foo = 1; export {foo as bar};`,
            errors: [namedExport]
        },
        {
            code: `var foo = 1; export {foo as bar};`,
            errors: [namedExport]
        },
        {
            code: `function foo(){}; export {foo as bar};`,
            errors: [namedExport]
        },
        {
            code: `class Foo{}; export {Foo as Bar};`,
            errors: [namedExport]
        },
        {
            code: `const obj = {foo: 1, bar: 2}; export const { foo, bar: renamedBar } = obj;`,
            errors: [namedExport]
        }
    ].map(parserOptionsMapper)
});

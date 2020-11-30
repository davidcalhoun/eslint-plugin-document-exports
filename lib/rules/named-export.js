/**
 * @fileoverview TODO
 * @author David Calhoun
 */
const { errors, defaultRuleSchema } = require('../constants');
const { getBasicRuleTester } = require('../utils');

module.exports = {
    meta: {
        docs: {
            description: 'Requires named exports to be documented by a preceding comment.',
            category: 'Possible Errors',
            recommended: true,
            url: 'TODO'
        },
        fixable: null,
        schema: defaultRuleSchema
    },

    create: function (context) {
        return {
            ExportNamedDeclaration: getBasicRuleTester(context, errors.namedExport.message)
        };
    }
};

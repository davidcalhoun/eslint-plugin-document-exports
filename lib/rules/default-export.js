/**
 * @fileoverview TODO
 * @author David Calhoun
 */
const { errors, defaultRuleSchema } = require('../constants');
const { getBasicRuleTester } = require('../utils');

module.exports = {
    meta: {
        docs: {
            description: 'Requires default exports to be documented by a preceding comment.',
            category: 'Possible Errors',
            recommended: true,
            url: 'TODO'
        },
        fixable: null,
        schema: defaultRuleSchema
    },

    create: function (context) {
        return {
            ExportNamedDeclaration: getBasicRuleTester(context, errors.defaultExportNamed.message),
            ExportDefaultDeclaration: getBasicRuleTester(context, errors.defaultExport.message)
        };
    }
};

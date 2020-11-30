module.exports = {
    defaultRuleSchema: [
        {
            enum: ['always', 'never']
        },
        {
            type: 'object',
            properties: {},
            additionalProperties: false
        }
    ],
    errors: {
        namedExport: {
            message: 'Named exports must be documented by a comment.',
            type: 'ExportNamedDeclaration'
        },
        defaultExport: {
            message: 'Default exports must be documented by a comment.',
            type: 'ExportDefaultDeclaration'
        },
        defaultExportNamed: {
            message: 'Default exports must be documented by a comment.',
            type: 'ExportNamedDeclaration'
        }
    }
};

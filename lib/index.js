/**
 * @fileoverview Enforces code comments for exported code.
 * @author David Calhoun
 */
'use strict';

const requireIndex = require('requireindex');

module.exports = {
    rules: requireIndex(`${__dirname}/rules`),
    configs: {
        recommended: {
            rules: {
                'document-exports/named-export': 'warn',
                'document-exports/default-export': 'warn'
            }
        },
        recommendedWithErrors: {
            rules: {
                'document-exports/named-export': 'error',
                'document-exports/default-export': 'error'
            }
        }
    }
};

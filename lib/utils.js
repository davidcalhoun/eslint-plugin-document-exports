/**
 * Detects aggregating modules ("export... from '.file'") text pattern.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 */
const isAggregateFromFile = (str) => str.match(/export\s{.+}\sfrom\s/gi);

/**
 * Shared code to detect comments and emit a custom errorMessage when not found.
 */
const getBasicRuleTester = (context, errorMessage) => {
    return (node) => {
        const comments = context.getSourceCode().getAllComments();
        const fileExport = isAggregateFromFile(context.getSourceCode().text);

        if (comments.length === 0 && !fileExport) {
            context.report({
                node,
                message: errorMessage
            });
        }
    };
};

module.exports = { isAggregateFromFile, getBasicRuleTester };

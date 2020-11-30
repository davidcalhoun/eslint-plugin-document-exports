const defaultParserOptions = {
    ecmaVersion: 2020
};

module.exports = function ({
    code,
    errors,
    options = [],
    parserOptions = { ecmaVersion: 2020, sourceType: 'module' }
}) {
    return {
        code,
        errors,
        options,
        parserOptions: {
            ...defaultParserOptions,
            ...parserOptions
        }
    };
};

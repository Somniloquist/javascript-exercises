const snakeCase = function(str) {
    if (isCamelCase(str)) {
        return camelToSnake(str);
    }

        return str.toLowerCase().replace(/[\s]/g, '_')
                                .replace(/[^\-^\w]/g, '')
                                .replace(/\-/g, '_');
}

const camelToSnake = function(str) {
        let snakeCase = str;
        let position = 0;
        while (isCamelCase(snakeCase)) {
            position = snakeCase.search(/[a-z][A-Z]/) + 1;
            snakeCase = snakeCase.slice(0, position) + '_' + snakeCase.slice(position);
        }
        return snakeCase.toLowerCase();
}

const isCamelCase = function(str) {
    return /[a-z][A-Z]/.test(str);
}

const isWTFCase = function(str) {
    return /\b\.{2}\b/.test(str);
}

module.exports = snakeCase


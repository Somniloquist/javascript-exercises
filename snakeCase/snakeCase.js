const snakeCase = function(str) {
    if (isCamelCase(str)) {
        let snakeCase = str;
        let position = 0;
        while (isCamelCase(snakeCase)) {

            position = snakeCase.search(/[a-z][A-Z]/) + 1;
            snakeCase = snakeCase.slice(0, position) + '_' + snakeCase.slice(position);
            console.log(snakeCase);
        }

        return snakeCase.toLowerCase();

    }

        return str.toLowerCase()
                                .replace(/[\s]/g, '_')
                                .replace(/[^\w]/g, '')
                                .replace(/[-]/g, '_');
}

const isCamelCase = function(str) {
    return /[a-z][A-Z]/.test(str);
}

module.exports = snakeCase


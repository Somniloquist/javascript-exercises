const caesar = function(str, shift) {
    let caesar = [];
    str.split('').forEach(char => {
        caesar.push(String.fromCharCode(normalizeShift(char, shift)));
    });
    return caesar.join('');
}

const normalizeShift = function(str, shift) {
    return str.charCodeAt() + shift % 26
}

module.exports = caesar

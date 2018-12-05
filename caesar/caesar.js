const caesar = function(str, shift) {
    return String.fromCharCode(normalizeShift(str, shift));
}

const normalizeShift = function(str, shift) {
    return str.charCodeAt() + shift % 26
}

module.exports = caesar

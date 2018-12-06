const caesar = function(str, shift) {
    if ( shift === 0) return str;

    let caesar = [];
    str.split('').forEach(char => {
        /[\w]/.test(char) ? caesar.push(String.fromCharCode(normalizeShift(char, shift))) : caesar.push(char);
    });
    return caesar.join('');
}

const normalizeShift = function(str, shift) {
    const code = str.charCodeAt();
    // if str <= 0 do the opposite
    if (str === str.toUpperCase()) {
        return (code - 'A'.charCodeAt() + shift) % 26 + 'A'.charCodeAt();
    }
    return (code - 'a'.charCodeAt() + shift) % 26 + 'a'.charCodeAt();
}

module.exports = caesar

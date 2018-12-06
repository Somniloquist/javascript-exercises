const caesar = function(str, shift) {
    let caesar = [];
    str.split('').forEach(char => {
        /[\w]/.test(char) ? caesar.push(String.fromCharCode(normalizeShift(char, shift))) : caesar.push(char);
    });
    return caesar.join('');
}

const normalizeShift = function(str, shift) {
    const normal = str.charCodeAt() + shift % 26;
    return (normal >= 65 && normal <= 90) || (normal >= 97 && normal <= 122) ?
    normal : 
    normal - 26;
}

module.exports = caesar

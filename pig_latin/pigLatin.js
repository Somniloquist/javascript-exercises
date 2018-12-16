function translate(string) {
	return string
	.split(' ')
	.map(word => {
		const index = indexOfVowel(word);
		const start = word.slice(0, index);
		const end = word.slice(index);
		return `${end}${start}ay`;
	})
	.join(' ');

}

function indexOfVowel(word) {
	const vowels = word.match(/[aeiou]/g);
	if (vowels[0] === 'u' && word[word.indexOf(vowels[0]) - 1] === 'q') {
		return word.indexOf(vowels[1]);
	}
	return word.indexOf(vowels[0]);
}

module.exports = {
	translate
}


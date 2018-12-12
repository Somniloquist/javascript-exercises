function translate(word) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let translated = word.split('');

	if (vowels.includes(word[0])) {
		translated.push('ay');
		translated = translated.join('');
	}

	return translated;
}


module.exports = {
	translate
}


function translate(word) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let translated = word.split('');

	// starts with a vowel
	if (vowels.includes(word[0])) {
		translated.push('ay');
		translated = translated.join('');
	//starts with consonant
	} else {
		translated.push(translated[0] + 'ay');
		translated.shift();
		translated = translated.join('');
	}



	return translated;
}


module.exports = {
	translate
}


function translate(str) {
	const words = str.split(' ');
	let translated = [];

	words.forEach(word => {
		let temp = word.split('');
		// starts with a vowel
		if (!isConsonant(word, 1)) {
			temp.push('ay');
		// starts with 3 consonants
		} else if (word[0] === 'q' && word[1] === 'u') {
			temp.push(word[0] + word[1] + 'ay');
			temp.shift();
			temp.shift();
		} else if (word[1] === 'q' && word[2] === 'u') {
			temp.push(word[0] + word[1] + word[2]+ 'ay');
			temp.shift();
			temp.shift();
			temp.shift();
		} else if (isConsonant(word, 3)) {
			temp.push(word[0] + word[1] + word[2] + 'ay');
			temp.shift()
			temp.shift();
			temp.shift();
		// starts with 2 consonants
		} else if (isConsonant(word, 2)) {
			temp.push(word[0] + word[1] + 'ay');
			temp.shift();
			temp.shift();
		//starts with consonant
		} else {
			temp.push(word[0] + 'ay');
			temp.shift();
		}

		translated.push(temp.join(''));
	});

	return translated.join(' ');
}

// returns true if all characters up the index are consonants
function isConsonant(word, index) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let i = 0; i < index; i++) {
		if (vowels.includes(word[i])) {
			return false;
		}
	}
	return true;
}

module.exports = {
	translate
}


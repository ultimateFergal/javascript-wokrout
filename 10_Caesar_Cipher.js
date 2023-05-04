// We'll taken it to parameters a string and a number.
// The objective of our Caesar Cipher Algorithm is to shift every letter in our given string by the number
// that is passed in.
// So for example if we passed in the string zookeeper and the number two we should get the String b q
// q m g g r g t returned because the letter Z shifted forward to places in the alphabet is the letter
// B.

function caesarCipher(str, num) {
    num = num % 26;
    const lowerCaseString = str.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let newString = '';
    
    for (let i = 0; i < lowerCaseString.length; i++) {
        const currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString +=currentLetter;
            continue;
        }

        const currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;

        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26+ newIndex;

        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else newString += alphabet[newIndex]
    }

    return newString;
}

console.log(caesarCipher('Zoo Keeper', 2)); //Bqq Mggrgt

console.log(caesarCipher('Big Car', -16)); //Lsq Mkb

console.log(caesarCipher('Javascript', -900)); //Tkfkcmbszd
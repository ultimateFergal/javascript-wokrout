// this algorithm will take in a
// string as an argument and return true if the string is a palindrome and return false.
// If the string is not a palindrome if you are not familiar with what a palindrome is it is any word or
// phrase that is spelled the same way.
// Both backward and forward.
// For example the term racecar is a palindrome because it spells out the same term whether it is whether
// it is written forward or if it is written backward another example of a palindrome is the phrase MADAM
// I'M ADAM BECAUSE IT'S THE SAME.
// Both forwards and backwards there are many ways to accomplish this functionality and one way is with
// the javascript regular expressions.

function isPalindrome(string) {
    string = string.toLowerCase();
    let charactersArr = string.split('');
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');// in the case of including a character like '

    let lettersArr = [];
    charactersArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
    })

    if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false
}

console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("coding javascript"));
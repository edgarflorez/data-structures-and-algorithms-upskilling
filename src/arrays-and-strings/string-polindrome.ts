/*
Implement a function isPalindrome that checks if a given string is a palindrome (reads the same forwards and backwards).
- Ignore case sensitivity.
- Consider only alphanumeric characters (ignore spaces and punctuation).

Examples:
```
console.log(isPalindrome("Racecar"));         // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello"));           // false
```
*/

export function isStringPolindrome(value: string): boolean {
	const baseArray = value.split('')
		.filter((character) => /^[a-zA-Z0-9]+$/.test(character))
		.map((char) => char.toLowerCase());
	const comparisonArray = [...baseArray].reverse();
	const arrayTest = baseArray.toString() === comparisonArray.toString();
	return arrayTest;
}

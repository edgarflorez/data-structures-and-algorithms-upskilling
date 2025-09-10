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
	if (typeof value !== 'string') {
		throw new Error("TypeError: non-string input");
	}

	// First iteration
	// use the initial value by including only alphanumeric values,
	// then create a new copy of that reversed array and compare
	// const baseArray = value.split('')
	// 	.filter((character) => /^[a-zA-Z0-9]+$/.test(character))
	// 	.map((char) => char.toLowerCase());
	// const comparisonArray = [...baseArray].reverse();
	// const isPolindrome = baseArray.toString() === comparisonArray.toString();

	let stringA = ""
	let stringB = ""

	for( let i = 0; i < value.length; i++){
		const char = value[i].toLowerCase();
		if(/^[a-zA-Z0-9]+$/.test(char)) {
			stringA += char;
			stringB = char + stringB;
		}
	}

	const isPolindrome = stringA === stringB;

	return isPolindrome;
}

// Analysis
// Time Complexity: O(n), we need to traverse all the characters on the string to test if is a polidrome.
// Space Complexity: 0(1), we need some auxiliary space for testing variables and the final test.

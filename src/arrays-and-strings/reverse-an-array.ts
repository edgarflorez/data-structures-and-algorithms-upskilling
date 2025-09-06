/*
Prompt:
- Implement a function reverseArray that reverses an array in place.

- You cannot use built-in methods like reverse().

- The function should modify the input array directly instead of returning a new one.

Example:
```
let arr = [1, 2, 3, 4, 5];
reverseArray(arr);
console.log(arr); // [5, 4, 3, 2, 1]
```
*/

export default function reverseArray<T>(arr:T[]): T[] {
	console.log(!Array.isArray(arr))
	if (!Array.isArray(arr)) {
		throw new Error("TypeError: non-array input");
	}
	let headIndex = 0
	let tailIndex = arr.length - 1;
	while(headIndex <= tailIndex) {
		// Using explicit variables
		// const headValue = arr[headIndex];
		// const tailValue = arr[tailIndex];
		// arr[headIndex] = tailValue;
		// arr[tailIndex] = headValue;

		// Array destructuring
		[arr[headIndex], arr[tailIndex]] = [arr[tailIndex], arr[headIndex]]

		headIndex++;
		tailIndex--;
	}
	return arr;
}

let arr: number[] = [1, 2, 3, 4, 5];
let reversed = reverseArray(arr);
console.log('original', arr);
console.log('reversed', reversed);

// Analysis
// time complexity: O(n), despite traverse half of the array ~n/2 swaps.
// space complexity: O(1);
// +-------------------+-------------+-------------+-------------+
// | Approach          | Time        | Space       | Mutates?    |
// +-------------------+-------------+-------------+-------------+
// | In-place swap     | O(n)        | O(1)        | Yes         |
// | Non in-place copy | O(n)        | O(n)        | No          |
// | arr.reverse()     | O(n)        | O(1)        | Yes         |
// +-------------------+-------------+-------------+-------------+

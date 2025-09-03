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

export default function reverseArray(array:number[]): number[] {
	return array;
}


let arr: number[] = [1, 2, 3, 4, 5];
let reversed = reverseArray(arr);
console.log('original', arr);
console.log('reversed', reversed);


console.log("HI ED.");

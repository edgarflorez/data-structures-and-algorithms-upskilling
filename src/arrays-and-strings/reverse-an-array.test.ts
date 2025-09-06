import { describe, it, expect } from "vitest";

import reverseArray from "./reverse-an-array";

describe("The reverse array", () => {
	it("reverse an array, even list", () => {
		const arr = [1, 2, 3, 4, 1];
		const ref = [1, 4, 3, 2, 1];

		const reversed = reverseArray(arr);

		expect(reversed).toStrictEqual(ref);
	});

	it("reverse an array, large and long list", () => {
		const arr = [30, 1, 2, 3, 4, 1, 10, 5];
		const ref = [5, 10, 1, 4, 3, 2, 1, 30];

		const reversed = reverseArray(arr);

		expect(reversed).toStrictEqual(ref);
	});
	
	it("reverse an array of negative values", () => {
		const arr = [-1, -2, -3];
		const ref = [-3, -2, -1];

		const reversed = reverseArray(arr);

		expect(reversed).toStrictEqual(ref);
	});

	it("reverse an array of string values", () => {
		const arr = ["a", "b", "c"];
		const ref = ["c", "b", "a"];

		const reversed = reverseArray(arr);

		expect(reversed).toStrictEqual(ref);
	});

	it("throw and error on non array structure", () => {
		const arr = "hello wold!";
		const ref = "TypeError: non-array input";

		const reversed = () => reverseArray(arr);

		expect(reversed).toThrow(ref);
	});
});

import { describe, it, expect } from "vitest";

import reverseArray from "./reverse-an-array";

describe("The reverse array", () => {
	it("reverse a given array", () => {
		let arr = [1, 2, 3, 4];
		let ref = [4, 3, 2, 1];

		expect(reverseArray(arr)).toStrictEqual(ref);
	});
});

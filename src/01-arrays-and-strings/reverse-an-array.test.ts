import reverseArray from "./reverse-an-array.js";

describe("The reverse array", () => {
	it("reverse an array, even list", () => {
		const input = [1, 2, 3, 4, 1];
		const expected = [1, 4, 3, 2, 1];

		const result = reverseArray(input);

		expect(result).toStrictEqual(expected);
	});

	it("reverse an array, large and long list", () => {
		const input = [30, 1, 2, 3, 4, 1, 10, 5];
		const expected = [5, 10, 1, 4, 3, 2, 1, 30];

		const result = reverseArray(input);

		expect(result).toStrictEqual(expected);
	});

	it("reverse an array of negative values", () => {
		const input = [-1, -2, -3];
		const expected = [-3, -2, -1];

		const result = reverseArray(input);

		expect(result).toStrictEqual(expected);
	});

	it("reverse an array of string values", () => {
		const input = ["a", "b", "c"];
		const expected = ["c", "b", "a"];

		const result = reverseArray(input);

		expect(result).toStrictEqual(expected);
	});

	it("throw and error on non array structure", () => {
		const input = "hello wold!";
		const expected = "TypeError: non-array input";

		const result = () => reverseArray(input);

		expect(result).toThrow(expected);
	});
});

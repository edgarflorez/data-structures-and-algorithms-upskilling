import reverseArray from "./reverse-an-array.js";

describe("The reverse array", () => {
	it("reverse an array, even list", () => {
		const input = [1, 2, 3, 4, 1];
		const expectedResult = [1, 4, 3, 2, 1];

		const reversed = reverseArray(input);

		expect(reversed).toStrictEqual(expectedResult);
	});

	it("reverse an array, large and long list", () => {
		const input = [30, 1, 2, 3, 4, 1, 10, 5];
		const expectedResult = [5, 10, 1, 4, 3, 2, 1, 30];

		const reversed = reverseArray(input);

		expect(reversed).toStrictEqual(expectedResult);
	});

	it("reverse an array of negative values", () => {
		const input = [-1, -2, -3];
		const expectedResult = [-3, -2, -1];

		const reversed = reverseArray(input);

		expect(reversed).toStrictEqual(expectedResult);
	});

	it("reverse an array of string values", () => {
		const input = ["a", "b", "c"];
		const expectedResult = ["c", "b", "a"];

		const reversed = reverseArray(input);

		expect(reversed).toStrictEqual(expectedResult);
	});

	it("throw and error on non array structure", () => {
		const input = "hello wold!";
		const expectedResult = "TypeError: non-array input";

		const reversed = () => reverseArray(input);

		expect(reversed).toThrow(expectedResult);
	});
});

import { isStringPolindrome } from "./string-polindrome.js";

describe("Is string polindrome", () => {
	it('checks for a valid polidrome, single word', () => {
		const input = "Racecar";

		const result = isStringPolindrome(input);

		expect(result).toBe(true);

	})

	it('checks for a valid polidrome, large word with punctuation and spaces', () => {
		const input = "A man, a plan, a canal: Panama";

		const result = isStringPolindrome(input);

		expect(result).toBe(true);

	})

	it('checks for a invalid polidrome', () => {
		const input = "Hello";

		const result = isStringPolindrome(input);

		expect(result).toBe(false);

	})

	it('throws and error for non-string parameters', () => {
		const input = ["Hello"];
		const expected = "TypeError: non-string input";

		const result = () => isStringPolindrome(input);

		expect(result).toThrow(expected);
	})
})

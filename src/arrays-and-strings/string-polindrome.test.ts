import { isStringPolindrome } from "./string-polindrome";

describe("Is string polindrome", () => {
	it('checks for a valid polidrome, single word', () => {
		const input = "Racecar";

		const isPolindrome = isStringPolindrome(input);

		expect(isPolindrome).toBe(true);

	})

	it('checks for a valid polidrome, large word with punctuation and spaces', () => {
		const input = "A man, a plan, a canal: Panama";

		const isPolindrome = isStringPolindrome(input);

		expect(isPolindrome).toBe(true);

	})

	it('checks for a invalid polidrome', () => {
		const input = "Hello";

		const isPolindrome = isStringPolindrome(input);

		expect(isPolindrome).toBe(false);

	})
})

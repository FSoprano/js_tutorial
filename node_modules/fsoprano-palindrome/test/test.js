let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
	describe("#palindrome", function() {
		it("should return false for a non-palindrome", function() {
			let nonPalindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
		});
		it("should return true for a plain palindrome", function() {
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});
		
		it("should return true for a mixed-case palindrome", function() {
			let mixedPalindrome = new Phrase("RaceCar");
			assert(mixedPalindrome.palindrome());
		});
		
		it("should return false for an empty string", function() {
			let emptyPhrase = new Phrase("");
			assert(!emptyPhrase.palindrome());
    });
		// Pending tests (to be completed):
		it("should return true for a bla bla palindrome");

	});
	
	describe("#letters", function() {
		it("should return true for a palindrome with punctuation", function() {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			// assert(punctuatedPalindrome.letters() === "MadamImAdam");
			// We can use a native implementation for this kind of comparison.
			// This gives more explicit error messages than the direct comparison:
			assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
		});
	});
});
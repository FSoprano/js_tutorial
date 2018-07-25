let Phrase = require("fsoprano-palindrome");

function palindromeTester() {
	let string = prompt("Please enter a string for palindrome testing:");
	// alert(new Phrase(string).palindrome());

	let phrase = new Phrase(string);
	let palindromeResult = document.querySelector("#palindromeResult");


	if (phrase.palindrome()) {
	  palindromeResult.innerHTML = `<strong>"${phrase.content}" is a palindrome!</strong>`;
	} else {
	  palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
	};
};

document.addEventListener("DOMContentLoaded", function() {
	let button = document.querySelector("#palindromeTester");
	
	button.addEventListener("click", function() {
		palindromeTester();
	});
	// An exercise (does not work with the palindromeResult.innerHTML construction):
	// button.addEventListener("click", palindromeTester());
});
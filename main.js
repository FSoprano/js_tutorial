let Phrase = require("fsoprano-palindrome");

function palindromeTester(event) {
	event.preventDefault(); //Default for submit is to send stuff to a server, which we don't have.
	// Old solution with prompt: let string = prompt("Please enter a string for palindrome testing:");
	// alert(new Phrase(string).palindrome());

	let phrase = new Phrase(event.target.phrase.value); // event.target is the form element with the name "phrase".
	let palindromeResult = document.querySelector("#palindromeResult");


	if (phrase.palindrome()) {
	  palindromeResult.innerHTML = `<strong>"${phrase.content}" is a palindrome!</strong>`;
	} else {
	  palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
	};
};

document.addEventListener("DOMContentLoaded", function() {
	let button = document.querySelector("#palindromeTester");
	button.addEventListener("submit", function() {
		palindromeTester(event);
	});
	/* Used in chapter 8.3:
	button.addEventListener("click", function() {
		palindromeTester();
	});
	*/
	// An exercise (does not work with the palindromeResult.innerHTML construction):
	// button.addEventListener("click", palindromeTester());
});
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"fsoprano-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
};

function Phrase(content) {
  this.content = content;
  this.processedContent = function processedContent() {
	 
	return this.letters().toLowerCase();
	  
	// A statement that will fail testing:
    // return this.content
	
  };
  // Returns the letters in the content:
  this.letters = function letters() {
    // return this.content;   stubbing not yet completed functions
	// is also a good way to get more explicit test messages.
	/*
	let theLetters = [];
	const letterRegex = /[a-zA-Z]/i;
    // for (let i = 0; i < this.content.length; i++) {
	// Replacing the for loop:
	Array.from(this.content).forEach(function(character) {
	  // Not needed anymore:
	  // let character = this.content.charAt(i);
      if (character.match(letterRegex)) {
        theLetters.push(character);
      };
    });
    return theLetters.join(""); */
	// even better:
	const letterRegex = /[a-zA-Z]/i;
	return Array.from(this.content).filter(c => c.match(letterRegex)).join("");
	};
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  };
};

},{}]},{},[1]);

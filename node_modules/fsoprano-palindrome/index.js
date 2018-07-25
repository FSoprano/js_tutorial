
// Listing 77: Exporting a module.
// ~/repos/palindrome/index.js

module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
  // A statement that will fail testing:
  // return Array.from(this).reverse()
  
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
	
  // A statement that will fail testing:
  // this.content = this.processedContent;
  
    // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
	 
	return this.letters().toLowerCase();
	  
	// A statement that will fail testing:
    // return this.content
	
  }
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
	return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }


  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}


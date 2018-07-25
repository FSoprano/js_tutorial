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

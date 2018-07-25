// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
/* Original function, moved into Phrase:
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
*/

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  };
  // Exercise:
  this.louder = function louder() {
    let loudContent = this.content.toUpperCase();
	return loudContent;
  }; 
}

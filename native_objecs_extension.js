
// Adds `reverse` to all strings:
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
};

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  };
}



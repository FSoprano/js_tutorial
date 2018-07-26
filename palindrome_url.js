let request = require("request");
let Phrase = require("fsoprano-palindrome");
let url = 'https://cdn.learnenough.com/phrases.txt'

/* Textbook example:
request(url, function(error, response, body) {
  body.split("\n").forEach(function(line) {
    phrase = new Phrase(line);
    if (phrase.palindrome()) {
      console.log("palindrome detected:", line);
    }
  });
});
*/
// Exercise:
request(url, function(error, response, body) {
  let lines = body.split("\n");
  let palindromes = lines.filter(line => {
	  return line;
  });

  palindromes.forEach(function(palindrome) {
    console.log("palindrome detected:", palindrome);
  });
});
// Output is the same as textbook example.
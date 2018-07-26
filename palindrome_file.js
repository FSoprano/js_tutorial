let fs = require("fs");
let Phrase = require("fsoprano-palindrome");

let text = fs.readFileSync("phrases.txt", "utf-8");
text.split("\n").forEach(function(line) {
  let phrase = new Phrase(line);
  if (phrase.palindrome()) {
    console.log("palindrome detected:", line);
	fs.appendFileSync("palindromes.txt", line + "\n");
  }
});


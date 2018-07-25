let Phrase = require("fsoprano-palindrome");
let string = prompt("Please enter a string for palindrome testing:");
// alert(new Phrase(string).palindrome());

let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
};
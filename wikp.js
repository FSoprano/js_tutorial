// Returns the paragraphs from a Wikipedia link, stripped of reference numbers.

let request = require("request");
let url = process.argv[2];
if (!url) {
	console.log("No URL given. Exiting ...");
	process.exit();
} else {
	// console.log(url); to test whether we can pass an URL from the command line.
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;

  request(url, function(error, response, body) {
    // Simulate a Document Object Model.
    let { document } = (new JSDOM(body)).window;
    // Select all <p>s in the DOM created by using jsdom:
    let paragraphs = document.querySelectorAll("p");
    // Grabs all unwanted references, which use the CSS class .reference in the wikipedia article:
    let references = document.querySelectorAll(".reference");
    // Remove the references :
    references.forEach(function(reference) {
      reference.remove();
    });
    // Note that references is not an array; it's a list of DOM nodes. However, it can be iterated through 
    // using forEach, just like an array.

    // Print out all of the paragraphs. This works as follows because each <p> has a property called 
    // textContent, which, if accessed, returns the text inside the <p>s.
    paragraphs.forEach(function(paragraph) {
      console.log(paragraph.textContent);
    });
  });
};


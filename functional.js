let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
};

function urlify(string) {
	return string.toLowerCase().split(/\s+/).join('-');
};

function functionalUrls(elems) {
	return elems.map(state => urlify(state));
};
console.log(imperativeUrls(states));
console.log("\n");
console.log("Using the map function:");
console.log(functionalUrls(states));
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Exercise: return the Dakotas

function extractDakotas(elements) {
	return elements.filter(element => element.includes("Dakota")) 
	&& elements.filter(element => element.split(/\s+/).length === 2);
	
}
console.log(extractDakotas(states));
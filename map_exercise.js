let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


function urlify(string) {
	return string.toLowerCase().split(/\s+/).join('-');
};

function functionalUrls(elems) {
	return elems.map(state => `https://example.com/${urlify(state)}`);
};

console.log(functionalUrls(states));

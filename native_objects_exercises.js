
// Exercise 1: Check if a string is empty or consists of blanks only.
String.prototype.blank = function() {
	
    return !!(this.match(/^\s+$/)) || this.length === 0;
};

// Exercise 2: Using whichever method you prefer (direct indexing or slicing), 
// add a last method to the Array object prototype that returns the last 
// element of an array.

Array.prototype.last = function() {
	// direct indexing: console.log(this[this.length -1]);
	return this.slice(-1);
}





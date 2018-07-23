const functionalLengths = function(elements) {
  return elements.reduce( function(lengths, element) {
      lengths[element] = element.length; 
      return lengths;}, {});
};
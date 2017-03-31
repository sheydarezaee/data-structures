var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	
};

setPrototype.contains = function(item) {
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

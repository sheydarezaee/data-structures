var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend (newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
	var result = false;


	var help = function (obj) {
		//check if there is children inside  
		if (obj.value === target) {
			result = true;
		}
		obj.children.forEach(function(child) {
			help(child);
		});
	}

	help(this);

	return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

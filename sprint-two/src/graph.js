

// Instantiate a new graph
var Graph = function() {
	this.storage = {};
	this.size = 0; 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.storage[node] = {};
	this.size++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	// return this.storage[node] !== undefined ? true : false;
	return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.storage[node];

	for (var key in this.storage) {
		if(this.storage[key][node]) {
			delete this.storage[key][node];
		}
	}
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return this.storage[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.storage[fromNode][toNode] = true;
	this.storage[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	delete this.storage[fromNode][toNode];
	delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var key in this.storage) {
		cb(key);
	}
};
// callback: connect to 5:
// connects each node to 5

/*
 * Complexity: What is the time complexity of the above functions?
 */

// It is an undirected graph. It does not have to be 'connected'.
// An .addNode() method that takes a new node and adds it to the graph
// A .contains() method that takes any node and returns a boolean 
// reflecting whether it can be found in the graph
// A .removeNode() method that takes any node and removes it from the 
// graph, if present. All edges connected to that Node are removed as
 // well.
// An .addEdge() method that creates a edge (connection) between two 
// nodes if they both are present within the graph
// A .hasEdge() method that returns a boolean reflecting whether or 
// not two nodes are connected
// A .removeEdge() method that removes the connection between two nodes
// A .forEachNode() method that traverses through the graph, calling a 
// passed in function once on each node























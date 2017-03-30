var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.count = 0; //{count:0, storage:{}}
  stack.storage = {};

  extend(stack, stackMethods);
  return stack;

};	

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var stackMethods = {
	push : function(value) {
		// var value = this.value;          // count = 0 storage = {}
		this.count++;                       // push a >> count = 1 storage = {1:a}
		this.storage[this.count] = value;   //
	},
	//pop: {}
	pop : function() {
		if(this.count > 0) {
			var result = this.storage[this.count]; // storage = {1:a}			                                       // count = 0
			delete this.storage[this.count];
			this.count--;          // delete storage[0]
			return result;
		}
		else {
			return result;
		}
	},
	//size: {}
	size : function() {
		return this.count;
	}
};



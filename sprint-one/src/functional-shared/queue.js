var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//declare a variable = an object
var queue = {};

queue.count = 0;
queue.storage = {};

//extend the methods on the queue object
extend (queue, queueMethods);

return queue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
	//methods are the key-value pairs
	enqueue : function(value) {					
		//create new keys in storage object
		this.count++;
		this.storage[this.count] = value;	//count = 0 
		return this.storage;
	},
	dequeue : function() {
		//remove the keys from storage object (from the beginning)
		if(this.count > 0) {
			var result = this.storage[this.count];
			delete this.storage[this.count];
			this.count--;
			return result;
		}
		else {
			return result;
		}
	},
	size : function() {
		return this.count;
	}
};



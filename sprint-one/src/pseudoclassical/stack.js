var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
	this.count++;
	this.storage[this.count] = value;
};

Stack.prototype.pop= function() {
	if(this.count > 0) {
		var result = this.storage[this.count]; // storage = {1:a}			                                       // count = 0
		delete this.storage[this.count];
		this.count--;          // delete storage[0]
		return result;
	}
	else {
		return result;
	}
};

Stack.prototype.size= function() {
	return this.count;
};


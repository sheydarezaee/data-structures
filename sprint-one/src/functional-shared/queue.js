var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//declare a variable = an object
var queue = {};

queue.count = 0;
queue.storage = {};
queue.firstKeyNumber = 1;

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
	//methods are the key-value pairs                           we star with s= {} c = 0 f = 1    now we have s = {} c = 0 f = 2
	enqueue : function(value) {					                //enqueue('a')                    enqueue('b')
		//create new keys in storage object                      
		this.count++;                                           //count = 1                       c = 1
		this.storage[this.count] = value;	                    //storage = {1:a}                 s = {1: b}
		return this.storage;                                    //return {1:a}                    return {1: b}
	},
	dequeue : function() {
		//remove the keys from storage object (from the beginning 
		if(this.count > 0) {                                      // dequeue()                    dequeue()           
		  var result = this.storage[this.firstKeyNumber];         // r = a                        r = undefined, it looks for result[2], should be b
		  delete this.storage[this.firstKeyNumber];               // storage = {}                 same, tries to delete storage[2], should delete storage[1];  
		  this.count--;
		  if (storage[1] !== undefined) {
            this.firstKeyNumber++; 
		  }                                           // c = 0          
		                                     // f = 2                
          
          return result;
			/*
			var result = this.storage[this.count];
			delete this.storage[this.count];
			this.count--;
			return result;
			*/
		}
		else {
			return result;
		}
	},
	size : function() {
		return this.count;
	}
};



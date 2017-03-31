var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.count = 0;
this.storage = {};
this.firstKeyNumber = 1;

};

Queue.prototype.enqueue = function(value) {                    
	this.count++;                                                            
	this.storage[this.count] = value;	                                
	return this.storage;                                              
};

Queue.prototype.dequeue = function() {
		
	if (this.count > 0) {                                                     
		var result = this.storage[this.firstKeyNumber];         
		delete this.storage[this.firstKeyNumber];                
		this.count--;
		if (this.storage[1] !== undefined) {
    		this.firstKeyNumber++; 
    	}                                            
    	return result;
	}
	else {
		return result;
	}
};

Queue.prototype.size = function() {
	return this.count;
};
























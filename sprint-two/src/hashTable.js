
var HashTable = function() {
  
  this._limit = 8;
  this._size = 0;
  // ???? is this._size keeping track of the number of buckets or the number of tupils?
  // I believe it keeps track of the number of tupils

  this._storage = LimitedArray(this._limit);
};

//get: returns the bucket 
//set: assigns the storage[index] to bucket
//each: iterates over storage elements

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];
  //first condition: if the k-v pair is found inside the bucket


  //iterate over the bucket array
  for (var i = 0; i < bucket.length; i++) {
  	//declare a variable called tupil and assign bucket[i]
    var tuple = bucket[i];
    //check if first index of tupil matches the key 
    if (tuple[0] === k) {
      //if matches, then asign second element of tupil to value
      var oldValue = tuple[1];
      tuple[1] = v;
      //return oldValue for the sake of saving it, so we know what we deleted
      return oldValue;
    }
  }
  //second condition: if the k-v pair is not found inside the bucket

  //add [k,v] pair in to the bucket
  bucket.push([k, v]);
  // add the bucket to the storage using set
  this._storage.set(index, bucket);
  //increment the size 
  this._size++;

  return undefined;
  };

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //declare bucket: either thru get property or if not asigned, then asign an empty array to it
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;
  };

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      //delete the the tupil with the key k
      bucket.splice(i, 1);
      this._size--;

      return tuple[1];
    }
  }

  return undefined;
};



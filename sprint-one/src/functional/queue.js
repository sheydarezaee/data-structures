var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; //we could just turn this into an array
  var count = 0;
  var firstKeyNumber = 1;
  // Implement the methods below
  someInstance.enqueue = function(value) { //push
    count++;                               // {1: a}   count = 1
    storage[count] = value;                // {1: a, 2: b}   count = 2
    return storage;                        // {1:a, 2:b, 3:c}   count = 3
  };
//{1:a, 2:b, 3:c}
  someInstance.dequeue = function() { //pop
    //var values = Object.values(storage);                                                                          

    if (count > 0) {
      //var keys = [];
      //var reversedArrayOfStorage = Object.assign([], {1:'a', 2:'b', 3:'c'}).reverse(); // is ["c", "b", "a"]
      var result = storage[firstKeyNumber]; //we want storage[key]           //{1: a, 2:b, 3:c}
      delete storage[firstKeyNumber];                  //             {2:b, 3:c}
      count--;

      if(storage !== undefined) {
        firstKeyNumber++;
      }
      return result;
    }
    else {
      return result;
    }
  };

  someInstance.size = function() { 
    return count;
  };

  return someInstance;
};



/*
Don't:
Use the keyword new, the keyword this, or any prototype chains
Capitalize the maker function name

*/








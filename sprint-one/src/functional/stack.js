var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below {}
  //a 
  //b
  //c
  someInstance.push = function(value) {
    count++;
    // if (storage[count] !== undefined) {      storage = {}           count = 0
      storage[count] = value; //storage[0] = a  count = 1
      //return storage;       //storage[1] = b  count = 2
    // }                      //storage[2] = c  count = 3
    // storage[0] = value;    {0:a, 1:b, 2:c}
    return storage;
  };

  /*
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.pop();
        expect(stack.pop()).to.equal('b');
*/

  someInstance.pop = function() {
    if (count > 0) {  
      //delete last key and return it
      var result = storage[count];
      delete storage[count];
      count--;
      return result;
    } else {
      return result
    }
  }

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

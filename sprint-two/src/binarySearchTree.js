var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreePrototype);
  //add value, left and right properties in to BinarySearch Tree
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
  //this constructor new child object
  };

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val) {
	//the goal is to make a new instance of BinarySearchTree (the child)
	//check if val < value, 
  if (val < this.value) {
  	//(first) if there is no left branch
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      //if there is a left branch
      this.left.insert(val);
    }
  //check if val is greater than the root value
  } else if (val > this.value) {
  	//check if there is not a right
    if (this.right === null) {
      //make a new right
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
    //if there is a right
  } else {
    // do nothing: The tree already contains this value
  }
};

binaryTreePrototype.contains = function(val) {
  if (val === this.value) {
    return true;
  } else if (val < this.value) {
    return !!(this.left && this.left.contains(val));
  } else if (val > this.value) {
    return !!(this.right && this.right.contains(val));
  }
};

binaryTreePrototype.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */



































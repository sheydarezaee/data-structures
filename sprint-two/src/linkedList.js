var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    }
    else {
      list.tail.next = newNode;
      list.tail = newNode;
    } 
  };

  list.removeHead = function() {
    list.head = list.head.next;
  };

  list.contains = function(target) {
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


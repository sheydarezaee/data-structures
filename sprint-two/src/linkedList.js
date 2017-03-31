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
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    return list.head.value === target || list.tail.value === target ? true : false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


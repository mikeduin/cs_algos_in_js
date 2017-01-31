function Node (val, next) {
  this.val = val;
  this.next = next;
}

function SinglyLinkedList (val) {
  var node = new Node (val, null);
  this.head = node;
  this.tail = node;

  this.length++;
  return this;
}

// add node if tail is known
SinglyLinkedList.prototype.push (val) {
  var node = new Node (val, null);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  };

  this.length++;
  return node;
}

// add node if tail is unknown
SinglyLinkedList.prototype.add (val) {
  var newNode = new Node (val, null);

  if (!this.head) {
    this.head = newNode;
    this.length++;
    return newNode;
  } else {
    var currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    };
    currNode.next = newNode;
    this.length++;
    return newNode;
  }
}

// search for a node value
SinglyLinkedList.prototype.searchVal (val) {
  if (!this.head) {
    return undefined
  } else {
    var currNode = this.head;
    while (currNode.val !== val) {
      currNode = currNode.next;
    };
    return currNode;
  }
}

// search for a node at a specific position
SinglyLinkedList.prototype.searchPos (pos) {
  if (!this.head || pos>this.length) {
    return "no node at this position"
  } else {
    var currNode = this.head;
    var count = 1;
    while (count < pos) {
      currNode = currNode.next;
      count++;
    };
    return currNode;
  }
}

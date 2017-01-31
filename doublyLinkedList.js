function Node (val, next, prev) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList (val) {
  var node = new Node (val, null, null);

  this.head = node;
  this.tail = node;

  this.length++;
  return this;
}

DoublyLinkedList.prototype.push (val) {
  var node = new Node (val, null, null);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  };
  this.length++;

  return this;
}

DoublyLinkedList.prototype.pop () {
  if (!this.head) {
    return undefined;
  };

  if (this.length === 1) {
    var returnValue = this.tail.value;
    this.head = null;
    this.tail = null;
    this.length--;
    return returnValue;
  };

  var oldTail = this.tail;
  this.tail = oldTail.prev;
  this.tail.next = null;
  oldTail.prev = null;
  var returnValue = oldTail.value;

  this.length--;

  return returnValue;
}

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
  return this;
}

function Node (val) {
  this.val = val;
  this.parent = null;
  this.children = [];
};

Node.prototype.addChild = function (childNode) {
  childNode.parent = this;
  this.children.push(newNode);
};

function Tree (val) {
  this.root = new Node (val);
}

// var tree = new Tree ('CEO');

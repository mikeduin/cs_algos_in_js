// Breadth-first, add nodes to data array;

Tree.prototype.BFS = function () {
  var queue = [];
  var data = [];
  queue.push(this.root);

  while (queue.length > 0) {
    var currNode = queue.shift();
    data.push(currNode);
    for (var i=0; i<currNode.children.length; i++) {
      queue.push(currNode.children[i]);
    }
  };

  return data;
}

// Breadth-first, search for a value

Tree.prototype.BFSearch = function (val) {
  var queue = [];
  var data = [];
  queue.push(this.root);

  while (queue.length > 0) {
    var currNode = queue.shift();
    for (var i=0; i<currNode.children.length; i++) {
      queue.push(currNode.children[i]);
    };
    if (currNode.val === val) {
      data.push(currNode)
    };
  };

  return data;
}

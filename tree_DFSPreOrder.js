// 1. CHECK IF CURRENT NODE IS EMPTY OR NULL
// 2. DISPLAY DATA OF ROOT (OR CURRENT NODE)
// 3. TRAVERSE LEFT SUB-TREE RECURSIVELY
// 4. TRAVERSE RIGHT SUB-TREE RECURSIVELY

// traverse w/no callback. This function returns all the tree values in an array.

Tree.prototype.traverseDFPre = function () {
  var arr = [];

  (function search(currentNode){
    arr.push(currentNode.val);
    for (var i=0; i<currentNode.children.length; i++) {
      search(currentNode.children[i]);
    }
  })(this.root);

  return arr;
}

// traverse w/callback for added functionality

Tree.prototype.traverseDFPreCallback = function (callback) {
  (function recurse(currentNode){
    for (var i=0; i<currentNode.children.length; i++){
      recurse(currentNode.children[i]);
    }

    callback(currentNode);
  })(this.root)
};

// 1. CHECK IF CURRENT NODE IS EMPTY OR NULL
// 2. TRAVERSE LEFT SUB-TREE RECURSIVELY
// 3. TRAVERSE RIGHT SUB-TREE RECURSIVELY
// 4. DISPLAY DATA OF ROOT (OR CURRENT NODE)

Tree.prototype.traverseDFPostCallback = function (callback) {
  (function recurse(currentNode){
    for (var i=0; i<currentNode.children.length; i++){
      recurse(currentNode.children[i]);
    }

    callback(currentNode);
  })(this.root)
};

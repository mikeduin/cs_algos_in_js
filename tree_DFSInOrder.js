// 1. CHECK IF CURRENT NODE IS EMPTY OR NULL
// 2. DISPLAY DATA OF ROOT (OR CURRENT NODE)
// 3. TRAVERSE LEFT SUB-TREE RECURSIVELY
// 4. TRAVERSE RIGHT SUB-TREE RECURSIVELY

// Note: This function below does not work properly because it assumes all children[0] are on the left subtree, when in fact, they should be at children.left > children[0] and children.right > children[1] (...I think?). If every node had two children this would work as intended.

Tree.prototype.DFSInOrder = function () {
  var arr = [];

  (function search(currentNode){
    if (currentNode.children[0]) {
      search(currentNode.children[0]);
    }
    arr.push(currentNode.val);
    if (currentNode.children[1]) {
      search(currentNode.children[1])
    }
  })(this.root)

  return arr;
}

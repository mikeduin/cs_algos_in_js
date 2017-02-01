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

// sample implementation

var tree = new Tree('one');

tree.root.children.push(new Node('two'));
tree.root.children[0].parent = tree;

tree.root.children.push(new Node('three'));
tree.root.children[1].parent = tree;

tree.root.children.push(new Node('four'));
tree.root.children[2].parent = tree;

tree.root.children[0].children.push(new Node('five'));
tree.root.children[0].children[0].parent = tree.root.children[0];

tree.root.children[0].children.push(new Node('six'));
tree.root.children[0].children[1].parent = tree.root.children[0];

tree.root.children[2].children.push(new Node('seven'));
tree.root.children[2].children[0].parent = tree.root.children[2];

/*

creates this tree

 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
     └── seven

*/

var treeAlph = new Tree('F');

treeAlph.root.children.push(new Node('B'));
treeAlph.root.children[0].parent = treeAlph;

treeAlph.root.children.push(new Node('G'));
treeAlph.root.children[1].parent = treeAlph;

treeAlph.root.children[0].children.push(new Node('A'));
treeAlph.root.children[0].children[0].parent = treeAlph.root.children[0];

treeAlph.root.children[0].children.push(new Node('D'));
treeAlph.root.children[0].children[1].parent = treeAlph.root.children[0];

treeAlph.root.children[0].children[1].children.push(new Node('C'))
treeAlph.root.children[0].children[1].children[0].parent = treeAlph.root.children[0].children[1]

treeAlph.root.children[0].children[1].children.push(new Node('E'))
treeAlph.root.children[0].children[1].children[1].parent = treeAlph.root.children[0].children[1]

treeAlph.root.children[1].children.push(new Node('I'));
treeAlph.root.children[1].children[0].parent = treeAlph.root.children[1];

treeAlph.root.children[1].children[0].children.push(new Node('H'))
treeAlph.root.children[1].children[0].children[0].parent = treeAlph.root.children[1].children[0]

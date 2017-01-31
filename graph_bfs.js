// Vertex constructor ... neighbors is array

function Node (value, neighbors) {
  this.value = value;
  this.neighbors = neighbors;
}

// Breadth-first search example ... will not work out of the box, will need to be customized to fit code. 

function bfs (sourceNode, destinationNode) {
  var queue = [];
  var explored = [];

  var queueObj = {
    node: sourceNode,
    path: []
  };

  // Enqueue sourceNode
  queue.push(queueObj);

  // Search until we're out of nodes / the queue is empty
  while (queue.length > 0) {
    var currentQueueObj = queue.shift();
    var curNode = currentQueueObj.node;
    var curPath = currentQueueObj.path;

    if (curNode === destinationNode) {
      return curPath;
    };

    if (explored.includes(curNode)){
      continue;
    };

    for (var i=0; i<curNode.neighbors.length; i++) {
      var newNode = curNode.neighbors[i];
      // This one below I admittedly don't understand. Why is using the slice method necessary? Couldn't you just set to curPath?
      var newPath = curPath.slice();
      newPath.push(curNode);

      // "We use this format so we can track the path" the instructions say
      var newQueueObj = {
        node: newNode,
        path: newPath
      };

      // "If the new node isn't a solution, add it to the queue and search more" ... but we don't check if it's a solution? Does that need to be added?
      queue.push(newQueueObj);
    };

    explored.push(curNode);
  };

  // No solution
  return null;

}

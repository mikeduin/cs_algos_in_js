// This is the first 'stable sort' algorithm, which means that the equivalent order of items in the list is not changed. With bubble sort and selection sort, it's possible that items may end up in a different order than they are in the original list. When sorting values, like strings or numbers, this is irrelevant ... but when sorting objects by properties, the rest of the data associated with each property matters and thus order matters.

// Insertion sort is stable because it does not perform a swap; rather, it inserts an item into the correct position.

function insertionSort (arr) {
  var i, j, temp;
  for (i=0; i<arr.length; i++) {
    temp = arr[i];
    for (j=i-1; j>-1 && arr[j]>temp; j--) {
      arr[j+1] = arr[j]
    };
    arr[j+1] = temp;
  }
  return arr;
}

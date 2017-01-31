// for the partition function, left and right values are indexes at which to start left and right pointers at. can be automatically set if not provided in the exterior quicksort function.

function partition (arr, left, right) {
  var pivot = arr[Math.floor((right+left)/2)];
  var i = left; // left pointer
  var j = right; // right pointer

  // this outer loop determines when all of the arr of the array have been processed
  while (i <= j) {
    // this loop moves the left pointer until it is less than the pivot value
    while (arr[i] < pivot) {
      i++;
    };

    // this loop moves the right pointer until it is more than the pivot value
    while (arr[j] > pivot) {
      j--;
    };

    if (i <= j) {
      // swap function for i/j values to get them on right side of pivot
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  };

  // the i value is returned to determine where to start partioning the next time through
  return i;
}

function quickSort (arr, left, right) {
  var index;

  if (arr.length > 1) {

    left = typeof left !== "number" ? 0 : left;
    right = typeof right !== "number" ? arr.length-1 : right;

    index = partition (arr, left, right);

    if (left < index -1) {
      quickSort(arr, left, index-1);
    };

    if (index < right) {
      quickSort(arr, index, right);
    };
  }

  return arr;
}

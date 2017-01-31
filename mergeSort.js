function merge (arr1, arr2) {
  var arr = [];
  var i = 0; //index for arr1
  var j = 0; //index for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  };

  return arr.concat(arr1.slice(i)).concat(arr2.slice(j));
}

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr
  };

  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  return merge (mergeSort(left), mergeSort(right));
}

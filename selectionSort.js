function selectionSort (arr) {
  for (var i=0; i<arr.length; i++) {
    var minIndex = i;
    for (var j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      };
    };
    if (i !== j) {
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    };
  };
  return arr;
}

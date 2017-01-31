function binarySearch (arr, val) {
  var start = 0;
  var stop = arr.length-1;
  var mid = Math.floor((start+stop)/2);

  while (val !== arr[mid] && start !== stop) {

    if (val < arr[mid]) {
      stop = mid - 1;
    } else if (val > arr[mid]) {
      start = mid + 1;
    }

    mid = Math.floor((start+stop)/2);
  }

  return (arr[mid] === val) ? mid : -1;
}

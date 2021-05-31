// 3.Given an array of numbers which is almost sorted in ascending order. Find the index
// where sorting order is violated.
function violIndex(arr, index = 1) {
  if (index === arr.length - 1) {
    return -1;
  }
  if (arr[index] < arr[index - 1]) {
    return index;
  } else {
    index++;
  }
  return violIndex(arr, index);
}
violIndex([-9, -4, -4, 3, 12, 4, 5]);
violIndex([2, 12, 15, 48, 64]);

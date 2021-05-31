// 4.Given an array. Write a recursive function that removes the first element and returns the
// given array. (without using arr.shift())
function removeFirstElem(arr, newArr = []) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return newArr.reverse();
  }

  newArr.push(arr.pop());
  return removeFirstElem(arr, newArr);
}
// console.log(removeFirstElem([6, 78, "n", 0, 1]));
// console.log(removeFirstElem([5]));
console.log(removeFirstElem([]));

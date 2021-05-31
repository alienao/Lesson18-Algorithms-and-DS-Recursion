// 5.Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
//   function that concats arrays).

function flattensArrays(arr, newArr = []) {
  if (arr.length === 0) {
    return newArr;
  }
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      return flattensArrays(el, newArr);
    } else {
      newArr.push(el);
    }
  });
  return newArr;
}
console.log(flattensArrays([1, [3, 4, [1, 2]], 10]));

console.log(flattensArrays([14, [1, [[[3, []]], 1], 0]]));

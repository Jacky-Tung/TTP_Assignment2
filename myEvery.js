function myEvery(arr, callback) {
  for (const ele of arr) {
    if (!callback(ele)) return false;
  }
  return true;
}

const array1 = [1, 30, 39, 29, 10, 13];

console.log(myEvery(array1, val => val < 40));
console.log(array1);

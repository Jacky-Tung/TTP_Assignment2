function myEach(arr, callback) {
  for (const ele of arr) {
    callback(ele);
  }
}

const array = [1, 2, 3];

myEach(array, (element) => {
  console.log(element*2);
});

console.log(array);
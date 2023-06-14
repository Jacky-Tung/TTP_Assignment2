function myReduce(arr, callback, initialVal){
    let acc = initialVal;
    for(const ele of arr){
        acc = callback(acc, ele);
    }
    return acc;
}

const array1 = [1, 2, 3, 4];

console.log(myReduce(array1, (acc, cur) => acc + cur, 0));
console.log(myReduce(array1, (acc, cur) => acc + cur, 1));
console.log(array1);

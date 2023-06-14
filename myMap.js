function myMap(arr, callback){
    const newArr = [];
    for(const ele of arr){
        newArr.push(callback(ele));
    }
    return newArr;
}

const array = [1, 4, 9, 16];

const map = myMap(array, x => x * 2);

console.log(map);
console.log(array);
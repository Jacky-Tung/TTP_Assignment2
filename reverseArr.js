function reverseArray(arr){
    const newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    const aux = [];
    while(arr.length > 0){
        aux.push(arr.pop()); 
    }
    for(const ele of aux){
        arr.push(ele);
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
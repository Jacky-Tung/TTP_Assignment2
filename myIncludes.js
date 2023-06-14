function myIncludes(arr, tar){
    for(const ele of arr){
        if(ele === tar)
            return true;
    }
    return false;
}

const array1 = [1, 2, 3];
const pets = ["cat", "dog", "bat"];

console.log(myIncludes(array1, 2));
console.log(myIncludes(pets, 'cat'));
console.log(myIncludes(array1, 'at'));
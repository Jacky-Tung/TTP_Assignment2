function mySome(arr, callback){
    for(const ele of arr){
        if(callback(ele))
            return true;
    }   
    return false;
}

const array = [1, 2, 3, 4, 5];

console.log(mySome(array, element => element % 2 == 0));
console.log(array);
function myLastIndexOf(arr, tar){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === tar)
            return i;
    }
    return -1;
}

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(myLastIndexOf(animals, "Dodo"));
console.log(myLastIndexOf(animals, "Tiger"));
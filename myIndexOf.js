function myIndexOf(arr, tar, from = 0){
    let index = 0;
    for(const ele of arr){
        if(index < from) {
            index++;
            continue;
        }
        if(ele === tar)
            return index;
        index++;
    }
    return -1;
}

const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(myIndexOf(beasts, "bison"));
console.log(myIndexOf(beasts, "bison", 2));
console.log(myIndexOf(beasts, "giraffe"));
console.log(beasts);
function myPush(arr, ele){
    arr[arr.length] = ele;
    return arr.length;
}

const animals = ["pigs", "goats", "sheep"];

const count = myPush(animals, "cows");

console.log(count);
console.log(animals);

const count2 = myPush(animals, "birds");
console.log(count2);
console.log(animals);
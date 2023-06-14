function myFilter(arr, callback){
    const filteredArr = [];
    for(const ele of arr){
        if(callback(ele)) 
            filteredArr.push(ele);
    }
    return filteredArr;
}

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

console.log(myFilter(words, word =>  word.length > 6));
console.log(words);
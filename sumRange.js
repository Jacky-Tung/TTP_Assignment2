function range(start, end){
    const arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}

function sum(arr){
    let ac = 0;
    for(const ele of arr){
        ac += ele;
    }
    return ac;
}

console.log(sum(range(1, 10)));
class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr){
    const head = new ListNode(arr[0]);
    let cur = head;
    for(let i = 1; i < arr.length; i++){
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}

function listToArray(list){
    let cur = list;
    const arr = [];
    while(cur){
        arr.push(cur.val);
        cur = cur.next;
    }
    return arr; 
}

function prepend(ele, list){
    const prependNode = new ListNode(ele, list);
    return prependNode;
}

function nth(list, n){
    if(!n)
        return list.val;
    else return nth(list.next, n-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
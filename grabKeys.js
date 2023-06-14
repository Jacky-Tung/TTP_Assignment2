Object.grabKeys = obj => {
    const keys = [];
    for(const key in obj){
        keys.push(key);
    }
    return keys;
};

const object = {
    name: 'JohnDoe',
    id: 123,
    age: 20
};

const keys = Object.grabKeys(object);
console.log(keys);
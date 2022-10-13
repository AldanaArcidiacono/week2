function foo(a) {
    let b;
    b = a * a;
    return b;
}

const z = 2;
foo(z);

const obj = {
    name: 'pepe',
    age: 23,
};
console.log(obj.name);

const prop = 'name';
console.log(obj[prop]);

const numbers = [3, 5, 6];
console.log(numbers[0]);
numbers[numbers.length] = 8;
console.log(numbers);
numbers[numbers.length] = 9;
console.log(numbers);

numbers.push(4);
console.log(numbers);

const myPush = (array, value) => {
    array[array.length] = value;
    //return array;
};
let data = [];
myPush(data, 'pepe');
console.log(data);

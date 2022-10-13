// Tipado dinámico y débil
let a;
console.log(typeof a); // Undefined
a = 23;
console.log(typeof a); // Number
console.log(Boolean(a)); // True
console.log(typeof a); // Number

let b = {};
b.name = 'Pepe';

const foo = (o) => {
    let newO = { ...o };
    newO.name = 'Pepe';
    return newO;
};

const obj = { name: 'Ernesto' };
const newObj = foo(obj);
console.log(obj); // { name: 'Ernesto' }
console.log(newObj); // { name: 'Pepe' }

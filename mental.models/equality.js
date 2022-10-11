const foo = 5;
const bar = 5;
const x = '5';

console.log(foo === bar); // true

if (foo === bar) {
    console.log('Son iguales');
}

console.log(foo == x);
console.log(foo === x);
console.log(Object.is(foo, x)); // Es el mas estricto

let a = {};
let b = {};
let c = a;
console.log(Object.is(a, b)); // Dos objetos son diferentes
console.log(Object.is(a, c)); // Le estoy asignando el valor del objeto a

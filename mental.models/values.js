//VALORES PRIMITIVOS
console.log(22, typeof 22);
console.log(-22, typeof -22);
console.log(2.2, typeof 2.2); //Numbers
console.log(`22`, typeof `22`);
console.log('22', typeof '22'); //Strings
console.log(true, typeof true);
console.log(false, typeof false); //Boolean
console.log(undefined, typeof undefined); //Undefined
console.log(null, typeof null, 'Error: type null'); //Null
console.log(22n, typeof 22n); //Bigint
console.log(Symbol(), typeof Symbol()); //Symbol

// VALORES REFERENCIADOS (OBJETOS Y FUNCIONES)
console.log({}, typeof {}); //Object
console.log([], typeof []); //Object
console.log((x) => x, typeof ((x) => x)); //Function
console.log(/a/, typeof /a/); //Expresion regular
console.log(new Date(), typeof new Date()); //Expresion regular
console.log(new Error('Error').message, typeof new Error()); //Expresion regular (Nos enseña un objeto tipo error)

// Wraper Objects. Envuelve momentaneamente a un string como un objeto
console.log('pepe'.toUpperCase());

// Typeof siempre devuelve un string
console.log(typeof typeof value);

// Mutables e inmutables
let arr = [212, 8, 506];
console.log(arr[0]);
arr[0] = 420;
console.log(arr);

// let str = 'hello';
// console.log(str[0]);
// str[0] = 'j';
//console.log(str); // Da error porque el string no puede mutar

// Funcion pura
function foo(p) {
    return p++;
}
let x = 23;
x = foo(x);
console.log(x);

//NUMBERS
console.log(2 / 0); // Infinity
console.log(0 / 2); // 0
console.log(0 / 0); // NaN
console.log(+'22'); // 22
console.log(+'Pepe'); // NaN
console.log(isNaN('22')); // Funcion global de JS. Suelto. Devuelve un boolean si encuentra un NaN
console.log(isNaN('Pepe')); // Funcion global de JS. Suelto. Devuelve un boolean si encuentra un NaN
console.log(Number.isNaN(0 / 0)); // Metodo del obj number. Enganchado a number. Le tienes que pasar un NaN para que devuelva un boolean. Mas usado cuando se hace una op. mat.
console.log(Number.isNaN('Pepe')); // Metodo del obj number. Enganchado a number. Si lo que le pasas no es un numero, te dice false

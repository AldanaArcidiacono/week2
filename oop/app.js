// ECMA SCRIPT 6
import { Person } from './person.js';
import { Student } from './student.js';

// Index que lo usa
const p1 = new Person('Pepe', 33);
console.log(p1); // Person { name: 'Pepe', age: 33 }
p1.greetings(); // Hola bro, soy Pepe y tengo 33
const p2 = new Person('Elena', 26);
console.log(p2); // Person { name: 'Elena', age: 23 }
p2.greetings(p1.name); // Hola Pepe, soy Elena y tengo 26

// Y el modulo donde la uso, donde importo la clase
const s1 = new Student('Pepito', 12, 'Angular');
console.log(s1); // Student { name: 'Pepito', age: 12, course: 'Angular' }
s1.greetings(p1.name); // Student { name: 'Pepito', age: 12, course: 'Angular' } - Hola Pepe, soy Pepito y tengo 12 - Estudio Angular

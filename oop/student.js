import { Person } from './person.js';

//segundo fichero (una clase un archivo como se llame la clase)
export class Student extends Person {
    constructor(name, age, course) {
        super(name, age); // El constructor padre
        this.course = course;
    }
    greetings() {
        super.greetings();
        console.log(`Estudio ${this.course}`);
    }
}

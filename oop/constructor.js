function Person(name = '', age = null) {
    this.name = name;
    this.age = age;
}
Person.prototype.greetings = function (target = 'bro') {
    console.log(`Hola ${target}, soy ${this.name} y tengo ${this.age}`);
};
Person.define = function () {
    console.log('Las personas tenemos cerebro');
};

const p1 = new Person('Pepe', 33);
console.log(p1); // Person { name: 'Pepe', age: 33 }
p1.greetings(); // Hola bro, soy Pepe y tengo 33
const p2 = new Person('Elena', 26);
console.log(p2); // Person { name: 'Elena', age: 23 }
p2.greetings(p1.name); // Hola Pepe, soy Elena y tengo 26
Person.define(); // Las personas tenemos cerebro

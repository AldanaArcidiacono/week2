const persona = {
    arms: 2,
};

const alumno = {
    course: 'CODERS',
    __proto__: persona, //Prop que apunta a obj. No la usamos asi
};

const pepe = {
    age: 33,
    __proto__: alumno,
};

const ernesto = {
    favorite: 'Pepperoni',
};

pepe.course = 'MiDuBootcamp';
Object.prototype.favorite = 'Bacon'; // Todos los obj de nuestro programa tendrán como fav bacon

console.log(pepe.course); //MiDuBootcamp
console.log(pepe.arms); // 2
console.log(pepe.__proto__); // { course: 'CODERS' }
console.log(persona.__proto__); // [Object: null prototype] {} Padre de los obj
console.log(pepe.favorite); // Bacon
console.log(ernesto.favorite); // Pepperoni

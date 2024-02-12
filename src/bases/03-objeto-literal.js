// Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 553243,
        lat: 14.3232,
        lng: 32.99352311,
    },
};

console.table( persona );

const persona2 = persona;  // Esto es una asignacion por referencia y cualquier cambio que se le haga al objeto tambien lo sufrira el elemento de referencia, no es recomendable esto en react
persona2.nombre = 'Titi';

console.table( persona2 );
console.table( persona );


// La mejor manera de hacer un clon de objeto es utilizando el operador spreed(...) de es6
const persona3 = { ...persona }
persona3.nombre = 'Jesus';

console.table( persona3 );
console.table( persona );
// Funciones en js

const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}

const saludar2 =  ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;


const getUser = () => ({  // se pone los parentesis para indicar que se va a retornar un elemento de tipo objeto
    uid: 'ABC123',
    username: 'El_Papi1998'
});
const user = getUser();

console.log( saludar( 'Goku' ) );
console.log( saludar2( 'Vegueta' ) );
console.log( saludar3( 'Picolo' ) );
console.log( saludar4() );
console.log( user );

// NOTA
// Las funciones se asignan a una variable de tipo const 
// para que estas no puedan ser modificadas



// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
function getUsuarioActivo( nombre ) {
    return {
        uid: 'CDF123',
        username: nombre,
    }
};

const usuarioActivo = getUsuarioActivo( 'Carlos' );
console.log( usuarioActivo );

// Tarea realizada

const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'CDF123',
    username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2( 'Carlos' );
console.log( usuarioActivo2 );
// Arreglos en js

//const arreglo = new Array( 100 )

const arreglo = [ 1, 2, 3, 4 ];
// arreglo.push( 1 );
// arreglo.push( 2 );
// arreglo.push( 3 );
// arreglo.push( 4 );
console.log( arreglo );




const arreglo2 = arreglo;
arreglo2.push( 5 );
console.log( arreglo );
console.log( arreglo2 );




const arreglo3 = [...arreglo, 6];
console.log( arreglo3 );



const arreglo4 = arreglo3.map( function( numero ) {
    return numero * 2;
} );


console.log( arreglo4 );



// NOTA
// El operador spread sirve para hacer copias
// Lo que hace realmente es extraer la información

// Si una funcion no tiene un return por defecto devuelve undefined
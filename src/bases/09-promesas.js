//
import { getHeroeById } from './bases/08-imp-exp';

/*const promesa = new Promise(  (resolve, reject)  => {

    setTimeout( () => {  // Cuando esta tarea se termine se llama al resolve

        const heroe = getHeroeById(2);  // Simulación de una conexion api
        resolve( heroe );

        // reject( 'No se pudo encontrar el héroe' );

    }, 2000 );

} );

promesa.then( ( heroe ) => {
    console.log( 'Heroe', heroe );
})
.catch( err => console.warn( err ) );*/


/* 3  metodos que podemos utilizar cuando la promesa se termine
1. then() = significa que la promesa se ejecuta correctamente
2. catch() = significa que la promesa dio un error, o que por alguna razon llamamos el reject
3. finally() = significa que es algo que se va a ejecutar despues del then y despues de catch

NOTA:
Se ejecutara el then() cuando ejecutemos o llamemos el resolve() en la promesa */








const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById( id );
            if ( heroe ) {
                resolve( heroe );
            } else {
                reject( 'No se puede encontrar el héroe' );
            }
        }, 2000);
    });

}

getHeroeByIdAsync( 4 )
.then( console.log ) // Esta mandando al .log el primer argumento que encuentra
.catch( console.warn );


// Tip, si el catch recibe un argumento y ese argumento es pasado a otra funcion, podemos quitar el primer argumento y dejar sola la referencia de la función que queremos ejecutar cuando suceda ese error

// Antes
// .catch( ( err ) => console.warn( err ) );

// Ahora
// .catch( console.warn );
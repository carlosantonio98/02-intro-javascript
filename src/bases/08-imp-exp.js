// Import, export y funciones comunes de arreglos
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

/*const getHeroeById = ( id ) => {
    return heroes.find(( heroe ) => {
        return heroe.id === id;
    });
}*/

/*const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}*/

export const getHeroeById = ( id ) => heroes.find( ( heroe ) => heroe.id === id );
// console.log( getHeroeById(2) );



export const getHeroeByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);
// console.log( getHeroeByOwner( 'DC' ) );


// console.log( owners );











// Nota:
/*
Exportación individual
import { owners } from './data/heroes';

Exportación por default
import heroes from './data/heroes';
*/
// Desestructuracion de arreglos



const personajes = [ 'Goku', 'Vegeta', 'Trunks'];


const [ goku ] = personajes;

console.log(goku);

// segundo elemento
const [ , personajedos ] = personajes;

console.log(personajedos);


const retornaArreglo =() => [ 'Abc', 123];

const [ letras, numeros] = retornaArreglo();

console.log(letras,numeros);

// Funcion UseState  recibe el argumento valor
// mas funcion anidada


const usSate = (valor) =>{

    return [ valor, function(){ return `Hola Mundo`;}];

}

const arregloFuncion = usSate('Goku');

console.log( arregloFuncion[1]());

const [ nombre, setNombre] = usSate('Goku');
console.log(nombre);
setNombre();




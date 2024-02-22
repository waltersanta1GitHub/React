

//  Arreglos en JS

const arreglo = new Array();

const nuevoArreglo = [1,2,3,4];

let arregloDos = [...nuevoArreglo, 5];

const arregloTres = arregloDos.map(function(numero){
    return numero * 2;
} );


console.log(arreglo);

console.log(nuevoArreglo);

console.log(arregloTres);
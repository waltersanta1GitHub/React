
const persona ={
    nombre: 'tony',
    apellido: 'Stark',
    edad: 45

};

// clona el valor del objecto ...
const persona2 = { ...persona};

persona2.nombre ="Dora";

console.table( persona2);


console.table( { 
    persona
} );
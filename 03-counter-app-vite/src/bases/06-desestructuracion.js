// Desestructuracion

 const persona = {
     nombre: "Juan tamarin",
     edad:24,
     iscasado:true
 }

const { nombre, edad, iscasado } = persona;


 console.log(nombre);
 console.log(iscasado);


 //  destructuracion en funcion

 const imprimirNombre= ({ nombre, edad, iscasado}) => {

    console.log(`El nombre es ${nombre}, su edad es: ${edad} y Esta o no casado?: ${iscasado}`);

 }

 imprimirNombre(persona);
// condicional ternario



const activo = true;

let mensaje = '';

if(activo){
 mensaje= ' Esta Activo';
}  
else{
    mensaje= 'Esta inactivo';

}

const segundomensaje = activo? ' Esta activo': 'Esta inactivo';


const nuevomensaje = activo && 'Activo';


console.log(mensaje);
console.log(segundomensaje);
console.log(nuevomensaje);




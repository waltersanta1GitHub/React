

// Promesas en javascritp

import { getheroebyid} from './bases/08-import-export';
 

// 1 Funcion callback con ( resuelta, rechazada)

const promesa = new Promise( (resolve, reject) =>{

    setTimeout( () =>{
       const miheroe = getheroebyid(300);
       if(miheroe != null){
        resolve(miheroe);
       }else{
        reject('No pude encontrar el heroe');
       }
    

    },2000);

}  );

promesa.then( (currentheroe) =>{
    console.log('El heroe retornado es:' + currentheroe.name);
})
.catch( error => console.log(error));


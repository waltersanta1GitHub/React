
import {heroes} from '../data/heroes'

//console.log( heroes );

export const getheroebyid= (id)=>heroes.find( (element) => element.id===id);

//console.log( getheroebyid(2)  );


const getheroebyowner= (owner)=>heroes.filter( (element) => element.owner===owner);

//console.log( getheroebyowner('DC'));


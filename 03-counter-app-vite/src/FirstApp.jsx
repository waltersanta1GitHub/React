
import { useState } from "react";


export const FirstApp= ({})=>{

    const [ contador,setContador] = useState(valor); 


    return ( <>
    <h1>Tarea Dos Contador</h1>
    <p> {contador} </p>
    
    </>  );
}


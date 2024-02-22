import { Fragment } from "react"; // se usa para retornar mas de un elemento en un html
                                // esto ta,bien es un fragment <> </>

const newmessage = 'jose Walter';
const FirstApp = ()=>{
    return( 
    <Fragment>
        <h1> { newmessage}</h1>;
        <p>Este parrafo</p>
    </Fragment>
    
    )
}
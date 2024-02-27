//En detalle lo que hago es crear la plantilla para imprimir
//Busco los divs
//Inserto la plantilla, para eso creo la funcion

/*
en location.search tengo los query params, uno de esos query params 
es el id, para obtener el id uso un tipo de dato, que a su vez tiene 
sus metodos, que me permite obtener los query directamente. El tipo de dato
es new UrlSearchParams()
*/

import {insertTemplate, templateImgTab,templateTextTab} from "./module/functions.js"




const url = "https://moviestack.onrender.com/api/movies"
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

fetch( url, init )
    .then( response => response.json() )
    .then( datos => {
        console.log(datos);
        let contenedorImgTab1 = document.getElementById("contenedorImgTab1")

        let contenedorTittleTab2 =document.getElementById("contenedorTittleTab2")
        
        
        
        let urlParams = new URLSearchParams(location.search)
        //Utilizo el metodo get
        const id= urlParams.get("id")
        
        const encontrarMovie = datos.movies.find((movie)=>movie.id==id)
        
        let divUno= templateImgTab(encontrarMovie)
        
        let divDos=templateTextTab(encontrarMovie)
        
        insertTemplate(divUno,divDos,contenedorImgTab1,contenedorTittleTab2)
    
    
    })
    .catch( err => console.log(err) )
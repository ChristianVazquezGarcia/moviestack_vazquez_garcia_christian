//En detalle lo que hago es crear la plantilla para imprimir
//Busco los divs
//Inserto la plantilla, para eso creo la funcion
import {insertTemplate, templateImgTab,templateTextTab} from "./module/functions.js"

let contenedorImgTab1 = document.getElementById("contenedorImgTab1")

let contenedorTittleTab2 =document.getElementById("contenedorTittleTab2")

/*
en location.search tengo los query params, uno de esos query params 
es el id, para obtener el id uso un tipo de dato, que a su vez tiene 
sus metodos, que me permite obtener los query directamente. El tipo de dato
es new UrlSearchParams()

*/

let urlParams = new URLSearchParams(location.search)
//Utilizo el metodo get
const id= urlParams.get("id")

const encontrarMovie = moviesList.find((movie)=>movie.id==id)

let divUno= templateImgTab(encontrarMovie)

let divDos=templateTextTab(encontrarMovie)

insertTemplate(divUno,divDos,contenedorImgTab1,contenedorTittleTab2)



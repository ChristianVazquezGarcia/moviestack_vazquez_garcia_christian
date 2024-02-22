function card(lista){
let template=" ";
    for (const iterator of lista) {
    template+=`<article>
    <img src="${iterator.image} " alt="movie advertisement">
    <h4>${iterator.title}</h4>
    <h6>${iterator.tagline}</h6>
    <p>${iterator.overview}</p>
    </article>
`
}
return template;
}


//CreoElContenedor dodne voy a almacenar los cards
let divContenedorMovie = document.createElement("div");
divContenedorMovie.setAttribute("id","contenedorMovie");




function renderCards(cards, elemento){
    elemento.innerHTML = cards;
}

//Agrego al div contenedor las cards
let movies = card(moviesList)
renderCards(movies, divContenedorMovie);


//Agrego al main el div contenedor
//1)primero capturo el main

let main =document.querySelector("main");

//2)le asigno a main que le voy a agregar

main.append(divContenedorMovie);
/*********************************************************** */

//Modifico las clases del contenedor
//Preguntar al profe porque me salta error cuando pongo classList.add
divContenedorMovie.className=" flex flex-wrap w-4/5 gap-8 justify-center rounded-md max-md:flex-col md:shadow-lg md:shadow-indigo-900 ";

//Modifico las clases de los articulos
//1)obtengo el article
let article= divContenedorMovie.querySelectorAll("article")
//esto me devolvio un array, recorro ese array de articles y les asigno clases

function asignoClases(vec, clases){
    //recorro el array de articulos
    let aux=" "
    for (const iterator of vec) {
        aux=iterator
        aux+=iterator.classList.add(clases)
        
    }
}


function sobreEscriboClases(vec, clases) {
    let aux=" "
    for (const iterator of vec) {
        aux=iterator
        aux+=iterator.className=clases;
        
    }
}






let h4 =divContenedorMovie.querySelectorAll("article h4");

let h6 =divContenedorMovie.querySelectorAll("article>h6");

let pArticulos=divContenedorMovie.querySelectorAll("article>p");



//Le quiero poner padding a las fotos, hago lo mismo que hice para agregarle clases a los articulos 

//invoco la funcion para agregar las clases de los articulos
let clasesArticulos="flex flex-col w-1/5 items-center gap-2  object-cover border-solid border-2 border-blue-400 rounded-md max-md:w-full shadow-lg shadow-indigo-900"
sobreEscriboClases(article,clasesArticulos);
/*let clasesArticulosNuevos=""
asignoClases(article, clasesArticulosNuevos)
*/

//invoco la funcion para agregar las clases de los titulos
/*asignoClasesTitulosArt(h4, clasesTitulosArt)*/

let clasesTitulosArt= "text-lg font-mono font-bold text-purple-600"
sobreEscriboClases(h4,clasesTitulosArt)
//invoco la funcion para agregar las clases de los subtitulos
let claseOneh6= "italic  underline text-purple-400"
sobreEscriboClases(h6, claseOneh6)
//invoco la funcion para agregar las clases de los parrafos
let clasesParrafosArt="text-sm line-clamp-3 hover:line-clamp-none max-md:line-clamp-none text-violet-300"
sobreEscriboClases(pArticulos,clasesParrafosArt)


//le pongo clases al main
main.className="flex flex-col items-center"


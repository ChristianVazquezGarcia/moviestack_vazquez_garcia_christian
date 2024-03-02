import {card, renderCards, createOptionsSelect, filtrarPorNombre, filterForGenre, cardFavorita} from "./module/functions.js"
//Crea las tarjetas funcion card



//CreoElContenedor dodne voy a almacenar los cards
let divContenedorMovie = document.createElement("div");
divContenedorMovie.setAttribute("id","contenedorMovie");

let mainFav = document.getElementById("mainFav")
console.log(mainFav);

//introduce las tarjetas en el html


//Agrego al div contenedor las cards




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

/**
 * Profe, mejore el codigo en base a lo que me dijo 
 * la otra vez y ahora agregue las clases directo en el
 * texto en vez de agregarla con funciones. Dejo las funciones comentadas

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
 */

// let h4 =divContenedorMovie.querySelectorAll("article h4");

// let h6 =divContenedorMovie.querySelectorAll("article>h6");

// let pArticulos=divContenedorMovie.querySelectorAll("article>p");



//le pongo clases al main
main.className="flex flex-col items-center gap-16"

 

//Como lo hago?
/**
 * 1)entro al vector de objetos y a su vez entro a la propiedad de generos
 * 2)si el genero encontrado es igual con el del valor, entonces me quedo con el objeto.
 * 3)Donde pongo el objeto?
 * en un nuevo vector
 * 4)Recorro el vector nuevo preguntando si el objeto seleccionado es del mismo nombre buscado
 * 
 * 5)si lo es, utilizo la funcion Cards y le introduzco el nuevo vector con la pelicula ya "Filtrada"
 * o puedo hacer una nueva funcion exactmente igual para un solo objetp
 * 6) si no lo es entonces pongo q no existe pelicula con ese nombre
 * ----------------
 * 
 */





//Busco todos los tipos de generos y los insertos en el select
/** 2*/



 








//busco el valor seleccionado en el select
//con el valor seleccionado busco la/s pelicula/s q coincidan
//muestro las peliculas









/**
 * const filtroNombre = filtrarPorNombre(moviesList, search.value)
    const filterMovieForGenre = filterForGenre(filtroNombre, select.value)
    let movie = card(filterMovieForGenre)
    renderCards(movie, divContenedorMovie)
 * 
 * 
 */


    //Agrego el detalle en las cards de las pelis



const url = "https://moviestack.onrender.com/api/movies"
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}
fetch( url, init )
    .then( response => response.json() )
    .then( datos =>{
        console.log(datos.movies);
        
        let movies = card(datos.movies)
        renderCards(movies, divContenedorMovie)

        let genres= new Set (datos.movies.map(movie=>movie.genres).flat())/*1*/
        let select = document.getElementById("selectGenre")
        createOptionsSelect(genres,select)

        let search = document.getElementById("search")

        search.addEventListener("input", ()=> {/**3*/
    
        //Ejecuto la funcion de filtrarPorNombre
        const filtroNombre = filtrarPorNombre(datos.movies, search.value)
        let movie
        if(select.value=="genre"){
        movie = card(filtroNombre)
        renderCards(movie, divContenedorMovie)
        }
        else{
        const filterMovieForGenre = filterForGenre(filtroNombre, select.value)
        movie = card(filterMovieForGenre)
        renderCards(movie, divContenedorMovie)
        }
        } )


        select.addEventListener("input", ()=>{/*** 4*/
        const filtroNombre = filtrarPorNombre(datos.movies, search.value)
        let movie
        if(select.value=="genre"){
        movie = card(filtroNombre)
        renderCards(movie, divContenedorMovie)
        }
        else{
        const filterMovieForGenre = filterForGenre(filtroNombre, select.value)
        movie = card(filterMovieForGenre)
        renderCards(movie, divContenedorMovie)
        }
        })

        let arrayMoviesFav =[];
        
        let moviesFavoritas = JSON.parse(localStorage.getItem("favoritas")) || [] 
        arrayMoviesFav=moviesFavoritas
        let peliculasPaMostrar =JSON.parse(localStorage.getItem("peliculasNoFaveadas"))||[]
        console.log(peliculasPaMostrar);
        let peliculas = datos.movies
            

        //let peliculasNoSeleccionadas = peliculas.filter(movie => !arrayMoviesFav.includes(movie))
        
        
        

        
        divContenedorMovie.addEventListener("input", (e)=>{
            let a = e.target.checked
            console.log(a);
            if (a) {
                    let b = e.target.dataset.id;
                    
                    let movieFav = datos.movies.find(movie=>movie.id==b)
                    console.log(movieFav);
                    arrayMoviesFav.push(movieFav)//pusheo
                    localStorage.setItem("favoritas",JSON.stringify(arrayMoviesFav))
                    let peliculasNoSeleccionadas=[]
                            if (peliculasPaMostrar.length==0) {
                                peliculasNoSeleccionadas = peliculas.filter(movieFav)
                               
                            }
                            else{
                                
                                peliculasNoSeleccionadas = peliculasPaMostrar.filter(movieFav)
                            }
                            localStorage.setItem("peliculasNoFaveadas",JSON.stringify(peliculasNoSeleccionadas))
                    
                    //console.log(prliculasNoFaveadas);
                    //peliculas=prliculasNoFaveadas
                   // let peliculasFavoritas = cardFavorita(arrayMoviesFav)
                    //array que me filtre las peliculas cuyo id es el mismo que en fav

                    

                    //y si mando a local storage las peliculas filtradas sin los favs?
                    

                    //mando a local storage
                     
                    
                    
                    //que me recorra el vector de peliculas y las que tengan fav que las deje marcadas
                    
            }
                    
            
        })


       
        // console.log(moviesFavoritas);
        // arrayMoviesFav=moviesFavoritas
        
        
        //let peliculasNoSeleccionadas = peliculas.filter(movie => !moviesFavoritas.includes(movie))
        //console.log(peliculasNoSeleccionadas);
        // peliculas=peliculasNoSeleccionadas
        
        //console.log(peliculasNoSeleccionadas);
        //Que quiero?
        //Que me imprima todas las peliculas pero las que estan en favoritas, osea, fueron seleccionadas, las deje marcadas como seleccionadas

        //Busco los favoritos y las peliculas no favoritas
        //Favoritos guardados en el localStorage
        //Otras peliculas no favoritas, para eso, uso las favoritas y voy filtrando
        //let peliculasNoFavoritas = JSON.parse(localStorage.getItem("prliculasNoFaveadas"))||[]
        //console.log(peliculasNoFavoritas);

        //despues las favoritas las paso por cardFavoritas, las otras por card y despues concateno ambas y despues imprimo
        /*let cardsFAVORITAS=cardFavorita(moviesFavoritas)
        console.log(cardsFAVORITAS);
        let cardsNormales=card(peliculasNoFavoritas)
        console.log(cardsNormales);
        let todasLasCards= cardsFAVORITAS.concat(' ', cardsNormales)
        console.log(todasLasCards);
        renderCards(todasLasCards, divContenedorMovie)*/
        
       
        console.log(peliculasPaMostrar);
    } )
    .catch( err => console.log(err) ) 

// function hacerCartasDistintas(todasPElis,PElisFavs) {
//     let pelisSinFav=todasPElis.filter(movie=>movie.id!= pelisSinFav.forEach(movie => {
//         return movie.id
//     }))
// }
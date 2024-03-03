import {card, renderCards, createOptionsSelect, filtrarPorNombre, filterForGenre} from "./module/functions.js"
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


        let peliculasCompletas=[]
        let arrayMoviesFav =[];
        let peliculas1= JSON.parse(localStorage.getItem("favoritas"))||[]
        arrayMoviesFav=peliculas1


        //En PELICULAS10 tengo las peliculas con el fav en false
        let peliculas10 = datos.movies.map(movie => {
            return { ...movie, fav: false };
        });
        //En peliculas pa mostrar Tengo TODAS LAS PELICULAS CON fav=false y fav=true
        let peliculasPaMostrar =JSON.parse(localStorage.getItem("peliculasNoFaveadas"))||[]
        if (peliculasPaMostrar.length!=0) {//Si peliculasPAmostrar viene cargado
            peliculas10=peliculasPaMostrar   //a las peliculas que tenian todas false le asigno
            peliculasCompletas=peliculasPaMostrar
        }
        else{
            peliculasPaMostrar=peliculas10
        }
        
        console.log(arrayMoviesFav);
        
       console.log(peliculasPaMostrar);
        
        divContenedorMovie.addEventListener("input", (e)=>{
            let a = e.target.checked
            console.log(a);
            if (a) {
                    
                    peliculasCompletas = peliculas10.map(movie=>{
                        if (movie.id == e.target.dataset.id) {
                            return { ...movie, fav: true }
                        }
                        else{
                            return movie
                        }

                    })
                    
                    localStorage.setItem("peliculasNoFaveadas",JSON.stringify(peliculasCompletas))
                    
                    peliculas10=peliculasCompletas   
                    
        
                    let b = e.target.dataset.id;
                        let movieFav= peliculas10.find(movie=>movie.id==b)
                        arrayMoviesFav.push(movieFav)
                        renderCards(card(peliculas10), divContenedorMovie)

                    localStorage.setItem("favoritas",JSON.stringify(arrayMoviesFav))     
            }
            else if (a==false) {
                peliculasCompletas = peliculas10.map(movie=>{
                    if (movie.id == e.target.dataset.id) {
                        return { ...movie, fav: false }
                    }
                    else{
                        return movie
                    }
                   
                })
                localStorage.setItem("peliculasNoFaveadas",JSON.stringify(peliculasCompletas))
                    
                peliculas10=peliculasCompletas
                let b = e.target.dataset.id;
                        let movieFav= arrayMoviesFav.filter(movie=>movie.id!=b)
                        arrayMoviesFav=movieFav
                        renderCards(card(peliculas10), divContenedorMovie)
                    localStorage.setItem("favoritas",JSON.stringify(arrayMoviesFav)) 
            }
            
        })






        //Aca van peliculaspamostrar
        let movies = card(peliculasPaMostrar)
        renderCards(movies, divContenedorMovie)
        //aca tambien va peliculasPaMostrar
        let genres= new Set (peliculasPaMostrar.map(movie=>movie.genres).flat())/*1*/
        let select = document.getElementById("selectGenre")
        createOptionsSelect(genres,select)

        let search = document.getElementById("search")

        search.addEventListener("input", ()=> {/**3*/
        //aca tambien va peliculasPaMostrar

        //Ejecuto la funcion de filtrarPorNombre
        const filtroNombre = filtrarPorNombre(peliculasPaMostrar, search.value)
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
        //aca tambien va peliculasPaMostrar

        const filtroNombre = filtrarPorNombre(peliculasPaMostrar, search.value)
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


       
        

       
    } )
    .catch( err => console.log(err) ) 

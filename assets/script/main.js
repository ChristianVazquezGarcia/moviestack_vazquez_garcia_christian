import {card, renderCards, createOptionsSelect, filtrarPorNombre, filterForGenre} from "./module/functions.js"




//CreoElContenedor dodne voy a almacenar los cards
let divContenedorMovie = document.createElement("div");
divContenedorMovie.setAttribute("id","contenedorMovie");
let mainFav = document.getElementById("mainFav")
console.log(mainFav);
let main =document.querySelector("main");

main.append(divContenedorMovie);
/*********************************************************** */


divContenedorMovie.className=" flex flex-wrap w-4/5 gap-8 justify-center rounded-md max-md:flex-col md:shadow-lg md:shadow-indigo-900 ";

let article= divContenedorMovie.querySelectorAll("article")

main.className="flex flex-col items-center gap-16"

 

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
        
        
        
        divContenedorMovie.addEventListener("input", (e)=>{
            let a = e.target.checked
            if (a) {
                console.log(a)
                    peliculasCompletas = peliculas10.map(movie=>{
                        if (movie.id == e.target.dataset.id) {
                            return { ...movie, fav: true }
                        }
                        else{
                            return movie
                        }

                    })
                    
                    localStorage.setItem("peliculasNoFaveadas",JSON.stringify(peliculasCompletas))
                    
                    renderCards(card(peliculasCompletas), divContenedorMovie)
                    peliculas10=peliculasCompletas   
                    
        
                    let b = e.target.dataset.id;
                    let movieFav= peliculas10.find(movie=>movie.id==b)
                    arrayMoviesFav.push(movieFav)

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
                renderCards(card(peliculas10), divContenedorMovie)
                let b = e.target.dataset.id;
                let movieFav= arrayMoviesFav.filter(movie=>movie.id!=b)
                arrayMoviesFav=movieFav
                localStorage.setItem("favoritas",JSON.stringify(arrayMoviesFav)) 
            }
            
        })

        //Aca van peliculaspamostrar
        let movies = card(peliculasCompletas)
        renderCards(movies, divContenedorMovie)
        let genres= new Set (peliculasCompletas.map(movie=>movie.genres).flat())
        let select = document.getElementById("selectGenre")
        createOptionsSelect(genres,select)

        let search = document.getElementById("search")

        search.addEventListener("input", ()=> {
        //Ejecuto la funcion de filtrarPorNombre
        const filtroNombre = filtrarPorNombre(peliculasCompletas, search.value)
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


        select.addEventListener("input", ()=>{
        const filtroNombre = filtrarPorNombre(peliculasCompletas, search.value)
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

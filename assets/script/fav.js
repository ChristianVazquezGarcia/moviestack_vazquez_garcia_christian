import {card, renderCards} from "./module/functions.js"
const main = document.getElementById("mainFav")



const url = "https://moviestack.onrender.com/api/movies"
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

fetch ( url, init )
.then( response => response.json() )
.then( datos =>{
    //si desclickea que pase esto
    let moviesFavs = JSON.parse(localStorage.getItem("favoritas")) || [] //Tengo el array de favoritas

    let todasLasMovies =JSON.parse(localStorage.getItem("peliculasNoFaveadas")) || []
    //creo array nuevo donde van a ir todas las pelis despues de desfavear
    let todasLasMoviesFavyNofav=[]
if (todasLasMovies.length!=0) {
    todasLasMoviesFavyNofav=todasLasMovies
}
    

    let cardsFavs = card(moviesFavs)
    renderCards(cardsFavs,main )

    main.addEventListener("input", (e)=>{
        if (e.target.checked==false) {// si desclickeo
            let b = e.target.dataset.id; //que me de el id de la peli que desclickeo
            //me borra de favoritos la pelicula
            let movieFav = moviesFavs.filter(movie=>movie.id!=b)//Que me devuelva un array sin esa pelicula
            moviesFavs=movieFav
            cardsFavs = card(moviesFavs)
            renderCards(cardsFavs,main)
            todasLasMoviesFavyNofav=todasLasMovies.map(movie=>{
                if (movie.id==b) {
                    return { ...movie, fav: false }
                }
                else{
                    return movie
                }    
                
            })
            localStorage.setItem("peliculasNoFaveadas",JSON.stringify(todasLasMoviesFavyNofav))
            todasLasMovies=todasLasMoviesFavyNofav
            localStorage.setItem("favoritas",JSON.stringify(moviesFavs))    
        }
    })
})
.catch(err=>console.log(err))

















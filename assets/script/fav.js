import {card, renderCards, createOptionsSelect, filtrarPorNombre, filterForGenre, cardFavorita} from "./module/functions.js"
const main = document.getElementById("mainFav")

//let divContenedorMovie = document.getElementById("contenedorMovie")

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

    console.log(moviesFavs);

    let cardsFavs = cardFavorita(moviesFavs)
            renderCards(cardsFavs,main )

    main.addEventListener("input", (e)=>{
        
        console.log(e.target.checked);
        if (e.target.checked==false) {// si desclickeo
            let b = e.target.dataset.id; //que me de el id de la peli que desclickeo

            //me borra de favoritos la pelicula
            let movieFav = moviesFavs.filter(movie=>movie.id!=b)//Que me devuelva un array sin esa pelicula
            moviesFavs=movieFav
            console.log(moviesFavs);
            cardsFavs = cardFavorita(moviesFavs)
            console.log(cardsFavs);
            renderCards(cardsFavs,main )
            localStorage.setItem("favoritas",JSON.stringify(moviesFavs))

            //quiero que me recorra el array que tengo en el local storage y me filtre por los que desclickeo
            //osea donde tengo datos.movies pongo el array que tengo en el local storage
        
            
        }
        
        
    })
    //si no clickeo, que me imprima la lista del local storage

    
            

})
.catch(err=>console.log(err))

















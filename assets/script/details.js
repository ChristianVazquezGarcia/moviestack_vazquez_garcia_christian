//En detalle lo que hago es crear la plantilla para imprimir
//Busco los divs
//Inserto la plantilla, para eso creo la funcion

let contenedorImgTab1 = document.getElementById("contenedorImgTab1")
let contenedorTittleTab2 =document.getElementById("contenedorTittleTab2")
console.log(location);
/*
en location.search tengo los query params, uno de esos query params 
es el id, para obtener el id uso un tipo de dato, que a su vez tiene 
sus metodos, que me permite obtener los query directamente. El tipo de dato
es new UrlSearchParams()

*/

let urlParams = new URLSearchParams(location.search)
//Utilizo el metodo get
const id= urlParams.get("id")
console.log(id);
const encontrarMovie = moviesList.find((movie)=>movie.id==id)
console.log(encontrarMovie.genres);
//Va a agarrar el objeto dado por id y va a tomar la imagen y crear una tabla

function templateImgTab(element) {
    //Creo variable con el texto de las etiquetas img y tr
    let aux=`
    <img class="w-11/12" src="${element.image}" alt="movie image">
    <table>
        <tbody>
            <tr>
                <td>Origin lenguage</td>
                <td>${element.original_language}</td>
            </tr>
            <tr>
                <td>Release date</td>
                <td>${element.release_date}</td>
            </tr>
            <tr>
                <td>Runtime </td>
                <td>${element.runtime}</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>${element.status}</td>
            </tr>
        </tbody>
    </table>
    `
    return aux;
}

//Creo segunda funcion de template para el segundo div,este contendra texto y una tabla
function templateTextTab(element) {
    //Creo esta funcion para ponerle comas a los generos
   let genres= agregarComasAGeneros(element)
    let aux=` <h3 class="">${element.title} </h3>
    <h4 class="">${element.tagline} </h4>
    <h4 class="">${genres} </h4>
    <p class="">${element.overview} </p>

    <table>
    <tbody>
        <tr>
            <td>Vote average</td>
            <td>${element.vote_average}</td>
        </tr>
        <tr>
            <td>Release date</td>
            <td>USD ${element.budget.toLocaleString()}</td>
        </tr>
        <tr>
            <td>Runtime </td>
            <td>USD ${element.revenue.toLocaleString()}</td>
        </tr>
    </tbody>
</table>
    `
    return aux;
}
//Funcion que agrega comas a los generos
function agregarComasAGeneros(element) {
    let genre = element.genres
    let aux1=" "
    let cont=0
    for (const iterator of genre) {
        if (cont < genre.length - 1) {
            
            cont++;
            aux1+=` ${iterator},`
        }
        else{
           aux1+=`${iterator}`
        }
    }
    return aux1;
}

//Hacer funcion de agregar html en el div

function insertTemplate(template1, template2, where1, where2) {
    where1.innerHTML=template1
    where2.innerHTML=template2
}

let divUno= templateImgTab(encontrarMovie)

let divDos=templateTextTab(encontrarMovie)

insertTemplate(divUno,divDos,contenedorImgTab1,contenedorTittleTab2)



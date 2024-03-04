export function templateImgTab(element) {
    //Va a agarrar el objeto dado por id y va a tomar la imagen y crear una tabla templateImgTab
    //Creo variable con el texto de las etiquetas img y tr
    let aux=`
    <img class="w-11/12 shadow-lg shadow-violet-900" src="https://moviestack.onrender.com/static/${element.image}" alt="movie image">
    <table>
        <tbody>
            <tr>
                <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 font-bold">Origin lenguage</td>
                <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 ">${element.original_language}</td>
            </tr>
            <tr>
                <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 font-bold">Release date</td>
                <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 ">${element.release_date}</td>
            </tr>
            <tr>
                <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 font-bold">Runtime </td>
                <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 ">${element.runtime}</td>
            </tr>
            <tr>
                <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 font-bold">Status</td>
                <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 ">${element.status}</td>
            </tr>
        </tbody>
    </table>
    `
    return aux;
}

export function templateTextTab(element) {
    //Creo segunda funcion de template para el segundo div,este contendra texto y una tabla
    //Creo esta funcion para ponerle comas a los generos
   let genres= agregarComasAGeneros(element)
    let aux=` <h3 class="text-xl font-bold text-purple-600">${element.title} </h3>
    <h4 class="underline text-purple-400">${element.tagline} </h4>
    <h4 class="italic text-purple-400">${genres} </h4>
    <p class="text-violet-300">${element.overview} </p>

    <table>
    <tbody >
        <tr>
            <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 font-bold">Vote average</td>
            <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1">${element.vote_average}</td>
        </tr>
        <tr>
            <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1 font-bold">Release date</td>
            <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1">USD ${element.budget.toLocaleString()}</td>
        </tr>
        <tr>
            <td class="text-left border border-indigo-600 text-indigo-200 pr-8 font-bold pl-1">Runtime </td>
            <td class="text-left border border-indigo-600 text-indigo-200 pr-8 pl-1">USD ${element.revenue.toLocaleString()}</td>
        </tr>
    </tbody>
</table>
    `
    return aux;
}

export function agregarComasAGeneros(element) {
    //Funcion que agrega comas a los generos agregarComasAGeneros
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

export function insertTemplate(template1, template2, where1, where2) {
    //Inserta los templates de details en el html
    where1.innerHTML=template1
    where2.innerHTML=template2
} 

/**-------------------------------------------- */


    export function card(lista){
        let template=" ";
        
        
        
            for (const iterator of lista) {
                let checked=" "
                if(iterator.fav==true){
                    checked="checked"
                    template+=`<article class="flex flex-col w-1/5 items-center gap-2  object-cover border-solid border-2 border-blue-400 rounded-md max-md:w-full shadow-lg shadow-indigo-900 bg-neutral-800">
            
            <img src="https://moviestack.onrender.com/static/${iterator.image} " alt="movie advertisement">
            <h4 class="text-lg font-mono font-bold text-purple-600">${iterator.title}</h4>
            <h6 class="italic  underline text-purple-400">${iterator.tagline}</h6>
            <p class="text-sm line-clamp-3 hover:line-clamp-none max-md:line-clamp-none text-violet-300">${iterator.overview}</p>
           
            <div class="flex flex-row justify-around justify-self-end w-full responsive"> 
            <div class="flex">
            <input type="checkbox" id="favButton${iterator.id}" data-id="${iterator.id}" class="peer hidden"  value="fav"  ${checked}/>
            <label for="favButton${iterator.id}" class="select-none cursor-pointer rounded-lg border-2 border-gray-200
            py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> 
            FAV
            </label>
            </div>
            <a class="underline text-white" href="./details.html?id=${iterator.id}">See details</a>
            </div>
            </article>
        `
                }
                else{
                    template+=`<article class="flex flex-col w-1/5 items-center gap-2  object-cover border-solid border-2 border-blue-400 rounded-md max-md:w-full shadow-lg shadow-indigo-900 responsive">
            
            <img src="https://moviestack.onrender.com/static/${iterator.image} " alt="movie advertisement">
            <h4 class="text-lg font-mono font-bold text-purple-600">${iterator.title}</h4>
            <h6 class="italic  underline text-purple-400">${iterator.tagline}</h6>
            <p class="text-sm line-clamp-3 hover:line-clamp-none max-md:line-clamp-none text-violet-300">${iterator.overview}</p>
           
            <div class="flex flex-row justify-around justify-self-end w-full responsive"> 
            
            <div class="flex">
            <input type="checkbox" id="favButton${iterator.id}" data-id="${iterator.id}" class="peer hidden"  value="fav"  ${checked}/>
            <label for="favButton${iterator.id}" class="select-none cursor-pointer rounded-lg border-2 border-gray-200
            py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> 
            FAV
            </label>
            </div>
            <a class="underline" href="./details.html?id=${iterator.id}">See details</a>
            </div>
            </article>
        `
                }
                
        }
        return template;
        }

export function renderCards(cards, elemento){
    
    if(cards==" "){
        elemento.innerHTML= `<h2 class="text-2xl flex flex-row justify-center items-center text-white"> "There are no movies" </h2>`
        
    }
    else{
        elemento.innerHTML = cards;
    }
}

export function createOptionsSelect(list,selector) {
    let aux=" "
    for (const iterator of list) {
        aux+= `<option value="${iterator}">${iterator}</id=option>`
    }
    selector.innerHTML=`<option value="genre" hidden selected>Select a Genre</option> <option value="all">All</option> ` + aux
    
}

export function filtrarPorNombre(lista, nombre) {
    //que me recorra la lista y filtre por nombre
   
   
   return lista.filter((movie) => movie.title.toLowerCase().startsWith( nombre.toLowerCase() ) )
}

export function filterForGenre(list, genre){
    //busco en los generos de la lista de peliculas, aquellas que INCLUYAN el genero buscado
    if(genre!="all"){
      return list.filter(movie=>movie.genres.includes(genre)) 
    }
    else if(genre=="all"){
      return list
    }
    else{
      return list
    }
  }
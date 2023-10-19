const secmovform=document.querySelector("#searchbar");
secmovform.addEventListener('submit',(e)=>{
e.preventDefault();
const search=document.querySelector("#mySearch");
MovieData(search.value);
})


const MovieData= async(search)=>{
    try {
        const res=await fetch(`http://www.omdbapi.com/?s=${search}&apikey=5f7bbbc0`)
        const data= await res.json()
        console.log(data);
        cloneData(data.Search);
        
    } catch (error) {
        console.log(error);
        
    }
}
const movie=prompt("Search a movie...")
console.log(movie);
MovieData(movie)

const cloneData=(movies)=>{
    const parentcard=document.querySelector(".cards-parent");
    const moviecardtemp=document.querySelector("#movie-card-template");
    parentcard.innerHTML=""
    
    for (let i=0;i<movies.length;i++){
        if(movies[i].Poster==="N/A"){
            continue
        }
        const cardclone=moviecardtemp.content.cloneNode(true);

        mackCard(cardclone,movies[i]);
        parentcard.appendChild(cardclone);
    }
    
}

const mackCard=(cardclone,movie)=>{
    // console.log(movie);
    const cadImg=cardclone.querySelector(".card-image");
    const cadTitle=cardclone.querySelector("#title span");
    const cadYear=cardclone.querySelector("#year span");
    const cadType=cardclone.querySelector(".movie-type span");

    cadImg.src=movie.Poster;
    cadTitle.innerHTML=movie.Title;
    cadYear.innerHTML=movie.Year;
    cadType.innerHTML=movie.Type.toUpperCase();
}
// featch reaturn a promise
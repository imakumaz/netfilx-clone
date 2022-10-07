const main = document.querySelector(".main");


fetch(tv_shows_genereslist_http + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     data.genres.forEach(item => {
         fetchTVShowsByGenres(item.id, item.name);
     })
 });
 const fetchTVShowsByGenres =(id, genres) =>{
     fetch(tv_genres_https + new URLSearchParams({
          api_key: api_key,
          with_genres: id,
          page:Math.floor(Math.random() * 3) + 1
     }))
     .then(res => res.json())
    .then(data => {
        
        makeCategoryElement(`${genres}`, data.results);
        console.log(data);
        })

    .catch(err =>  console.log(err));
 }
 const makeCategoryElement = (category, data) => {
     main.innerHTML += `
     <div class="movie-list">
     <button class="pre-btn"><img src="img/pre.png" alt="" /></button>
  
     <h1 class="movie-category">${category.split("_").join(" ")}</h1>
 
     <div class="movie-container" id="${category}">
     </div>
 
     <button class="nxt-btn"><img src="./img/nxt.png" alt=""></button>
   </div>
   `;
   console.log(category);
   makeCards(category, data);
 }
 const makeCards = (id, data) => {
     const tvcontainer = document.getElementById(id);
     data.forEach((item, i) => {
         if(item.backdrop_path == null){
             item.backdrop_path = item.poster_path;
             if(item.backdrop_path == null){
                 return;
             }
         }
 
         tvcontainer.innerHTML += `
         <div class="movie" onclick="location.href = '/TvShows/${item.id}'">
         <img src="${img_url}${item.backdrop_path}" alt="">
         <p class="movie-title">${item.name}</p>
       </div>
       `;
       if(i == data.length - 1){
         setTimeout(() => {
             setupScrolling();
         }, 100);
     }
     })
}
 
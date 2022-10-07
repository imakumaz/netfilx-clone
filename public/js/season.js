const main = document.querySelector(".main");




var idno = location.pathname;
console.log(idno);
id=idno.split("/");
console.log(id);
var season_id= "/"+id[2];

 TvShows_id= "/"+id[1];

console.log(season_id);
console.log(TvShows_id);






fetch(`${tv_detail_http}${TvShows_id}/season${season_id}?` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     console.log(data);
   setupseasonInfo(data);
     
    
 })

 const setupseasonInfo = (data) => {
     const season = document.querySelector('.movie-name');
     const genres = document.querySelector('.genres');
     const des = document.querySelector('.des');
     const title = document.querySelector('title');
     const backdrop = document.querySelector('.movie-info');
 
     title.innerHTML = season.innerHTML = data.name; 
     if(data.backdrop_path == null){
          data.backdrop_path = data.poster_path;
      }
      if(data.overview==""){
        data.overview = data.episodes[0].overview.substring(0, 250) + '...';}
  
      des.innerHTML =  data.overview.substring(0,250) + '....';
  
      backdrop.style.backgroundImage = `url(${original_img_url}${data.backdrop_path})`;
  }
  
//   const formatString = (currentIndex, maxIndex) => {
//       return (currentIndex == maxIndex - 1) ? '' : ', ';
//   }

fetch(`${tv_detail_http}${TvShows_id}/season${season_id}/credits?` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     console.log(data);
     const star = document.querySelector('.starring');
     for(let i = 0; i < 5; i++){
         star.innerHTML += data.cast[i].name+', ';
     }

 })

 fetch(`${tv_detail_http}${TvShows_id}/season${season_id}?` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
         let episodes=data.episodes;

         let episodelength=episodes.length;
         let episodename=[];
         let episodeimg=[];
         for( let i=0;i<episodelength;i++){
               episodename[i]=episodes[i].name;
               episodeimg[i]=episodes[i].still_path;}
               console.log(episodename);
               console.log(episodeimg);   
               makeCategoryElement(episodename,episodeimg);
 })


 const makeCategoryElement = (category, data) => {
     main.innerHTML += `
     <div class="movie-list">
     <button class="pre-btn"><img src="img/pre.png" alt="" /></button>
  
     
 
     <div class="movie-container" id="${category}">
     </div>
 
     <button class="nxt-btn"><img src="img/nxt.png" alt=""></button>
   </div>
   `;
   makeCards(category, data);

 }

 const makeCards = (id, data) => {
     const tvcontainer = document.getElementById(id);
     for(let i=0;i<id.length;i++) {
         if(data[i]== null){
                 return; 
         }
 
         tvcontainer.innerHTML += `
         <div class="movie" onclick="location.href = '${TvShows_id}${season_id}/${i}'">
         <img src="${img_url}${data[i]}" alt=" episode image is unavailable">
         <p class="movie-title">${id[i]}</p>
       </div>
       `;
       if(i == data.length - 1){
         setTimeout(() => {
             setupScrolling();
         }, 100);
     }
     }
}
 
       




     let season = document.querySelector('.recommendations-container');
     for(let i = 0; i < 16; i++){
          console.log()
         
     //     season.innerHTML += `
     //     <div class="movie" onclick="location.href = '/TvShows${TvShows_id}/${data.seasons[i].season_number}/${data.episodes[i].episode_number}'">
     //         <img src="${img_url}${data.episodes[i].poster_path}" alt="">
     //         <p class="movie-title">${data.episodes[i].name}</p>
     //     </div>
     //     `;
     }
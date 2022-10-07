let idno = location.pathname;
let TvShows_id= idno.slice(8);
console.log(TvShows_id);
var season=[];


fetch(`${tv_detail_http}${TvShows_id}?` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     console.log(data);
      season=data.season;
     console.log(season);
     setupTvInfo(data);
     
    
 })
 
 
 
 const setupTvInfo = (data) => {
     const tvName = document.querySelector('.movie-name');
     const genres = document.querySelector('.genres');
     const des = document.querySelector('.des');
     const title = document.querySelector('title');
     const backdrop = document.querySelector('.movie-info');
 
     title.innerHTML = tvName.innerHTML = data.name; 
     // genres.innerHTML = `${data.release_date.split('-')[0]} | `;
     // for(let i = 0; i < data.genres.length; i++){
     //     genres.innerHTML += data.genres[i].name + formatString(i, data.genres.length);
     // }
 
     if(data.adult == true){
         genres.innerHTML += ' | +18';
     }
 
     if(data.backdrop_path == null){
         data.backdrop_path = data.poster_path;
     }
 
     des.innerHTML = data.overview.substring(0, 250) + '...';
 
     backdrop.style.backgroundImage = `url(${original_img_url}${data.backdrop_path})`;
 }
 
 const formatString = (currentIndex, maxIndex) => {
     return (currentIndex == maxIndex - 1) ? '' : ', ';
 }
 // fetching cast info
 fetch(`${tv_detail_http}${TvShows_id}/credits?` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     console.log(data);
     const star = document.querySelector('.starring');
     for(let i = 0; i < 5; i++){
         star.innerHTML += data.cast[i].name +", ";
     }
 })
 
 fetch(`${tv_detail_http}${TvShows_id}/videos?` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     console.log(data);
     let trailerContainer = document.querySelector('.trailer-container');
 
     let maxClips = (data.results.length > 4) ? 4 : data.results.length;
 
     for(let i = 0; i < maxClips; i++){
          if(data.results[i].type == "Trailer" || data.results[i].type == "Clip" || data.results[i].type == "Teaser"){
         console.log(data.results[i].key);
         trailerContainer.innerHTML += `
         <iframe src="https://youtube.com/embed/${data.results[i].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         `;}
         
     }
 })
 
 fetch(`${tv_detail_http}${TvShows_id}seasons?` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     console.log(data.seasons);
     console.log(data);
     
     let season = document.querySelector('.recommendations-container');
     for(let i = 0; i < 16; i++){
            if(data.seasons[i].poster_path == null){
                data.seasons[i].poster_path = data.backdrop_path;
               // i++;
            }
         
         season.innerHTML += `
         <div class="movie" onclick="location.href = '${TvShows_id}/${data.seasons[i].season_number}'">
             <img src="${img_url}${data.seasons[i].poster_path}" alt="">
             <p class="movie-title">${data.seasons[i].name}</p>
         </div>
         `;
     }
 })

 function vidPlay(){
    document.getElementsByClassName("video-frame")[0].classList.toggle("active");
    x = document.getElementById('play').innerHTML
    fetch(`${tv_detail_http}${TvShows_id}/videos?` + new URLSearchParams({
        api_key: api_key
    }))
    .then(res => res.json())
    .then(data => {
        for(var i=0;i<data.results.length;i++){
            if(data.results[i].type=="Clip" || data.results[i].type=="Trailer"){
                var frame = document.getElementById("frame");
                var link = "https://youtube.com/embed/" + data.results[i].key;
                frame.setAttribute("src",link);
                break;

            }
        }
        console.log(data);})

}
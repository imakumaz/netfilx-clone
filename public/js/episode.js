let idno = location.pathname;
console.log(location.pathname);
id=idno.split("/");
console.log(id);
let episode_number=id[3];
let TvShows_id= "/"+id[1];
let season_id = "/"+id[2];
console.log(TvShows_id);
console.log(episode_number);
console.log(season_id);



fetch(`${tv_detail_http}${TvShows_id}/season${season_id}?` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     console.log(data);
    //  season=data.season;
    //  console.log(season);
     const episodename = document.querySelector('.movie-name');
     const genres = document.querySelector('.genres');
     const des = document.querySelector('.des');
     const title = document.querySelector('title');
     const backdrop = document.querySelector('.movie-info');
     const star = document.querySelector('.starring');
 
     title.innerHTML = episodename.innerHTML = data.episodes[episode_number].name;
     genres.innerHTML="Season: "+data.season_number;
     des.innerHTML = data.episodes[episode_number].overview.substring(0,250) + '....';
     console.log(data.overview);
    backdrop.style.backgroundImage = `url(${original_img_url}${data.episodes[episode_number].still_path})`;
    
     for(let i = 0; i < 5; i++){
        if(data.guest_stars== null){
            star.innerHTML+="            "+"No Staring found";
         }
                   star.innerHTML += data.guest_stars[i].name + ",";
             }
     
    
 })
 
 
 
//  const setupepisodeInfo = (data) => {
//      const episodename = document.querySelector('.movie-name');
//      const genres = document.querySelector('.genres');
//      const des = document.querySelector('.des');
//      const title = document.querySelector('title');
//      const backdrop = document.querySelector('.movie-info');
//      const star = document.querySelector('.starring');
 
//      title.innerHTML = episodename.innerHTML = data.name;
//      for(let i = 0; i < 5; i++){
//                    star.innerHTML += data.guest_stars[i].name + ",";
//              }
//      genres.innerHTML="Season: "+data.season_number;
//      // genres.innerHTML = `${data.release_date.split('-')[0]} | `;
//      // for(let i = 0; i < data.genres.length; i++){
//      //     genres.innerHTML += data.genres[i].name + formatString(i, data.genres.length);
//      // }
 
//      // if(data.adult == true){
//      //     genres.innerHTML += ' | +18';
//      // }
 
//      // if(data.backdrop_path == null){
//      //     data.backdrop_path = data.poster_path;
//      // }
 
//      des.innerHTML = data.overview + '...';
//       console.log(data.overview);
//      backdrop.style.backgroundImage = `url(${original_img_url}${data.still_path})`;
//  }
 
//  const formatString = (currentIndex, maxIndex) => {
//      return (currentIndex == maxIndex - 1) ? '' : ', ';
//  }
//  // fetching cast info
//  fetch(`${tv_detail_http}${TvShows_id}/credits?` + new URLSearchParams({
//      api_key: api_key
//  }))
//  .then(res => res.json())
//  .then(data => {
//      console.log(data);
//      const star = document.querySelector('.starring');
//      for(let i = 0; i < 5; i++){
//          star.innerHTML += data.cast[i].name;
//      }
//  })
 
//  fetch(`${tv_detail_http}${TvShows_id}/videos?` + new URLSearchParams({
//      api_key: api_key
//  }))
//  .then(res => res.json())
//  .then(data => {
//      console.log(data);
//      let trailerContainer = document.querySelector('.trailer-container');
 
//      let maxClips = (data.results.length > 4) ? 4 : data.results.length;
 
//      for(let i = 0; i < maxClips; i++){
//           if(data.results[i].type == "Trailer"){
//          console.log(data.results[i].key);
//          trailerContainer.innerHTML += `
//          <iframe src="https://youtube.com/embed/${data.results[i].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//          `;}
         
//      }
//  })
 
//  fetch(`${tv_detail_http}${TvShows_id}seasons?` + new URLSearchParams({
//      api_key: api_key
//  }))
//  .then(res => res.json())
//  .then(data => {
//      console.log(data.seasons);
//      console.log(data);
     
//      let season = document.querySelector('.recommendations-container');
//      for(let i = 0; i < 16; i++){
//             if(data.seasons[i].poster_path == null){
//                 data.seasons[i].poster_path = data.backdrop_path;
//                // i++;
//             }
         
//          season.innerHTML += `
//          <div class="movie" onclick="location.href = '${TvShows_id}/${data.seasons[i].season_number}'">
//              <img src="${img_url}${data.seasons[i].poster_path}" alt="">
//              <p class="movie-title">${data.seasons[i].name}</p>
//          </div>
//          `;
//      }
//  })
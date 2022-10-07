const main = document.querySelector(".main2");
const main1 = document.querySelector(".main1");
let vid_key = [];
let img_arr = [];
let sliders = [];
const carousel = document.querySelector(".carousel");
const redirect = document.querySelector(".carousel-container");

let slideIndex = 0;


fetch(`${base_url}/trending/movie/week?`+ new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    console.log(data);
    for(i=0;i<data.results.length;i++){
        console
        vid_key[i] = data.results[i];
    }
    setupMovieInfo(data.results[0]);
    
})





const setupMovieInfo = (data) => {
    console.log(vid_key[0].id);
    console.log(data);
    console.log(vid_key);
    // fetch(`${movie_detail_http}/${data.id}?` + new URLSearchParams({
    //     api_key: api_key
    // }))
    // .then(res => res.json())
    // .then(tl_genre => {console.log(tl_genre);})
//     const movieName = document.querySelector('.tl-name');
//     const genres = document.querySelector('.tl-genres');
//     const des = document.querySelector('.tl-des');
//     const title = document.querySelector('title');
//     const backdrop = document.getElementsByTagName('img');
//     // title.innerHTML = movieName.innerHTML = data.title; 
//     console.log(backdrop);
//     fetch(`${movie_detail_http}/${data.id}/videos?` + new URLSearchParams({
//         api_key: api_key
//     }))
//     .then(res => res.json())
//     .then(trailer => {
//         console.log(trailer);
//         for(let i = 0; i < trailer.results.length; i++){
//             if(trailer.results[i].type == "Trailer"){
//                 // const ele = document.createElement('p');
//                 // ele.setAttribute('id','video-key');
//                 // ele.textContent = trailer.results[i].key;
//                 // document.getElementById('lone').appendChild(ele);
//             // console.log(trailer.results[i].key);}
// }}})

    // if(data.backdrop_path == null){
    //     data.backdrop_path = data.poster_path;
    // }
    //overview
    // des.innerHTML = data.overview.substring(0,data.overview.indexOf(".")+1);

    // backdrop[1].setAttribute("src", `${original_img_url}${data.backdrop_path}`);   



//     fetch(`${movie_detail_http}/${data.id}/credits?` + new URLSearchParams({
//     api_key: api_key
//     }))
//     .then(res => res.json())
//     .then(data => {
//         const cast = document.querySelector('.tl-starring');
//         for(let i = 0; i < 5; i++){
//             // cast.innerHTML += data.cast[i].name + formatString(i, 5);
//         }
//     })
// }




const createSlide = () =>{
    if(slideIndex >= 15){
        slideIndex = 0;
    }
     
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    
    console.log(vid_key);
    
    if(slideIndex == 3){
        h1_title = vid_key[slideIndex].title;
    }
    else if(vid_key[slideIndex].original_title == null){
        h1_title = vid_key[slideIndex].original_name;
    }
    else{
        h1_title = vid_key[slideIndex].original_title;
    }
    // des.innerHTML = data.overview.substring(0,data.overview.indexOf(". ")+1);
    console.log()
    p.appendChild(document.createTextNode(vid_key[slideIndex].overview.substring(0,vid_key[slideIndex].overview.indexOf(".")+1)));
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(h1_title));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    // main.appendChild(carousel);


    
    imgElement.src = `${original_img_url}${vid_key[slideIndex].backdrop_path}`;
    
    imgElement.className = vid_key[slideIndex].id;
    console.log(imgElement.className);
    
    imgElement.addEventListener('click', function handleClick(event) {
        location.href = "/" + imgElement.className;
        
    })


    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'slider-title';
    p.className = 'slider-des';
    sliders.push(slide);
    // console.log(slide);
    // console.log(`calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`);
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - (${30 * (sliders.length - 2)}px+${24}px})`;
        // carousel.removeChild(sliders[sliders.length-1]);
        // sliders.pop();

    }
    slideIndex++;

}
setInterval(() => {
    createSlide();
},3000);

}

// const pause_div = [...document.querySelectorAll(".slider-content")];
// pause_div.forEach((item) => {
//     console.log(item);
// })



// redirect.addEventListener('click',()=>{
//     location.href = `/${vid_key[slideIndex].key}`;
// })


//     //Creating dom
// }
//formatting string
const formatString = (currentIndex, maxIndex) => {
    return (currentIndex == maxIndex - 1) ? '' : ', ';
}

// vid_key.forEach(id => {
//     fetchMovieDetails(id);
// })
// const fetchMovieDetails = (id) => {
//     console.log(id);
//     // fetch(`${movie_detail_http}/${id}?` + new URLSearchParams({
//     //     api_key: api_key
//     // }))
//     // .then(res => res.json())
//     // .then(data =>{
//     //     console.log(data);
        
//     // })
//     // .catch(err =>  console.log(err))

// }


//Footer section
fetch(genres_list_http + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    // console.log(data);
    data.genres.forEach(item => {
        fetchMoviesListByGenres(item.id, item.name);
    })
});

const fetchMoviesListByGenres = (id, genres) => {
    fetch(movie_genres_http + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1
    }))
    .then(res => res.json())
    .then(data => {
        // console.log(data.results);
        makeCategoryElement(`${genres}_movies`, data.results);    })

    .catch(err =>  console.log(err));
}
    


const makeCategoryElement = (category, data) => {
    main.innerHTML += `
    <div class="movie-list">
    <button class="pre-btn"><img src="img/pre.png" alt="" /></button>
 
    <h1 class="movie-category">${category.split("_").join(" ")}</h1>

    <div class="movie-container" id="${category}">
    </div>

    <button class="nxt-btn"><img src="img/nxt.png" alt=""></button>
  </div>
  `;
  makeCards(category, data);
}

const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    // console.log(movieContainer);
    data.forEach((item, i) => {
        if(item.backdrop_path == null){
            item.backdrop_path = item.poster_path;
            if(item.backdrop_path == null){
                return;
            }
        }

        movieContainer.innerHTML += `
        <div class="movie" onclick="location.href = '/${item.id}'">
        <img src="${img_url}${item.backdrop_path}" alt="">
        <p class="movie-title">${item.title}</p>
      </div>
      `;
      if(i == data.length - 1){
        setTimeout(() => {
            setupScrolling();
        }, 100);
    }
    })
}


// function playVideo(){
//     var vid_key = document.getElementById("video-key").textContent;
//     alert(vid_key);
//     var tag= document.createElement('div');
//     var par = document.getElementsByTagName('header');
//     head

// }
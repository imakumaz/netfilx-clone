fetch(`${tv_toprated}` + new URLSearchParams({
     api_key: api_key
 }))
 .then(res => res.json())
 .then(data => {
     console.log(data);
     slide(data); 
 })
const slide=(data)=>{
 for (let i = 0; i < 8; i++) {
     const swiper = document.getElementById("swipe");
     if (data.results[i].backdrop_path == null) {
          data.results[i].backdrop_path = data.results[i].poster_path;
          
     }
     

  swiper.innerHTML += `<div class="swiper-slide">
  <a onclick="location.href='/${data.results[i].id}'">
    <img src="${img_url}${data.results[i].backdrop_path}" class ="image">     
  </a>
  </div>`;}
}
const swiper = new swiper('.swiper', {

     loop: true,
     pagination: {
       el: '.swiper-pagination',
     },

     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
    
   });

  

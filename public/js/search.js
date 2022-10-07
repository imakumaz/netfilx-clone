function hover() {
     document.getElementById("searchbar").classList.toggle("active");
     document.getElementById("searchbox").classList.toggle("active");
}

var input_nav = document.getElementById("searchbar");


function searchresults() {
     var get = document.getElementById("searchbar").value;
     res = get.split(" ").join("+");
     console.log(res);
     fetch(`${search_http}` + new URLSearchParams({
          api_key: api_key
     }) + '&query=' + res
     )
          .then(res => res.json())
          .then(data => {
               console.log(data);
               searchres(data);
          })
}

const searchres = (data) => {
     const searchbox2 = document.getElementById("searchbox");
     console.log(searchbox2.innerHTML);
        x= document.getElementById("searchbox").innerHTML="";
             console.log(x);

     console.log(data.results.length);
     for (let i = 0; i < data.results.length; i++) {
          if (data.results[i].backdrop_path == null) {
               data.results[i].backdrop_path = data.results[i].poster_path;
               if (data.results[i].backdrop_path == null) {
                    return;
               }
          }
          
     
      searchbox2.innerHTML += `
       <a onclick="location.href='/${data.results[i].id}'">
         <img src="${img_url}${data.results[i].backdrop_path}" class ="img">
         <div class="content">
           <h6>${data.results[i].title}</h6>
           
         </div>
       </a>`;
     
     }}
          

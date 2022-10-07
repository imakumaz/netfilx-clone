const f_btn = document.querySelectorAll(".f-btn");
f_btn.forEach(btn => {
	btn.addEventListener("click", ()=>{
		var ques = "answer" + btn.id.charAt(btn.id.length -1);
		card = document.getElementById(ques);

		if(card.style.display == "none"){
			card.style.display = "block";
		}
		else{
			card.style.display = "none";
		}
	})
})

// function loading_func(){
// 	var loader = document.querySelector("body");
// 	loader.style.display = "block";



// }

// // QUESTION 3
// const question3 = document.getElementById("answer3");
// const question3btn = document.getElementById("question3");
// question3btn.onclick = function () {
// 	if(question3.style.display !== "none"){
// 		question3.style.display = "none";
// 	}else{
// 		question3.style.display = "block";
// 	}
// };
// // QUESTION 4
// const question4 = document.getElementById("answer4");
// const question4btn = document.getElementById("question4");
// question4btn.onclick = function () {
// 	if(question4.style.display !== "none"){
// 		question4.style.display = "none";
// 	}else{
// 		question4.style.display = "block";
// 	}
// };
// // QUESTION 5
// const question5 = document.getElementById("answer5");
// const question5btn = document.getElementById("question5");
// question5btn.onclick = function () {
// 	if(question5.style.display !== "none"){
// 		question5.style.display = "none";
// 	}else{
// 		question5.style.display = "block";
// 	}
// };
// // QUESTION 6
// const question6 = document.getElementById("answer6");
// const question6btn = document.getElementById("question6");
// question6btn.onclick = function () {
// 	if(question6.style.display !== "none"){
// 		question6.style.display = "none";
// 	}else{
// 		question6.style.display = "block";
// 	}
// };
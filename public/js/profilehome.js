function togglePopup(){
     document.getElementById("profileid").classList.toggle("active");
    
     document.getElementById("main1id").classList.toggle("active");
     document.getElementById("main2id").classList.toggle("active");
     

}
function fun1(){
     setTimeout(function fun(){
     var a=document.getElementById("fl").className;
  var b=document.getElementById("fs").className;
  if(a=="formlogin"&&b=="formsignup1"){
     document.getElementById("fl").className="formlogin1";
     document.getElementById("fs").className="formsignup";
  }
  else if(a=="formlogin1"&&b=="formsignup"){
     document.getElementById("fl").className="formlogin";
     document.getElementById("fs").className="formsignup1";
  }
 
 },350);
 }
 const container=document.querySelectorAll(".form-conatiner");
  pwShowHide=document.querySelectorAll(".showHidePw");
  pwShowHide2=document.querySelectorAll(".showHidePw2");
  pwFields=document.querySelectorAll(".password");
  pwFields2=document.querySelectorAll(".password2");
  pwShowHide3=document.querySelectorAll(".showHidePw3");
  pwFields3=document.querySelectorAll(".password3");
 
  pwShowHide.forEach(eyeIcon=>{
     eyeIcon.addEventListener("click", ()=>{
         pwFields.forEach(pwField =>{
             if(pwField.type ==="password" ){
                 pwField.type = "text";
 
                 pwShowHide.forEach(icon =>{
                     icon.classList.replace("fa-eye-slash", "fa-eye");
                 })
             }else{
                 pwField.type = "password";
 
                 pwShowHide.forEach(icon =>{
                     icon.classList.replace("fa-eye", "fa-eye-slash");
                 })
             }
         }) 
     })
 })
 pwShowHide2.forEach(eyeIcon2=>{
     eyeIcon2.addEventListener("click", ()=>{
         pwFields2.forEach(pwField2 =>{
             if(pwField2.type ==="password" ){
                 pwField2.type = "text";
 
                 pwShowHide2.forEach(icon =>{
                     icon.classList.replace("fa-eye-slash", "fa-eye");
                 })
             }else{
                 pwField2.type = "password";
 
                 pwShowHide2.forEach(icon =>{
                     icon.classList.replace("fa-eye", "fa-eye-slash");
                 })
             }
         }) 
     })
 })
 pwShowHide3.forEach(eyeIcon3=>{
    eyeIcon3.addEventListener("click", ()=>{
        pwFields3.forEach(pwField3 =>{
            if(pwField3.type ==="password" ){
                pwField3.type = "text";

                pwShowHide3.forEach(icon =>{
                    icon.classList.replace("fa-eye-slash", "fa-eye");
                })
            }else{
                pwField3.type = "password";

                pwShowHide3.forEach(icon =>{
                    icon.classList.replace("fa-eye", "fa-eye-slash");
                })
            }
        }) 
    })
})

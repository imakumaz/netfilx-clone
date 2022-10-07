//  function fun1(){
//     var a=document.getElementById("fl").className;
//  var b=document.getElementById("fs").className;
//  if(a=="formlogin"&&b=="formsignup1"){
//     document.getElementById("fl").className="login-form1";
//     document.getElementById("fs").className="formsignup";
//  }
//  else if(a=="formlogin1"&&b=="formsignup"){
//     document.getElementById("fl").className="formlogin";
//     document.getElementById("fs").className="formsignup1";
//  }
// }

function fun1(){
    var element = document.getElementById("fl");
    element.classList.toggle("formlogin1");
    var element1 = document.getElementById("fs");
    element1.classList.toggle("formsignup1")
}


const container=document.querySelectorAll(".form-conatiner");
 pwShowHide=document.querySelectorAll(".showHidePw");
 pwShowHide2=document.querySelectorAll(".showHidePw2");
 pwFields=document.querySelectorAll(".password");
 pwFields2=document.querySelectorAll(".password2");

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

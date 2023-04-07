var form2 = document.getElementById("form-wrapper-2");
var email2 = document.getElementById("emaillogin");
var error6 = document.getElementById("erroremail");
var password2 = document.getElementById("Passwordlogin");
var error7 = document.getElementById("errorpassword");
var btn2 = document.getElementById("btnlogin");



password2.oninput = function () {
    if (password2.value.length >= 1 && password2.value.length <= 3) {
      error7.innerText = "Minimun 4 characters are allowed..!"
      error7.style.color = "red"
      return false;
    }
    else if (password2.value.length >= 4) {
      error7.innerText = "Success"
      error7.style.color = "#42e742"
      return false;
    }
    else {
      error7.innerText = "";
      error7.style.color = "";
    }
}

btn2.onclick = function(){
    if(email2.value.length < 1){
        error6.innerText = "Plz enter your Email..!";
        error6.style.color = "red";
        return false;
    }
    else if(localStorage.getItem("email") !== email2.value){
        error6.innerText = "Plz enter your correct Email..!";
        error6.style.color = "red";
        return false;
    }
    else if(password2.value.length < 1){
        error7.innerText = "Enter your password..!";
        error7.style.color = "red";
        return false;
    }
    else if (password2.value.length >= 1 && password2.value.length <= 3) {
        error7.innerText = "Minimun 4 characters are allowed..!"
        error7.style.color = "red"
        return false;
      }
    else if(localStorage.getItem("password2") !== password2.value){
        error7.innerText = "Wrong password..!";
        error7.style.color = "red";
        return false;
    }
    else{
        error6.innerText = "";
        error7.innerText = "";
    }
}
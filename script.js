var form = document.getElementById("form-wrapper");
var firstname = document.getElementById("First-name");
var lastname = document.getElementById("Last-name");
var email = document.getElementById("email");
var Password = document.getElementById("Password");
var ConfirmPassword = document.getElementById("Confirm-Password");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");
var error5 = document.getElementById("error5");
var margin = document.getElementById("el");
var btn = document.getElementById("btn");

// first-name input

firstname.oninput = function () {
  if (firstname.value.length >= 1) {
    error1.innerText = "Success"
    error1.style.color = "#42e742";
    margin.style.marginBottom = "0px"
    return false;
  } else {
    error1.innerText = ""
    margin.style.marginBottom = ""
    error1.style.color = "";
  }
}

// last-name input

lastname.oninput = function () {
  if (lastname.value.length >= 1) {
    error2.innerText = "Success"
    error2.style.color = "#42e742";
    return false;
  } else {
    error2.innerText = ""
    error2.style.color = "";
  }
}

// Password input

Password.oninput = function () {
  if (Password.value.length >= 1 && Password.value.length <= 3) {
    error4.innerText = "Minimun 4 characters are allowed..!"
    error4.style.color = "red"
    return false;
  }
  else if (Password.value.length >= 4) {
    error4.innerText = "Success"
    error4.style.color = "#42e742"
    return false;
  }
  else {
    error4.innerText = "";
    error4.style.color = "";
  }
}

// Confirm-password input

ConfirmPassword.oninput = function () {
  if (ConfirmPassword.value.length >= 1 && ConfirmPassword.value.length <= 3) {
    error5.innerText = "Minimun 4 characters are allowed..!";
    error5.style.color = "red";
    return false;
  }
  else if (ConfirmPassword.value.length >= 4) {
    error5.innerText = "Success";
    error5.style.color = "#42e742";
    return false;
  }
  else {
    error5.innerText = "";
    error5.style.color = "";
  }
}


// for button

btn.onclick = function () {
  var emailValue = email.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (firstname.value.length == "") {
    error1.innerText = "Plz enter your first name..! ";
    error1.style.color = "red";
    margin.style.marginBottom = "0px";
    return false;
  }
  else if (lastname.value.length == "") {
    error2.innerText = "Plz enter your last name..!"
    error2.style.color = "red";
    return false;
  } 
  else if (emailValue === "") {
    error3.innerText = "Email is required";
    return false;
  } 
  else if (!emailRegex.test(emailValue)) {
    error3.innerText = "Invalid email address";
    return false;
  } 
  else if (!emailValue.endsWith("gmail.com")) {
    error3.innerText = "Invalid email address. Only Gmail addresses are allowed.";
    return false;
  }
  else if (Password.value.length == "") {
    error4.innerText = "Plz enter your password..!"
    return false;
  }
  else if(ConfirmPassword.value.length == ""){
    error5.innerText = "Plz enter your password..!"
    return false;
  }
  else if (ConfirmPassword.value !== Password.value) {
    error5.innerText = "Passwords do not match..!";
    error5.style.color = "red";
    return false;
  }
  else {
    error3.innerText = "";
    error4.innerText = "";
    error5.innerText = "";
    error5.style.color = "";
    localStorage.setItem("email", email.value);
    localStorage.setItem("Password", Password.value);
  }
}

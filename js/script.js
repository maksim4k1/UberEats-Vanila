const openSignin = document.getElementById("openSignin");
const signin = document.getElementById("signin");

openSignin.addEventListener("click", toggleSignin);
signin.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleSignin();
    }
})
function toggleSignin() {
    signin.classList.toggle("toggle-modal");
    document.body.classList.toggle("body-overflow");
}

const openRegister = document.getElementById("openRegister");
const register = document.getElementById("register");

openRegister.addEventListener("click", toggleRegister);
register.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleRegister();
    }
})
function toggleRegister() {
    register.classList.toggle("toggle-modal");
    document.body.classList.toggle("body-overflow");
}
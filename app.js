let password = document.querySelector("#password");
let img = document.querySelector("#img");

img.addEventListener("click", () => {

    if (password.type == "password") {
        password.type = "text";
        img.src="images/eye-open.png"
    }
    else if (password.type == "text") {
        password.type = "password";
        img.src="images/eye-close.png"
    }

})
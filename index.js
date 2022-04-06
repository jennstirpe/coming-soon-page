
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");
const errorIcon = document.querySelector("#error-icon");
const errorMessage = document.querySelector("#error-message");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailInput.value === "" || !emailInput.value.match(validRegex)) {
        errorIcon.classList.remove("error");
        errorMessage.classList.remove("error");
    } else {
        errorIcon.classList.add("error");
        errorMessage.classList.add("error");
    }
})
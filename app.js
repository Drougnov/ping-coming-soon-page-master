const form = document.getElementById('form')
const email = document.getElementById('mail')
const errorMessage = document.getElementById('error')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit",(e)=>{
    let emailValue = email.value
    if(validateEmail(emailValue)){
        errorMessage.style.display= "none";
    }
    else{
        email.style.border = "1px solid hsl(223, 100%, 88%)";
        errorMessage.style.display = "block";
        e.preventDefault()
    }
})
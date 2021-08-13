let checkTop = document.querySelector(".check-top")
let changeTop = document.querySelector(".change-top")
let fullName = document.getElementById("full-name")
let mail = document.getElementById("mail")
let mobile = document.getElementById("mobile")
let password = document.getElementById("password")
let confirm = document.getElementById("confirm")
let register = document.getElementById("register")
let submitError = document.getElementById("submit-error")
let c = 0


let nameError = document.getElementById("name-error")
let mailError = document.getElementById("mail-error")
let mobileError = document.getElementById("mobile-error")
let passwordError = document.getElementById("password-error")
let confirmError = document.getElementById("confirm-error")


function check()
{
    checkTop.classList.toggle("check-after")
    c++
}
changeTop.addEventListener('click',function(){
    document.body.classList.toggle("dark-body")
})

function validation()
{
    if (fullName.value == "" || mail.value == "" || mobile.value == "" || password.value == "" || confirm.value == "" || c % 2 == 0)
        submitError.style.display = 'block'
    else
        submitError.style.display = 'none'

    if (password.value.length < 6 || password.value.length > 20)
       passwordError.style.display = 'block'
    else
       passwordError.style.display = 'none'

    if(password.value != confirm.value )
       confirmError.style.display = 'block'
    else
       confirmError.style.display = 'none'
       

    if (mobile.value.length != 10 || mobile.value.match(/^\d+$/) == null)
       mobileError.style.display = 'block'
    else
       mobileError.style.display = 'none'

    if(mail.value.includes("@gmail.com") != true)
       mailError.style.display = 'block'
    else
       mailError.style.display = 'none'


    
}




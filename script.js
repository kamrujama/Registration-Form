
let validFirstName = document.getElementById("validFirstName")
let invalidFirstName = document.getElementById("invalidFirstName")

let validLastName = document.getElementById("validLastName")
let invalidLastName = document.getElementById("invalidLastName")

let validEmail = document.getElementById("validEmail")
let invalidEmail = document.getElementById("invalidEmail")

let validPhone = document.getElementById("validPhone")
let invalidPhone = document.getElementById("invalidPhone")

let validState = document.getElementById("validState")
let invalidState = document.getElementById("invalidState")

let validZip = document.getElementById("validZip")
let invalidZip = document.getElementById("invalidZip")

let invalidFeedback = document.getElementById("invalidFeedback")

const fieldNameTouched = {
    firstName : false,
    lastName : false,
    email : false,
    phone : false,
    state : false,
    zip : false
}


function setTouched(fieldName){
    fieldNameTouched[fieldName] = true
    console.log(fieldNameTouched)
    validate()
}


function validate(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip').value;
    let checkbox = document.getElementById("invalidCheck").checked;

   if(fieldNameTouched['firstName']){ 
        if(firstName == ''){
            invalidFirstName.style.display = "block"
            validFirstName.style.display = "none"
        }
        else{
            validFirstName.style.display = "block"
            invalidFirstName.style.display = "none"        
        }
    }

    if(fieldNameTouched['lastName']){
        if(lastName == ''){
            invalidLastName.style.display = "block"
            validLastName.style.display = "none"
        }
        else{
            validLastName.style.display = "block"
            invalidLastName.style.display = "none"        
        }
    }

    if(fieldNameTouched['email'])
    {
        if(email == '' || !email.includes(".") || !email.includes('@') || email.startsWith('@') || email.slice(email.lastIndexOf('.')).length < 3){
            invalidEmail.style.display = "block"
            validEmail.style.display = "none"
        }
        else{
            validEmail.style.display = "block"
            invalidEmail.style.display = "none"        
        }
    }

    
    if(fieldNameTouched['phone']){
    if(phone === '' || phone.length > 10 || phone.length < 10 || Number(phone[0]) < 6){
        invalidPhone.style.display = "block"
        validPhone.style.display = "none"
    }
    else{
        validPhone.style.display = "block"
        invalidPhone.style.display = "none"        
    }
}

if(fieldNameTouched['state']){
    if(state === ''){
        invalidState.style.display = "block"
        validState.style.display = "none"
    }
    else{
        validState.style.display = "block"
        invalidState.style.display = "none"
    }
}


if(fieldNameTouched['zip']){
    if(zip === '' || zip.length != 6 ){
        invalidZip.style.display = "block"
        validZip.style.display = "none"
    }
    else{
        validZip.style.display = "block"
        invalidZip.style.display = "none"        
    }
}


    if(!checkbox){
        invalidFeedback.style.display = "block"   
    }
    else{
        invalidFeedback.style.display = "none"
    }


}
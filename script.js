const form = document.querySelector('#validationForm')
const errorMessage = document.querySelector('#errorMessage')
class User{
    constructor(firstName, lastName, email, password){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
    }
}
const validateFirstName = (input) => {
    const regEx = /[^0-9]{2,}$/
    if(!regEx.test(input.value)){     
        return '!'
    }
    return input.value
    
}
const validateLastName = (input) => {
    const regEx = /[^0-9]{2,}$/
    if(!regEx.test(input.value)){
        return '!'
    }
    return input.value
    
}
const validateEmail = (input) => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(!regEx.test(input.value)){       
        return '!'
    }
    return input.value
}
const validatePassword = (input) => {
    //const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

    if(input.value.length < 6){  
        return '!'
    }
    return input.value
}
const validateRepeatPassword = (input) => {
    
    if(!(input.value == document.querySelector('#password').value)){
    
    return '!'
    }
    return input.value
} 
const validateCheckbox = (input) => {
    if(!(input.checked)){
        return '!'
    }
    return input.value
}

const validateAll = function(e) {
    e.preventDefault()
    const inputs = []
    let i=0
    for(input of this){
        switch(input.id){
            case 'firstName': 
                inputs [i] = validateFirstName(input)
                break;
            case 'lastName': 
                inputs [i] = validateLastName(input)
                break;
            case 'email': 
                inputs [i] = validateEmail(input)
                break;
            case 'password': 
                inputs [i] = validatePassword(input)
                break;
            case 'repeatPassword':
                inputs [i] = validateRepeatPassword(input)
                break;
            case 'terms': 
                inputs [i] = validateCheckbox(input)
                break;
            default: break;
        }
        i++
    }
    if(inputs.includes('!')){
        console.log('Oops!')
        if(inputs[0] == '!')
                console.log('You need to enter a valid name!')
        if(inputs[1] == '!')
                console.log('You need to enter a valid last name!')
        if(inputs[2] == '!')
                console.log('You need to enter a valid email!')
        if(inputs[3] == '!')
                console.log('Your password must be at least 6 characters!')
        if(inputs[4] == '!')
                console.log('Your passwords must match!')
        if(inputs[5] == '!')
                console.log('You need to accept the terms and conditions!') 
        errorMessage.setAttribute('class', '')
    }
    else{
        console.log('Form filled successfully')
        const user = new User(inputs[0], inputs[1], inputs[2], inputs[3])
        console.log(user)
        errorMessage.setAttribute('class', 'd-none')
    }
} 
form.addEventListener('submit', validateAll)

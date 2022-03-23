const notify = document.querySelector('.notify-me'); 
const email = document.querySelector('.email'); 
const notifyBtn = document.querySelector('.notify'); 
const error = document.querySelector('.error-msg'); 

const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 

console.log(screen.width); 

email.addEventListener('click', () => notify.classList.remove('error')) 

if(screen.width <= 600){
    console.log('small')
    notifyBtn.addEventListener('click', validateEmail) 
} else{
    console.log('big') 
    notifyBtn.addEventListener('mouseover', validateEmail) 
}

function validateEmail(){
    const userEmail = email.value; 

    if(!userEmail.match(validEmail) || userEmail === ''){
        notify.classList.add('error')
        if(userEmail === ''){
            error.innerText = 'Whoops! It looks like you forgot to add your email'
        }
        ; 
    } else if(userEmail.match(validEmail)){
        location.reload(); 
    }
}
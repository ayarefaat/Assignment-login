//^ Html elements

//sign up
var nameInput=document.querySelector('form input[type="text"]');
var emailInput=document.querySelector('form input[type="email"]');
var passInput=document.querySelector('form input[type="password"]');
var signupBtn=document.querySelector('form button');
var error=document.querySelector('div.signup span');
var popup=document.querySelector('.box');

var usersList= JSON.parse(localStorage.getItem("users"))||[];

var nameRegex=/^[A-Z|| a-z]{3,}$/;
var mailRegex=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

// /^[A-Z|| a-z]{3,}@(yahoo|gmail|hotmail)\.(com)$/;

var passRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
console.log(usersList);

function signup(){
    var user={
            name:nameInput.value,
            email:emailInput.value,
            password:passInput.value   
        };
    if(user.name==="" || user.email==="" || user.password=== ""){
        console.log(user , nameInput.value,'errror');
        error.innerHTML=`All inputs are required`;
        error.classList.replace('display-none','display');
        error.classList.replace('green','red');
        popup.classList.add('display-visible')

    }else{
        if(validate(nameRegex,user.name)&&validate(mailRegex,user.email)&&validate(passRegex,user.password)){

            if(uniqueEmail(user.email)){
                console.log('both emails are equal');
                error.innerHTML=`Email already exists`;
                error.classList.replace('display-none','display');
                error.classList.replace('green','red');
            }else{
                console.log('new mail')
                error.innerHTML=`success`;
                error.classList.replace('display-none','display');
                error.classList.replace('red','green')
                usersList.push(user)
                localStorage.setItem('users',JSON.stringify(usersList));
                clear();
                window.location.href="../login.html"
            }
        }else{
            error.classList.replace('display-none','display');
            console.log('invalid input');
            if(!validate(nameRegex,user.name)&&!validate(mailRegex,user.email)&&!validate(passRegex,user.password)){
                error.classList.replace('display','display-none');
                popup.classList.add('display-visible')
            }
            else if(!validate(nameRegex,user.name)){
                error.innerHTML=`name should be at least 3 characters`
            }else if(!validate(mailRegex,user.email)){
                error.innerHTML=`mail {test@yahoo/gmail/hotmail.com}`
            }else if(!validate(passRegex,user.password)){
                error.innerHTML=`Password: Minimum eight characters, at least one upper case English letter,<br> one lower  case English letter, one number and one special character`
            }else{
                error.innerHTML=`invalid input`
            }
        }
    }
}
signupBtn.addEventListener('click',signup);

function uniqueEmail(email){
    console.log(email)
    for(var i=0 ; i<usersList.length; i++){
        console.log(i,usersList[i])
        if(usersList[i].email===email){
            console.log(usersList[i].email,email)
            return true;
        }
    }
    return false;
}
function clear(){
    emailInput.value="";
    nameInput.value="";
    passInput.value="";
}

function validate(regex,element){
    if(regex.test(element)){
        return true;
    }else{
        console.log("error element")
        return false;
    }
}
function dismiss(ev){
    popup.classList.remove('display-visible');
}

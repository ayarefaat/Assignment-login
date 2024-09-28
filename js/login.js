//^ Html elements


var emailInput=document.querySelector('form input[type="email"]');
var passInput=document.querySelector('form input[type="password"]');
var loginBtn=document.querySelector('div.login form button');
var error=document.querySelector('div.login span');
console.log(error)

var userLoginName=""

var usersList= JSON.parse(localStorage.getItem("users"))||[];

console.log(usersList);

function clear(){
    emailInput.value="";
    nameInput.value="";
    passInput.value="";
}

function login(){
    console.log(usersList)
    for(var i=0;i<usersList.length;i++){
        if(usersList[i].email===emailInput.value && usersList[i].password===passInput.value){
            console.log('login success');
            console.log(usersList[i].name);
            userLoginName=usersList[i].name;
            sessionStorage.setItem('loginName',userLoginName);
            error.innerHTML=``;
            window.location.href="../welcome.html";
        }else{
            console.log('err')
            error.innerHTML=`Invalid email or Password`;
            error.classList.replace('display-none' ,'display');
            error.classList.add('red')
        }
    }
}
loginBtn.addEventListener('click',login)

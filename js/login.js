//^ Html elements


var emailInput=document.querySelector('form input[type="email"]');
var passInput=document.querySelector('form input[type="password"]');
var loginBtn=document.querySelector('div.login form button');
var error=document.querySelector('div.login span');
console.log(error)

var userLoginName=""
var check;

var usersList= JSON.parse(localStorage.getItem("users"))||[];

console.log(usersList);

function login(){
    console.log(usersList.length)
    if(usersList.length===0){
        error.classList.replace('display-none',"display")
        error.classList.add('red')
        error.innerHTML="Please Signup first";
        console.log('no user')
    }else{
        for(var i=0;i<usersList.length;i++){
            if(usersList[i].email===emailInput.value && usersList[i].password===passInput.value){
                console.log('login success');
                console.log(usersList[i].name);
                userLoginName=usersList[i].name;
                sessionStorage.setItem('loginName',userLoginName);
                check=true;
                window.location.href="pages/welcome.html";
            }else{
                if(!check){
                    console.log('err')
                    error.innerHTML=`Invalid email or Password`;
                    error.classList.replace('display-none' ,'display');
                    error.classList.add('red')
                }
            }
        }

    }
}
loginBtn.addEventListener('click',login)

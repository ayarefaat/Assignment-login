var welcomeBox=document.querySelector('div.welcome');
var welcomeUser=document.querySelector('div.welcome h1 span.user-name');
var logoutBtn=document.querySelector('nav button.logout');
console.log(logoutBtn)

welcomeUser.innerHTML=sessionStorage.getItem('loginName');

function logout(){
    window.location.href='../index.html'
}
logoutBtn.addEventListener('click',logout)

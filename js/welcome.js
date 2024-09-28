var welcomeBox=document.querySelector('div.welcome');
var welcomeUser=document.querySelector('div.welcome h1 span.user-name');
var logoutBtn=document.querySelector('nav button.logout');
console.log(logoutBtn)

welcomeUser.innerHTML=sessionStorage.getItem('loginName');

function logout(){
    console.log('ss')
    window.location.href='../login.html'
}
logoutBtn.addEventListener('click',logout)

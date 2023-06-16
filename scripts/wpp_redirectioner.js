function redirect (){
  
  let link = localStorage.getItem('wppPhone')

    window.open('https://api.whatsapp.com/send?phone='+link);
}

function redirect2(event){
    if(event.keyCode==13) redirect();
    else return;
}

//const button=document.querySelector('button');
//button.addEventListener('click', redirect);
const input = document.querySelector('input');
input.addEventListener('keydown', redirect2);
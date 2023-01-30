function redirect (){
    let link = Array.from(document.querySelector('input').value);

    let i=0;

    for(let k=0; k<link.length; k++){
        if(k==0 && link[k]=='+'){
            link.splice(k, 1);
            k--;
          } else if(isNaN(link[k])){ 
            alert('only numbers in phone number');
            return;
          }

    }
    link=link.join('');
    window.open('https://api.whatsapp.com/send?phone='+link);
}

function redirect2(event){
    if(event.keyCode==13) redirect();
    else return;
}

const button=document.querySelector('button');
button.addEventListener('click', redirect);
const input = document.querySelector('input');
input.addEventListener('keydown', redirect2);
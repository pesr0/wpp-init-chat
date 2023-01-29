function redirect (){
    let link = document.querySelector('input').value;

    let i=0;
    let j=0;
    Array.from(link).forEach(element => {
        if(element=='+') i++;
        else if(isNaN(element)) j++;
    });

    if(j>0){
        alert('only numbers on the phone number');
        return;
    }
    
    if(i>1){
        alert('insert the number only with one or none plus(+) sign');
        return;
    }

    else{
        if(i==1){
            link = link.substring(1);
            window.open('https://api.whatsapp.com/send?phone='+link);
            return;
        }

        
            window.open('https://api.whatsapp.com/send?phone='+link);
            return;
        
    }

}

function redirect2(event){
    if(event.keyCode==13) redirect();
    else return;
}

const button=document.querySelector('button');
button.addEventListener('click', redirect);
const input = document.querySelector('input');
input.addEventListener('keydown', redirect2);
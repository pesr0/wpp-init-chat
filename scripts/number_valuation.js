//Function which will recieve the text digited in the phone number field and valuate it
function valuation(){
    let link = Array.from(document.querySelector('.phone_number').value);
    let ddi = Array.from(document.querySelector('.dropdown_input').value);

    let i=0;

    for(let k=0; k<link.length; k++){
        if(k==0 && link[k]=='+'){
            link.splice(k, 1);
            k--;
          } else if(link[k]=='-' || link[k]=='(' || link[k]==')'){
            link.splice(k, 1);
            k--;
          } else if(isNaN(link[k])){ 
            alert('only numbers in phone number');
            return;
          }
    }
    link=link.join('');

    localStorage.setItem('wppPhone', link);
    
    console.log(link);

    redirect();
}

const button=document.querySelector('button');
button.addEventListener('click', valuation);
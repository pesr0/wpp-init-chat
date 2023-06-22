//Function which will recieve the text digited in the phone number field and valuate it
function validation(){
  let link = Array.from(document.querySelector('.phone_number').value);
  let ddi = Array.from(document.querySelector('.dropdown_input').value);

  if(link.length==0){
    alert('the phone number field must not be empty');
    return;
  }

  //unite ddi and phone number
  link = ddi.concat(link);

  //clear phone number
  let i=0;
  for(let k=0; k<link.length; k++){
    if(k==0 && link[k]=='+'){
      link.splice(k, 1);
      k--;
    } else if(link[k]=='-' || link[k]=='(' || link[k]==')' || link[k]==' ' || link[k] == '.' || link[k] == ','){
      link.splice(k, 1);
      k--;
    } else if(isNaN(link[k])){ 
      alert('only numbers in phone number');
      return;
    }
  }
    
  //transforme array into string
  link=link.join('');

  localStorage.setItem('wppPhone', link);
  
  //calls redirect function
  redirect();
}

function enterClick(event){
  if(event.keyCode==13) validation();
  else return;
}

button_validation.addEventListener('click', validation);

input_phone.addEventListener('keydown', enterClick);
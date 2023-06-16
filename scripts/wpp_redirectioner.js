function redirect (){
  
  //recover wpp phone number storaged
  let link = localStorage.getItem('wppPhone');
  
  //clear space used to storage
  localStorage.removeItem('wppPhone');

  //redirect to wpp page
  window.open('https://api.whatsapp.com/send?phone='+link);
}
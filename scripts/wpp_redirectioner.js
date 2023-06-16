function redirect (){
  
  let link = localStorage.getItem('wppPhone');
  localStorage.removeItem('wppPhone');

    window.open('https://api.whatsapp.com/send?phone='+link);
}
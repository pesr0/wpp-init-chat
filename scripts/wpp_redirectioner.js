function redirect (){
  
  let link = localStorage.getItem('wppPhone')

    window.open('https://api.whatsapp.com/send?phone='+link);
}
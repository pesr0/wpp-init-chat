function ip_detection(){
    let ctCode;
    fetch('http://ip-api.com/json/?fields=countryCode').
    then((resp)=> resp.json()).
    then(function(data){
        ctCode = data.countryCode;
        localStorage.setItem('ctCode', ctCode);
    }).
    catch(function(error){
        console.log(error);
    })
    
}
ip_detection();
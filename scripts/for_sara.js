//function mdae to my gf where ddi is inserted automatically, since github doesnt accept ip identification
function for_sara_switch(){
    sara_id = localStorage.getItem('sara');

    if(sara_id == 'true'){
        localStorage.setItem('sara', 'false');
        drop_input.style.display='';
    }
    else
    {
        localStorage.setItem('sara', 'true');
        drop_input.style.display='none';
    }


}

function for_sara_display(){
    sara_id = localStorage.getItem('sara');
    if(sara_id == 'true'){
        drop_input.style.display='';
        drop_input.value='';
    }
    else
    {
        drop_input.style.display='none';
        drop_input.value='+55';
    }
}

for_sara_display();
sara_btn.addEventListener('click', for_sara_switch);
sara_btn.addEventListener('click', for_sara_display);
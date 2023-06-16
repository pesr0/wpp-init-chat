const items = document.querySelectorAll('li');
const drop_input = document.querySelector('.dropdown_input');

function icc_select(event){
    let drop_text = event.target.textContent.split('');

    let k;
    for(let i = 0; i<drop_text.length;  i++){
        if (drop_text[i] == ' '){
            k = i;
            drop_text.splice(k);
            break;
        }
    }

    drop_text = drop_text.join('');

    if(drop_text=='+XX'){
        drop_input.value = '';
        return;
    }

    drop_input.value = drop_text;
    console.log(drop_text);

}

items.forEach(function(item){
    item.addEventListener('click', icc_select);
})
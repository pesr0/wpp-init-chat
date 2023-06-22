//edits HTML text and insert it in drop_input when clicked
function icc_select(event){

    let drop_text = event.target.textContent.split('');

    //recognize space location, where the text will be separeted
    let k;
    for(let i = 0; i<drop_text.length;  i++){
        if (drop_text[i] == ' '){
            k = i;
            drop_text.splice(k);
            break;
        }
    }

    //reunite array to string
    drop_text = drop_text.join('');    

    //if +XX selected, drop_input value gets null
    if(drop_text=='+XX'){
        drop_input.value = '';
        return;
    }
    
    drop_input.value = drop_text;
    localStorage.setItem('drop_text', drop_text);
}

items.forEach(function(item){
    item.addEventListener('click', icc_select);
})
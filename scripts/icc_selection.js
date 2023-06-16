const items = document.querySelectorAll('li');

function icc_select(event){
    console.log(event.target.textContent);
}

items.forEach(function(item){
    item.addEventListener('click', icc_select);
})
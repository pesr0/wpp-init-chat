console.log(drop_items);

drop_items.forEach(item =>{
    console.log(item.children[0].textContent);
    if(item.children[0].textContent.includes(ctCode)){
        let icc = item.children[0].textContent;
        icc = icc.split('');
        icc.splice(3);
        icc = icc.join('');
        drop_input.value=icc;
    }
    
})
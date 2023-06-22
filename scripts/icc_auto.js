drop_items.forEach(item =>{
    if(item.children[0].textContent.includes(ctCode)){
        let icc = item.children[0].textContent;
        icc = icc.split('');
        icc.splice(3);
        icc = icc.join('');
        drop_input.value=icc;
    }
    
})
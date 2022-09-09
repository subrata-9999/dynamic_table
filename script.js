

let items=[]
function create_tr(table_id) {

    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);

    table_body.append(tr_clone);

    clean_first_tr(table_body.firstElementChild);

}

function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}



function remove_tr(This) {
    if(This.closest('tbody').childElementCount == 1)
    {
        alert("You cannot delete this?");
    }else{
        This.closest('tr').remove();
        This.closest('.hey').remove();
        
    }
}






function add_tr(This) {
    const a=document.querySelector('.idc').value;
    const b=document.querySelector('.namec').value;
    const c=document.querySelector('.numberc').value;
    const d=document.querySelector('.mailc').value;


        if(!(!a || !b || !c || !d)){
            
            let item={
                id: a,
                name: b,
                number: c,
                email: d
            }
            items.push(item);
            console.log(item);
            console.warn('added', {items});
            let pre=document.querySelector('#print pre');
            pre.textContent='\n'+JSON.stringify(items, '\t',2);
            
            

        }
        else{
            alert("first fill all the options of your selected row");
        }

}




// function add_tr(This) {
//     const myid=document.querySelector('#dc');
//     const myname=document.querySelector('#namec');
//     const mynum=document.querySelector('#numberc');
//     const mymail=document.querySelector('#mailc');

//     let item={
//                 id: idc.closest('tr').value,
//                 name: namec.closest('tr').value,
//                 number: numberfc.closest('tr').value,
//                 email: MediaElementAudioSourceNode.closest('tr').value
//             }
//             items.push(item);
//     console.log(item);
//     console.warn('added', {items});
//     let pre=document.querySelector('#print pre');
//     pre.textContent='\n'+JSON.stringify(items, '\t',2);

// }







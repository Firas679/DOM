     let btnplus = document.getElementsByClassName('btnplus'); 

    for(let i=0; i< btnplus.length;i++){
        btnplus[i].addEventListener('click', function(event){

           let qte = event.target.nextElementSibling
           qte.innerHTML = Number(qte.innerHTML) +1
    
           let Prix = event.target.nextElementSibling.nextElementSibling.nextElementSibling;
           let Price = event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
           
           Price.innerHTML = Number(Prix.innerHTML) * Number(qte.innerHTML)
        })
    }
    let btnminus = document.getElementsByClassName('btnminus')
    for (let i=0; i < btnminus.length; i++){
        btnminus[i].addEventListener('click', function(e){
            let qte = e.target.previousElementSibling
            if (Number(qte.innerHTML>0)){
                qte.innerHTML = Number(qte.innerHTML) -1
            }
            let Prix = e.target.nextElementSibling
            let Price = e.target.nextElementSibling.nextElementSibling.nextElementSibling
            Price.innerHTML = Number(Prix.innerHTML) * (qte.innerHTML)
            
        })
    }
    let deletebtn = document.getElementsByClassName('deletebtn')
    for ( let i=0; i<deletebtn.length; i++) {
         deletebtn[i].addEventListener('click', function(e){
         e.target.parentElement.remove()
        })
    }

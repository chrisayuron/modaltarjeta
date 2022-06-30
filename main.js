let main = document.querySelector('.main-container')
let send = document.querySelector('.send-container')
let sended = document.querySelector('.sended-container')
let enviar = document.querySelector('#btn__enviar')
let cancelar = document.querySelector('#btn__cancelar')
let continuar = document.querySelector('#btn__continuar')
let nombre=document.querySelector('.nombre')
let card1 = document.querySelector('.card1')
let card2 = document.querySelector('.card2')
let card3 = document.querySelector('.card3')
let card =document.querySelector('.card')

enviar.addEventListener('click',()=>{
    document.getElementById("error").textContent =""
    send.style.display='block'
    card2.classList.add('cambio')
    card1.classList.remove('cambio')
})

cancelar.addEventListener('click',()=>{
    card1.classList.add('cambio')
    card2.classList.remove('cambio')
    send.style.display='none'
    sended.style.display='none' 
    document.getElementById("error").textContent =""   
})

continuar.addEventListener('click',()=>{ 
    let dato =document.getElementById('nombre').value
    if(dato!=""){      
        
        send.style.display='none'
        sended.style.display='block'
        nombre.textContent=dato+'!'
        document.getElementById('nombre').value=""
        document.getElementById("error").textContent =""
        setTimeout(cambiar,5000)
    } else
        document.getElementById("error").textContent = "El campo esta vacio, escribe un nombre para poder enviar la tarjeta";
        setTimeout(quitar,2000)
    document
})

function cambiar(){
    sended.style.display='none'
    card1.classList.add('cambio')
    document.getElementById('nombre').value=""
        document.getElementById("error").textContent =""
}

function quitar(){
    document.getElementById("error").textContent =""
}
    
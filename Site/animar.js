
// Animação botão abri e fecha menu mobile
const menuDiv = document.getElementById('menu-mobile')
const btnanimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animar)
function animar(){
    menuDiv.classList.toggle('abrir')
    btnanimar.classList.toggle('ativo')
}

// navegação manual do site
var radio = document.querySelector('manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 4000)

function proximaImg(){
    cont++ 

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

const btn = document.getElementById('btn')
btn.disabled = true         // Para desabilitar usar o btn.disabled = false

const btn2 = document.getElementById('btn2')
const habilitarEdesabilitarBtn = document.getElementById('habilitarEdesabilitarBtn')


habilitarEdesabilitarBtn.addEventListener('click',() => {
    btn2.disabled = !btn2.disabled
    habilitarEdesabilitarBtn.innerText = btn.disabled ? 'Habilitar btn' : 'Desabilitar btn'
})
const theme = document.querySelector('.theme')
const contact = document.querySelector('#contact')
const logo = document.querySelector('.logo')
const homepage = document.querySelector('main')
const form = document.querySelector('form')
const body = document.querySelector('body')
const color = document.querySelector('#mode')
const text = document.querySelector('p')
const submit = document.querySelector('#submit')
const info = document.getElementById('info')

function TextSendMessage() {
   let accessKey = document.getElementById('accessKey').value

   if(accessKey !== '' && accessKey !== "CHAVE DE ACESSO STATIC FORMS") 
      info.innerHTML = 'Mensagem enviada!'
}

function toChangeTheme(current, _new) {
   text.innerHTML = `${_new}`.toUpperCase()
   color.innerHTML = `${_new}_mode` 
   body.classList.replace(`${current}-theme`, `${_new}-theme`)
}

function toPressButton(hiddenPage, showPage) {
   
   if(hiddenPage.style.display != 'none') {
      hiddenPage.style.display = 'none'
      showPage.style.display = 'block'
   }
}

contact.addEventListener('click', () => {toPressButton(homepage, form)})
logo.addEventListener('click', () => {toPressButton(form, homepage)})
submit.addEventListener('click', () => {TextSendMessage()})
theme.addEventListener('click', function() { 
   body.classList == 'light-theme' ? toChangeTheme('light', 'dark') : toChangeTheme('dark', 'light')
})
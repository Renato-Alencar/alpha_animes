const THEME = document.querySelector('.theme')
const CONTACT = document.querySelector('#contact')
const LOGO = document.querySelector('.logo')
const HOMEPAGE = document.querySelector('main')
const FORM = document.querySelector('form')
const BODY = document.querySelector('body')
const COLOR = document.querySelector('#mode')
const TEXT = document.querySelector('p')
const SUBMIT = document.querySelector('#submit')
const INFO = document.querySelector('#info')
const POPUP = document.querySelector('#modal-container')
const ACESSKEY = document.querySelector('#accessKey')
const REGISTERBUTTON = document.querySelector('.modal-register')
const CLOSE = document.querySelector('.modal-close')

function closePopup() {
   return POPUP.style.display = 'none'
}

function loadPopup() {
   return POPUP.style.display = 'block'
}

function registerAcessKey() {
   let modalInput = document.querySelector('.modal-input')

   closePopup()

   return ACESSKEY.value = modalInput.value
}

function textSendMessage() {
   let message = document.querySelector('#message').value.trim()
   let email = document.querySelector('#email').value.trim()
   let verifyEmail = /\S+@\S+\.\S+/

   if(email === verifyEmail && message !== '' && ACESSKEY.value.trim() !== '') {
      INFO.innerHTML = 'Mensagem enviada!' 
   }
      
   else if(ACESSKEY.value.trim() === '') loadPopup()
}

function toChangeTheme(current, _new) {
   TEXT.innerHTML = `${_new}`.toUpperCase()
   COLOR.innerHTML = `${_new}_mode`

   return BODY.classList.replace(`${current}-theme`, `${_new}-theme`)
}

function toPressButton(hiddenPage, showPage) {
   
   if(hiddenPage.style.display != 'none') {
      hiddenPage.style.display = 'none'
      showPage.style.display = 'block'
   }
}

CONTACT.addEventListener('click', () => toPressButton(HOMEPAGE, FORM))
CONTACT.addEventListener('click', loadPopup) 
LOGO.addEventListener('click', () => toPressButton(FORM, HOMEPAGE))
CLOSE.addEventListener('click', closePopup)
REGISTERBUTTON.addEventListener('click', registerAcessKey)
SUBMIT.addEventListener('click', textSendMessage)
THEME.addEventListener('click', function() { 
   BODY.classList == 'light-theme' ? toChangeTheme('light', 'dark') : toChangeTheme('dark', 'light')
})
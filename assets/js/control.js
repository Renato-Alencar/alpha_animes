const theme = document.querySelector('.theme')
const contact = document.querySelector('#contact')
const logo = document.querySelector('.logo')
const homepage = document.querySelector('main')
const form = document.querySelector('form')
const body = document.querySelector('body')
const color = document.querySelector('#mode')
const text = document.querySelector('p')
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => alert('Mensagem enviada com sucesso!'))

theme.addEventListener('click', () => {

   if(body.classList == 'light-theme') {
      text.innerHTML = 'DARK'
      color.innerHTML = 'dark_mode' 
      body.classList.add('dark-theme')
   }
   else {
      text.innerHTML = 'LIGHT'
      color.innerHTML = 'light_mode'
      body.classList.remove('dark-theme') 
   }  
})

function toPressButton(hiddenPage, showPage) {
   
   if(hiddenPage.style.display != 'none') {
      hiddenPage.style.display = 'none'
      showPage.style.display = 'block'
   }
}

contact.addEventListener('click', () => {toPressButton(homepage, form)})
logo.addEventListener('click', () => {toPressButton(form, homepage)})
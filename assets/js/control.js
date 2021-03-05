const theme = document.querySelector('.theme')

theme.addEventListener('click', () => {
   let body = document.querySelector('body').classList
   let color = document.querySelector('#mode')
   let text = document.querySelector('p')
   
   if(body == 'light-theme') {
      text.innerHTML = 'DARK' 
      color.innerHTML = 'dark_mode' 
      body.add('dark-theme')
   }
   else {
      text.innerHTML = 'LIGHT' 
      color.innerHTML = 'light_mode'
      body.remove('dark-theme') 
   }  
})
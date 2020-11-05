function showMenu() {
    var box = document.getElementsByClassName('hidden-box');

    for(var index = 0; index < box.length; index++) box[index].classList.toggle('show-box');
}

let bool = false;
let selector = document.getElementById('body-color');

function changeTheme() {
    bool = !bool;
    
    if(bool) {
        selector.classList.replace('light-theme','dark-theme');
    } else {
        selector.classList.replace('dark-theme','light-theme');
    }
}
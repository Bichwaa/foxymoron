const body = document.getElementsByTagName('body')[0];
const adminLink = document.getElementById('admin-link');
const mode = document.getElementById('mode-switch');

function important(){
    if (body.classList[0] == 'dark-mode'){
        adminLink.style.color ='black';
        mode.innerHTML = 'Light mode';
    }
    else{
        adminLink.style.color ='white';
        mode.innerHTML = 'Dark mode';
    }
    
}

mode.addEventListener('click', switchMode);

function switchMode(){
    if (body.classList[0] == 'dark-mode'){
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        mode.classList.add('mode-switch-dark');
        mode.classList.remove('mode-switch-light');
        mode.innerHTML = 'dark mode';
        important();
    }
    else{
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        mode.classList.add('mode-switch-light');
        mode.classList.remove('mode-switch-dark');
        mode.innerHTML = 'light mode';
        important();
    }
}

important();



// Array.prototype.slice.call(collection/nodeList)
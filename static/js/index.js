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
// const brand = document.getElementById('brand');
// const headline = document.getElementById('headline');


// if(true){
//     const item = JSON.parse(localStorage.getItem('stu'));
//     const student = item.posts[0];
//     setTimeout(function(){
//         const card = (
//             `
//             <div class="main-post">
//                         <h2>1: ${student.title} </h2>
//                         <p>
//                             ${student.body}
//                         </p>
//                         <span>
//                            ${student.author}
//                         </span>
//                     </div>
//             `
//         );
//     headline.innerHTML = card
//     },800)
    
// }
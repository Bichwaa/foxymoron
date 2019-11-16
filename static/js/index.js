const body = document.getElementsByTagName('body')[0];
const adminLink = document.getElementById('admin-link');
const mode = document.getElementById('mode-switch');
const posts = Array.from(document.getElementsByClassName('box'));

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

posts.forEach((post)=>{
    post.addEventListener('click',()=>{
        // console.log(Array.from(mains[0].children))
        let main = post.children[0] //main-post div
        let main_children= Array.from(main.children) //elemrnts in main-post div
        if(post.classList.contains('box-stub') && post.classList.contains("box-full")){
            post.classList.remove('box-full')
            let paras = main_children.map((child)=>{
                if(main_children.indexOf(child)>=3){
                    child.style="display:none;"
                }
            })
        }else{
            post.classList.add('box-full');
            main_children.forEach((child)=>{
                child.style="display:inline-block;"
            })
        }
    })
})

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
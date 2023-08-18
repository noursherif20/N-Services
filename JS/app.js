// catching Elements
let navBar = document.querySelector(".nav-bar");
let goUp = document.querySelector('.go-up');
let barIcon = document.querySelector('.bars') 
let link = document.querySelector(".links")
let menuItem = document.querySelectorAll('.links li');


// to make sticky bar
window.onscroll = ()=> (window.scrollY > 0)? 
navBar.classList.add('sticky')
:navBar.classList.remove('sticky');


// to scroll to the header
goUp.onclick = ()=> window.scrollTo(0,0);


// side menu bar
barIcon.onclick = sideMenu;

function sideMenu() {

    if(barIcon.innerHTML == '<i class="fa-solid fa-bars"></i>'){
        link.classList.add('side')
        barIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }else{
       
        barIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
        link.classList.remove('side')
    }

}

menuItem.forEach((elem)=>{

    elem.addEventListener('click',(e)=>{

        for(i=0;i<menuItem.length;i++){
            menuItem[i].classList.remove('active')
        }

        e.currentTarget.classList.add('active')
    
})
});

// the end of side bar


// the images gallery

let close = document.querySelector(".fa-xmark");
let fScreen = document.querySelector(".full-screen");
let fScreenImage = document.querySelector('.full-screen img')
let gImage = document.querySelectorAll('.g-img img')
let plusMark = document.querySelectorAll('.g-img > span')


gImage.forEach(ele=>{
    ele.addEventListener('click', appearGallery)
});

plusMark.forEach(ele=>{

    ele.addEventListener('click',(e)=>{
        fScreen.style.cssText='opacity:1; z-index:5;';
        fScreenImage.src = e.currentTarget.previousElementSibling.src;
    })

})

function appearGallery(e){
    
        fScreen.style.cssText='opacity:1; z-index:5;';
        fScreenImage.src = e.currentTarget.src;
        
}

close.onclick = ()=> fScreen.style.cssText = 'opacity:0;';

// the end of images gallery
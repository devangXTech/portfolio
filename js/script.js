const filterNavItem = document.querySelectorAll('.filter-nav-item');
const filterItem = document.querySelectorAll('.filter-item-parent');
const eyeBtn = document.querySelectorAll('.filter-item .fa-eye');
const imgContainer = document.querySelector('.img-container');
const img = document.querySelector('.img-container img');
const closeBtn = document.querySelector('#close-btn');
const countNum = document.querySelectorAll('.number-counter');
const typingText = document.querySelector('.typing-effect');
const home = document.querySelector('#home');

filterNavItem.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const active = document.querySelector('.filter-nav-item.active');
        active.classList.remove('active');
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');
        filterItem.forEach(img =>{
            if(img.classList.contains(target) || target == "all"){
                img.style.display = "inline-block";
                img.style.animation = ".5s imgPopUp linear";
            }else{
                img.style.display = "none";
            };  
        });
      
    });
});

eyeBtn.forEach(eye =>{
    eye.addEventListener('click',()=>{
        const imgSrc = eye.parentElement.parentElement.children[0].src;   
        imgContainer.classList.toggle('active');
        img.src = imgSrc;
    });
});

closeBtn.addEventListener('click',()=>{
    imgContainer.classList.remove('active');
});
window.addEventListener('scroll',()=>{
    imgContainer.classList.remove('active');
});

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 1600){
        countNum.forEach(num =>{
            function counter() {
                const target = +num.getAttribute('data-count');
                let numText = +num.innerHTML;
                let divide = target / 50;
                divide = Math.floor(divide);
                if(numText < target){
                    numText = numText + divide;  
                    num.innerHTML = numText;
                    setTimeout(counter,80);
                    console.log("scroll event is trigerred");
                }else{
                    num.innerHTML = target + " +";
                    console.log("no-scroll event is trigerred");
                };
            };
            counter();
        });   
    }else{
        countNum.forEach(num =>{
            num.innerHTML = "0";
        });
    };
});


let count = 0;
let text = "I am a web developer";

const typing = ()=>{
    if(count < text.length){
        count++;
        let newText = text.slice(0,count);
        typingText.innerHTML = newText + "<span class='text-border'>|</span>";
    }else{
        setTimeout(()=>{
            count = 0;
        },1000);
    };
};
typing();
setInterval(typing,100);

const createParticles = () =>{
    for(i = 0;i < 20;i++){
    const particles = document.createElement('div');
    particles.classList.add('particles-item');
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
    particles.style.left = x + "px";
    particles.style.top = y + "px";
    home.appendChild(particles);
    };
    
    for(i = 0;i < 20;i++){
    const particles = document.createElement('div');
    particles.classList.add('particles-item');
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
    particles.style.right = x + "px";
    particles.style.top = y + "px";
    home.appendChild(particles);
    };
};
createParticles();
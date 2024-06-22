let words = document.querySelectorAll(".word")
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span")
        span.textContent=letter;
        span.className="letter"
        word.appendChild(span)
    })
})

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1"


let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0]:words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out"
        },i*80)
    })
    nextWord.style.opacity="1"
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind"
        setTimeout(()=>{
            letter.className="letter in"
        },340 + i * 80)
    })
    currentWordIndex =currentWordIndex === maxWordIndex? 0 :currentWordIndex + 1;
}

changeText();
setInterval(changeText,3000);

// circle Skills###################################
let circles = document.querySelectorAll(".circle");
circles.forEach(e=>{
    var dots = e.getAttribute("data-dots");
    var marked = e.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360/dots;

    for(let i =0;i<dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
e.innerHTML = points;

let pointsMarked = e.querySelectorAll(".points");
for(let i=0;i<percent;i++){
    pointsMarked[i].classList.add("marked")
}
})


const buttons = document.querySelectorAll('.filter-buttons .btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Delete Active Class From All
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add Active Class From All
        button.classList.add('active');
    });
});
var mixer = mixitup('.portfolio-gallery');



let menu = document.querySelectorAll(".navlist a")
let sections = document.querySelectorAll("section")

function activeMenu(){
    let len = sections.length;
    while(--len && window.scrollY + 97 < sections[len].offsetTop){}
    menu.forEach(sec => sec.classList.remove("active"))
    menu[len].classList.add("active")
}
activeMenu()
window.addEventListener("scroll",activeMenu)


// Toggle Icon Navbar
let navList = document.querySelector(".navlist")
let iconMenu = document.querySelector("#icon-menu")

iconMenu.onclick = function(){
    navList.classList.toggle("open")
    iconMenu.classList.toggle('bx-x')
}
window.onscroll = function(){
    navList.classList.remove("open")
    iconMenu.classList.remove('bx-x')
}
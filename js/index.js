// Your code goes here

// Making variables
const body = document.querySelector('body');
// const navCont = document.querySelector('.nav-container');
const link1 = document.querySelector(' a:nth-child(1)');
const link2 = document.querySelector(' a:nth-child(2)');
const link3 = document.querySelector(' a:nth-child(3)');
const link4 = document.querySelector(' a:nth-child(4)');
const h2 = document.querySelector('h2');
const h1 = document.querySelector('h1');
const bottomContent = document.querySelectorAll('.destination > p');
const h2All = document.querySelectorAll('h2');
const img = document.querySelectorAll("img");


// navCont.addEventListener('mouseover', event =>{ 
//     event.target.style = "background-color: red";
// })
// navCont.addEventListener('mouseout', event =>{ 
//     event.target.style = "background-color: white";
// })
h1.addEventListener('focus', (event) => {
    event.target.style.backgroun = "pink";
    console.log('this should be focused')
});

h2All.forEach(element => element.addEventListener('mousedown', event => event.target.style = "color: red"));
h2All.forEach(element => 
    element.addEventListener('mouseup', event => event.target.style = "color: pink"));


// KEY UP KEY DOWN

window.addEventListener('keydown', (event)=>{
    event.target.style ="color:red";
});
window.addEventListener('keyup', (event)=>{
    event.target.style ="color: black";
})

// let ticking = false;
// window.addEventListener('scroll', function(e) {
//     last_known_scroll_position = window.scrollY;
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
//     ticking = true;
//   };
// })

// bottomContent.forEach((element) => {
//     element.addEventListener('click', 
//     event => event.target.style = "background-color: lightblue");
//     console.log('blue')
// })

bottomContent.forEach(p => p.addEventListener("mouseover", greyscale));
bottomContent.forEach(p => p.addEventListener("mouseout", resetColor));

function greyscale(event){
    event.target.style.filter = "greyscale(100%)";
}

function resetColor( event){
    event.target.style.filter ="inherit";
}


// NAV
const navBar = document.querySelectorAll('a');
navBar.forEach( (element) => {
    element.addEventListener("mousemove", event => event.target.style = "color: purple");
    ;
})

// EVENT FOR EACH NAV BAR ELEMENT WHEN MOUSE HOVER OVER.

link1.addEventListener('mouseover', (event) =>{
    //event.target.style = 'color: red';
   console.log('MOUSE OVER HOME');
})
link2.addEventListener('mouseover', ()=>{
   
   console.log('MOUSE OVER ABOUT US')
})

link3.addEventListener('mouseover', ()=>{
   console.log('MOUSE OVER BLOG');
})
link4.addEventListener('mouseover', ()=>{
   console.log('MOUSE OVER CONTACT');
})

// EVENT WHEN HOVER OVER -> PRINTS OUT FOR ALL OF THEM

// link1.addEventListener('mouseover', listener)
// link2.addEventListener('mouseover', listener)
// link3.addEventListener('mouseover', listener)
// link4.addEventListener('mouseover', listener)

// function listener (event){
//     console.log('MOUSE OVER HOME');
//     console.log('MOUSE OVER ABOUT US');
//     console.log('MOUSE OVER BLOG');
//     console.log('MOUSE OVER CONTACT');
// }


// Create event listeners
h2.addEventListener('click', (event) => {
    event.target.style = "color: green";
    console.log('H2 CLICKED');
});



// IMAGES

img.forEach(image => image.addEventListener("mouseover", grayscale));
img.forEach(image => image.addEventListener("mouseout", resetColor));

// Callbacks
function grayscale (event) {
    event.target.style.filter = "grayscale(60%)";
}
function resetColor (event) {
    event.target.style.filter = "inherit";
}

 window.addEventListener('resize', () =>{
    console.log('SUPER RESIZE ME');
 })

 window.addEventListener('scroll', () =>{
    console.log('THEY SEE ME SCROLLING, THEY HATING');
 })

window.addEventListener('beforeprint', () => {
     console.log('USER PRESSED PRINT');
})

window.addEventListener('afterprint', () => {
    console.log('USER CLOSED PRINT DIALOG');
})

window.addEventListener('load', () => {
    console.log('ITS LOADING');
})



let heading = document.querySelector(".text-content");
heading.addEventListener('select', (event) => {
    event.target.style = "color: red";
})




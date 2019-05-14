// Your code goes here

// Making variables
const body = document.querySelector('body');

const link1 = document.querySelector(' a:nth-child(1)');
const link2 = document.querySelector(' a:nth-child(2)');
const link3 = document.querySelector(' a:nth-child(3)');
const link4 = document.querySelector(' a:nth-child(4)');
const h2 = document.querySelector('h2');
const h1 = document.querySelector('h1');
const bottomContent = document.querySelectorAll('.destination > p');

window.addEventListener('keydown', (event)=>{
    event.target.style ="color:red";
});
window.addEventListener('keyup', (event)=>{
    event.target.style ="color: black";
})


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

// Create event listeners
h2.addEventListener('click', (event) => {
    event.target.style = "color: green";
    console.log('H2 CLICKED');
});

h1.addEventListener('reset', (event) => {
    event.target.style = "color:  red";
    console.log('RESET');
})


const img = document.querySelectorAll("img");

img.forEach(image => image.addEventListener("mouseover", grayscale));
img.forEach(image => image.addEventListener("mouseout", resetColor));

// Callbacks
function grayscale (event) {
    event.target.style.filter = "grayscale(60%)";
}
function resetColor (event) {
    event.target.style.filter = "inherit";
}


// body.addEventListener('resize', () =>{
//     console.log('DOCUMENT IS RESIZED');
// })

// body.addEventListener('select', () => {
//     console.log('TEXT IS SELECTED');
// })


// function selectText (event) {
//     const logo = document.getElementById('logo-heading')
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     logo.textContent = `You selected ${selection}`;
// }
// const h1 = document.querySelector('h1');
// h1.addEventListener('select',selectText);

let heading = document.querySelector(".text-content");
heading.addEventListener('select', (event) => {
    event.target.style = "color: red";
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


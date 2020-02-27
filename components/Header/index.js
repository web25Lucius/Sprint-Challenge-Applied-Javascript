// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component




function headerConstructor() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    

const header = document.createElement('div'); 
header.classList.add('header'); 

const date = document.createElement('span'); 
date.classList.add('date');
date.textContent=today;  
header.appendChild(date); 

const LT = document.createElement('h1'); 
LT.classList.add('Lambda'); 
LT.textContent = 'Lambda Times';
header.appendChild(LT); 

const temperature = document.createElement('span'); 
temperature.classList.add('temp'); 
header.appendChild(temperature); 
temperature.textContent="40°"; 
return header; 
}

const hc = document.querySelector('.header-container'); 
hc.appendChild(headerConstructor()); 







































 
// function Header() {
//     const board = document.createElement('div'); 
//     const day = document.createElement('span'); 
//     const lambdaTimes = document.createElement('h1'); 
//     const temperature = document.createElement('span'); 

//     board.classList.add('header'); 
//     day.classList.add('date'); 
//     temperature.classList.add('temp'); 
//     day.textContent = 'MARCH 28, 2019'; 
//     lambdaTimes.textContent = 'Lambda Times'; 

//     board.appendChild(day); 
//     board.appendChild(lambdaTimes); 
//     board.appendChild(temperature); 

//     return board; 
// }; 
// console.log(Header()); 
// document.querySelector('.header-container').appendChild(Header());   
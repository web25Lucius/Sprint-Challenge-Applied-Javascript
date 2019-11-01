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

function Header() {
const hContainer = document.querySelector('.header-container'); 
console.log(hContainer); 
const board = document.createElement('div'); 
const day = document.createElement('span'); 
const lambdaTimes = document.createElement('h1'); 
const temperature = document.createElement('span'); 
board.classList.add('.header'); 
day.classList.add('.date'); 
temperature.classList.add('.temp'); 
day.textContent = 'SMARCH 28, 2019'; 
lambdaTimes.textContent = 'Lambda Times'; 
board.appendChild(hContainer); 
day.appendChild(board); 
lambdaTimes.appendChild(day); 
temperature.appendChild(lambdaTimes); 

return hContainer
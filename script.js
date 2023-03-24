// Different colors to choose from
let colorTheme = ['black', 'red', 'blue'];

// Necessary elements 
const grid = document.querySelector('.grid');
let tag = document.createElement('div');

// creating grids
let gridSize = 256;

for (let i = 0; i < gridSize; i++) {
    let tag = document.createElement('div');
    tag.id = i;
    tag.className = 'gridbox';
    grid.appendChild(tag);

    tag.addEventListener('mouseover', function(){
        tag.classList.add('hover');
    });
}

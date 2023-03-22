// Necessary elements 
const grid = document.querySelector('.grid');

// creating grids
let gridSize = 256;

for (let i = 0; i < gridSize; i++) {
    let tag = document.createElement('div');
    tag.id = i;
    tag.className = 'gridbox';
    tag.style.backgroundColor = 'black';
    grid.append(tag);
}

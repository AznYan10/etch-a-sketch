// Necessary elements 
const grid = document.querySelector('.grid');

// creating grids
let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    let tag = document.createElement('div');
    tag.id = i;
    tag.className = 'gridbox';
    tag.style.backgroundColor = 'gray';
    grid.append(tag);
}
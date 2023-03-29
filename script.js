// Necessary elements 
const changePixBtn = document.querySelector('#changePix');
const mainGrid = document.querySelector('.mainGrid');
const grid = document.querySelector('.grid');
const erase = document.querySelector('#erase');
const randomClr = document.querySelector('#randomClr');
const changeBlack = document.querySelector('#changeBlack');
const changeBlue = document.querySelector('#changeBlue');
const changeRed = document.querySelector('#changeRed');
const lighterClr = document.querySelector('#lighterClr');
const darkerClr = document.querySelector('#darkerClr');

// creating grids
let gridSize = 256;
let newGrid = 40;
let isCreate = true;

// Color changes
let color = 'black';

function createGrid () {
    for (let i = 0; i < gridSize; i++) {
        if(isCreate == false) {
            while (grid.firstChild) {
                grid.removeChild(grid.firstChild);
            }
            isCreate = true;
        } else {
            let tag = document.createElement('div');
            tag.id = i;
            tag.style.width = newGrid + 'px';
            tag.style.height = newGrid + 'px';
            tag.style.backgroundColor = 'white';
            grid.appendChild(tag);

            // Event listener when mouse over in the grid
            tag.addEventListener('mouseover', function(){
                tag.style.position = 'relative';
                tag.style.backgroundColor = color;
            });
        }
    }
}

// When change pixel is clicked change grid size
function changePixFunc () {
    isCreate = false;
    newGrid = prompt('Enter new grid size (1 - 100): ');
    if (newGrid > 0 && newGrid <= 100) {
        gridSize = newGrid * newGrid + 1;
        newGrid = (640 / newGrid);
        createGrid();
    } else {
        alert("Incorrect Input!");
    }
};

// calling and creating functions 
changePixBtn.addEventListener('click', changePixFunc);
erase.addEventListener('click', function() {
    color = 'white';
});
randomClr.addEventListener('click', function() {
    color = 'white';
});
changeBlack.addEventListener('click', function() {
    color = 'black';
});
changeBlue.addEventListener('click', function() {
    color = 'blue';
});
changeRed.addEventListener('click', function() {
    color = 'red';
});
lighterClr.addEventListener('click', function() {
    color = 'white';
});
darkerClr.addEventListener('click', function() {
    color = 'white';
});
createGrid();
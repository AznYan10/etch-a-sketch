// Necessary elements 
const changePixBtn = document.querySelector('#changePix');
const mainGrid = document.querySelector('.mainGrid');
const grid = document.querySelector('.grid');
let isCreate = true;

// creating grids
let gridSize = 256;
let newGrid = 40;

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
            tag.style.color = 'white';
            grid.appendChild(tag);
            // Event listener when mouse over in the grid
            tag.addEventListener('mouseover', function(){
                tag.style.position = 'relative';
                tag.style.backgroundColor = 'black';
                console.log(tag);
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

// calling functions 
changePixBtn.addEventListener('click', changePixFunc);
createGrid();
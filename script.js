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

// Change grid size
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

// rainbow color when hovered
function randomFunction() {
    grid.addEventListener('mouseover', makeRanClr);
    let ranNum = 0;
    function makeRanClr () {
        if(ranNum == 0) {
            color = 'red';
            ranNum++;
        } else if(ranNum == 1) {
            color = 'orange';
            ranNum++;
        } else if(ranNum == 2) {
            color = 'yellow';
            ranNum++;
        } else if(ranNum == 3) {
            color = 'green';
            ranNum++;
        } else if(ranNum == 4) {
            color = 'blue';
            ranNum++;
        } else if(ranNum == 5) {
            color = 'indigo';
            ranNum++;
        } else {
            color = 'violet';
            ranNum = 0;
        }
    }
}

// Erase function when hoverd
function eraseFunction() {
    grid.addEventListener('mouseover', function() {
        color = 'white';
        grid.style.boxShadow = '40px 40px 40px white';
    });
}

// color to black function when hoverd
function changeBlackFunc() {
    grid.addEventListener('mouseover', function() {
        color = 'black';
        grid.style.boxShadow = '40px 40px 40px black';
    });
}

// color to blue
function changeBlueFunc() {
    grid.addEventListener('mouseover', function() {
        color = 'blue';
        grid.style.boxShadow = '40px 40px 40px blue';
    });
}

// color to red
function changeRedFunc() {
    grid.addEventListener('mouseover', function() {
        color = 'red';
        grid.style.boxShadow = '40px 40px 40px red';
    });
}

// calling functions
changePixBtn.addEventListener('click', changePixFunc);
randomClr.addEventListener('click', randomFunction);
erase.addEventListener('click', eraseFunction);
changeBlack.addEventListener('click', changeBlackFunc);
changeBlue.addEventListener('click', changeBlueFunc);
changeRed.addEventListener('click', changeRedFunc);

lighterClr.addEventListener('click', function() {
    color = 'white';
});
darkerClr.addEventListener('click', function() {
    color = 'white';
});
createGrid();
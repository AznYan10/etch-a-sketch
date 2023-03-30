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
let color = '#000000';

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
            tag.style.backgroundColor = '#FFFFFF';
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
            color = '#FF0000';
            ranNum++;
        } else if(ranNum == 1) {
            color = '#FFA500';
            ranNum++;
        } else if(ranNum == 2) {
            color = '#FFFF00';
            ranNum++;
        } else if(ranNum == 3) {
            color = '#00FF00';
            ranNum++;
        } else if(ranNum == 4) {
            color = '#0000FF';
            ranNum++;
        } else if(ranNum == 5) {
            color = '#4b0082';
            ranNum++;
        } else {
            color = '#8F00FF';
            ranNum = 0;
        }
    }
}

// Erase function when hoverd
function eraseFunction() {
    grid.addEventListener('mouseover', function() {
        color = '#FFFFFF';
        grid.style.boxShadow = '40px 40px 40px white';
    });
}

// color to black function when hoverd
function changeBlackFunc() {
    grid.addEventListener('mouseover', function() {
        color = '#000000';
        grid.style.boxShadow = '40px 40px 40px black';
    });
}

// color to blue
function changeBlueFunc() {
    grid.addEventListener('mouseover', function() {
        color = '#0000FF';
        grid.style.boxShadow = '40px 40px 40px blue';
    });
}

// color to red
function changeRedFunc() {
    grid.addEventListener('mouseover', function() {
        color = '#FF0000';
        grid.style.boxShadow = '40px 40px 40px red';
    });
}

// Make color ligher when hovered
function makeLighter() {
    grid.addEventListener('mouseover', function() {
        color = newShade(color, -50);
    });
}

// Make color darker when hovered
function makeDarker() {
    grid.addEventListener('mouseover', function() {
        color = newShade(color, 50);
    });
}

// Function to lighten or darken hex color 
const newShade = (hexColor, magnitude) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
};

// calling functions
changePixBtn.addEventListener('click', changePixFunc);
randomClr.addEventListener('click', randomFunction);
erase.addEventListener('click', eraseFunction);
changeBlack.addEventListener('click', changeBlackFunc);
changeBlue.addEventListener('click', changeBlueFunc);
changeRed.addEventListener('click', changeRedFunc);
lighterClr.addEventListener('click', makeLighter);
darkerClr.addEventListener('click', makeDarker);
createGrid();
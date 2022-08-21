const container = document.getElementById('grid');
const gridItems = document.getElementsByClassName("grid-item");
const divs = Array.from(gridItems);
const colorPicker = document.getElementById('colorpicker');
const clearDiv = document.getElementById('clear');

let colorValue = colorPicker.value;
clearDiv.addEventListener('click', clearGrid);

let mouseDown = false
window.onmousedown = () => mouseDown = true;
window.onmouseup = () => mouseDown = false;

let lengthGrid = 10;
let gridRatio = 2;
let nbCases = lengthGrid * lengthGrid;
let listColoredCells = [];

for (let i = 0; i < nbCases * gridRatio; i++)   {   // create the divs
    let div = document.createElement('div');
    div.className = "grid-item";
    container.appendChild(div);
    div.addEventListener('mousedown', colorizeCell)
    div.addEventListener('mouseover', checkMouse)
}
container.style.gridTemplateColumns = `repeat(${lengthGrid * gridRatio}, 1fr)`; // create a grill with the number of divs 
container.style.gridTemplateRows = `repeat(${lengthGrid}, 1fr)`;

changeColor();

function checkMouse(e)  {
    if (mouseDown === true)  {
        colorizeCell(e);
    }
}

function colorizeCell(e) {
    e.target.style.backgroundColor = `${colorValue}`;
    e.target.classList.add("colored");
    listColoredCells.push(e.target);
    console.log(listColoredCells);
}

function changeColor(){
    colorPicker.addEventListener('change', (e) => {
        colorValue = e.target.value;
    });
};

function clearGrid()    {
    listColoredCells.forEach(div => div.style.backgroundColor = "beige");
    console.log("working...");
}

// ajouter la classe "colored" quand une case a été colorée
// on les ajoute dans une liste
// quand on appuie sur la case "clear" => remettre background-color sur blue (pour tester, si fonctionne le placer sur "none")


// on peut le faire ainsi : element.classList.add("my-class");
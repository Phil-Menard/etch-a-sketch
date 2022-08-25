const container = document.getElementById('grid');
const gridItems = document.getElementsByClassName("grid-item");
const divs = Array.from(gridItems);
const colorPicker = document.getElementById('colorpicker');
const clearDiv = document.getElementById('clear');
let slider = document.getElementById('sliderInput');
let rangeValue = document.getElementById('rangeValue');

console.log(slider);


let colorValue = colorPicker.value;
clearDiv.addEventListener('click', clearGrid);

let mouseDown = false
window.onmousedown = () => mouseDown = true;
window.onmouseup = () => mouseDown = false;


let listColoredCells = [];
slider.addEventListener('click', setValueSlider);

changeColor();
createGrid();
rangeValue.textContent = slider.value +" x "+ (slider.value*2);

function createGrid()   {

    let lengthGrid = slider.value;
    let gridRatio = 2;
    let nbCases = lengthGrid * lengthGrid;

    for (let i = 0; i < nbCases * gridRatio; i++)   {   // create the divs
        let div = document.createElement('div');
        div.className = "grid-item";
        container.appendChild(div);
        div.addEventListener('mousedown', colorizeCell)
        div.addEventListener('mouseover', checkMouse)
    }
    container.style.gridTemplateColumns = `repeat(${lengthGrid * gridRatio}, 1fr)`; // create a grill with the number of divs 
    container.style.gridTemplateRows = `repeat(${lengthGrid}, 1fr)`;
}

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
}

function setValueSlider(e)   {
    rangeValue.textContent = slider.value +" x "+ (slider.value*2);
    while(container.firstChild) {   //supprime toutes les divs
        container.removeChild(container.firstChild);
    }
    
    createGrid(); //puis les reconstruit
}

// Supprime tous les enfant d'un élément
// var element = document.getElementById("top");
// while (element.firstChild) {
//   element.removeChild(element.firstChild);
// }
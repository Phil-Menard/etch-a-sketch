const container = document.getElementById('container');

let lengthGrid = 12;
let nbCases = lengthGrid * lengthGrid;

for (let i = 0; i < nbCases; i++)   {   // create the divs
    let div = document.createElement('div');
    div.className = "grid-item";
    container.appendChild(div);
}

container.style.gridTemplateColumns = `repeat(${lengthGrid}, 1fr)`; // create a grill with the number of divs 

const gridItems = document.getElementsByClassName("grid-item");
const colorPicker = document.getElementById('colorpicker');
let colorValue = colorPicker.value;
const divs = Array.from(gridItems);

// if mouse is down, mouseover is activated
container.addEventListener('mousedown', function(e){
    e.target.style.backgroundColor = `${colorValue}`; // color the first cell 
    divs.forEach(div => div.addEventListener('mouseover', colorizeCell));
});

// if mouse is up, mouseover is disactivated
container.addEventListener('mouseup', function(){
    divs.forEach(div => div.removeEventListener('mouseover', colorizeCell));
});

function colorizeCell(e) {
    this.style.backgroundColor = `${colorValue}`;
}

function changeColor(){
    colorPicker.addEventListener('change', (e) => {
        colorValue = e.target.value;
    });
};

changeColor();
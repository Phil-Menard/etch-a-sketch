const container = document.getElementById('container');

let lengthGrid = 24;
let nbCases = lengthGrid * lengthGrid;

for (let i = 0; i < nbCases; i++)   {   // create the divs
    let div = document.createElement('div');
    div.className = "grid-item";
    container.appendChild(div);
}

container.style.gridTemplateColumns = `repeat(${lengthGrid}, 1fr)`; // create a grill with the number of divs 

const gridItems = document.getElementsByClassName("grid-item");
const divs = Array.from(gridItems);
let isMouseDown = false;

// si mousedown => event qui turn ismousedown en true
divs.forEach(div => div.addEventListener('mousedown', function(){
    div.style.backgroundColor = "black";
    divs.forEach(div => div.addEventListener('mousemove', colorizeCell));
}));

// // si mousedown => event qui turn ismousedown en false
divs.forEach(div => div.addEventListener('mouseup', function(){
    divs.forEach(div => div.removeEventListener('mousemove', colorizeCell));
}));

function colorizeCell(e) {
    this.style.backgroundColor = "black";
}
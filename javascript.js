const container = document.getElementById('container');

let lengthGrid = 12;
let nbCases = lengthGrid*lengthGrid;

for (let i = 0; i < nbCases; i++)   {
    let div = document.createElement('div');
    div.className = "grid-item";
    container.appendChild(div);
}

container.style.gridTemplateColumns = `repeat(${lengthGrid}, 1fr)`;


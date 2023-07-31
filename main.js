function createGrid(dimensions) {
    for (let row = 0; row < dimensions; row++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let col = 0; col < dimensions; col++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            newRow.appendChild(pixel);
        }
        grid.appendChild(newRow);
    }
}

function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
}

// function reset() {
//     grid.innerHTML = null;
//     createGrid(16);
// }

// function changeDimensions() {
//     let dimensions = prompt("Enter a new size for the Etch A Sketch pixels between 1 and 100, inclusive.");
//     while (dimensions < 1 || dimensions > 100) {
//         dimensions = prompt("Enter a number greater than 0 and less than or equal to 100.")
//     }
//     grid.innerHTML = null;
//     createGrid(dimensions);
// }

const title = document.querySelector('#title');
const text = title.textContent;
const delay = 150;
let i = 0;

setInterval(() => {
    title.textContent = text.substring(0, i);
    i++;
    if (i == text.length) return;
}, delay);

const grid = document.querySelector("#grid");
createGrid(16);

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', changeColor));

// const reset = document.querySelector('.reset');
// reset.addEventListener('click', reset);

// const dimension = document.querySelector('.dimension');
// dimension.addEventListener('click', changeDimensions);
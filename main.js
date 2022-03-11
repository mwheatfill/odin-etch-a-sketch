//function that accepts a number to create an x by y grid of equal rows and columns
const createGrid = (tiles) => {
  const container = document.querySelector('.container');
  const canvas = document.createElement('div');
  canvas.classList.add('canvas');

  for (let i = 0; i < tiles; i++) {
    const row = document.createElement('div');
    row.classList.add('canvas-row');
    canvas.appendChild(row);

    for (let j = 0; j < tiles; j++) {
      const tile = document.createElement('div');
      tile.classList.add('canvas-item');
      row.appendChild(tile);
    }
  }
  
  container.appendChild(canvas);

  //add event listener for mouseover to each grid square
  const gridSquares = document.querySelectorAll('.canvas-item');

  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', changeColor);
  });
};

// clears the grid by removing the canvas
const clearGrid = () => {
  const container = document.querySelector('.container');
  const canvas = document.querySelector('.canvas');
  let removeCanvas = container.removeChild(canvas);
};

// generates a random hex value for the initial tile color
function changeColor(e) {
  if (!e.target.style.backgroundColor) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = `#${randomColor}`;
  } else {
    e.target.style.backgroundColor = addShade(
      e.target.style.backgroundColor,
      10
    );
  }
}

// adds a percentage (represented in integer form) to a CSS rgb value
function addShade(rgbValue, percent) {
  const rgbArray = rgbValue.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1);
  const shadedRgbArray = rgbArray.map(
    (n) => n - Math.round(n * (percent / 100))
  );

  return `rgb(${shadedRgbArray.join(', ')})`;
}

// event listener to clear the canvas and create a blank canvas
function clear(e) {
  clearGrid();
  const gridItems = Number(prompt('Enter the number of grid squares per row'));
  createGrid(gridItems > 100 ? 100 : gridItems);
}

// create the grid when the page refreshes
createGrid(16);

const button = document.querySelector('#clear');
button.addEventListener('click', clear);

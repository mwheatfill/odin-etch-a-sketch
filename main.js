//function that accepts 2 numbers to create an x by y grid
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

const clearGrid = () => {
  const container = document.querySelector('.container');
  const canvas = document.querySelector('.canvas');
  let removeCanvas = container.removeChild(canvas);
  console.log(removeCanvas);
};

function changeColor(e) {
  e.target.classList.add('mouse-over');
}

function clear(e) {
  clearGrid();
  gridItems = Number(prompt('Enter the number of grid squares per row'));
  createGrid(gridItems > 100 ? 100 : gridItems);
}

// create the grid when the page refreshes
createGrid(16);

const button = document.querySelector('#clear');
button.addEventListener('click', clear);

// Select color input
const gridElement = document.querySelector('#pixelCanvas');
gridElement.addEventListener('click', function(event) {  
    var cell = event.target;
    if(cell.tagName.toLowerCase()=="td"){
     const color = document.querySelector('#colorPicker').value;  
     event.target.style['background-color'] = color;
   }
});

// Select size input
document.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reset
    makeGrid();
});

function makeGrid() {
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.firstChild);
    }

      let inputWidth = "";
      for (let i = 0; i < width; i++) {
        inputWidth += '<td></td>';
    }
    
      const HTMLToAdd = '<tr>' + inputWidth + '</tr>';
      for (let j = 0; j < height; j++) {
        gridElement.insertAdjacentHTML('afterbegin', HTMLToAdd);
    }
};

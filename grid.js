let gridContainer = document.getElementById("gridholder");
const rawGridSize = 600;
const initialGridSize = rawGridSize.toString() + "px";
gridContainer.style.width = initialGridSize;
gridContainer.style.height = initialGridSize;



function gridCreator(gridSize){

    for(i = 1; i < (gridSize * gridSize) + 1 ; i++){

        let gridUnit = document.createElement("div");
        gridUnit.setAttribute("class", "pixel");
        let pixelSize = rawGridSize / gridSize;
        gridUnit.style.width = pixelSize;
        gridUnit.style.height = pixelSize;

        gridUnit.addEventListener("mouseover", function(){gridUnit.style.backgroundColor = "black"})
        let gridifier = gridContainer.appendChild(gridUnit);
        
    }

}


gridCreator(4);

let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function(){gridRecreator()})

function gridRecreator(){
    newGridSize = prompt("What should the dimension of the grid be?}",
     "note: above 100, things start to lag")
    gridContainer.innerHTML = "";
    gridCreator(newGridSize)
}

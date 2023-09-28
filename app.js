const gridContainer = document.getElementById("gridContainer");
const resetButton = document.getElementById("resetButton");

// Function to create the grid
function createGrid(size) {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = getRandomColor();
        });
        gridContainer.appendChild(gridItem);
    }
}

// Function to get a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initial grid creation
createGrid(16);

// Event listener for the reset button
resetButton.addEventListener("click", () => {
    const gridSize = prompt("Enter the number of squares per side for the new grid:");
    if (gridSize) {
        createGrid(parseInt(gridSize));
    }
});
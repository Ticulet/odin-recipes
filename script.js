function makeGrids(size) {
  let screen = document.querySelector(".sketch-screen");
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.style.border = "2px solid black";
      column.appendChild(row);
    }
    screen.append(column);
  }
}

makeGrids(16);

function setHover() {
  const sketchScreen = document.querySelector(".sketch-screen");
  let isDrawing = false;

  sketchScreen.addEventListener("mousedown", (e) => {
    isDrawing = true;
    if (e.target.classList.contains("row")) {
      e.target.style.backgroundColor = "gray";
    }
  });

  sketchScreen.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  sketchScreen.addEventListener("mouseleave", () => {
    isDrawing = false;
  });

  sketchScreen.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("row")) {
      e.target.style.backgroundColor = "gray";
    }
  });
}

setHover();

function resetSketch() {
  const resetSketch = document.querySelector(".button-new-sketch");
  resetSketch.addEventListener("click", () => {
    let gridNumber = Number(prompt("Introduce the number of grids"));
    if (gridNumber >= 100) {
      alert("NUMBER IS TOO HIGH");
      gridNumber = Number(prompt("Give a new number below 100"));
    }
    if (gridNumber === 0) {
      alert("Number can't be 0");
      gridNumber = Number(prompt("Give new number"));
    }
    let screen = document.querySelector(".sketch-screen");
    screen.innerHTML = " ";
    makeGrids(gridNumber);
  });
}

resetSketch();

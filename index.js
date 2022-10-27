const container = document.querySelector(".grid");
let currentColor;

const drawBoard = function (rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < cols; j++) {
            const el = document.createElement("div");
            el.classList.add("el");
            el.addEventListener("click", () => {
                if (el.style.backgroundColor == currentColor) {
                    el.style.backgroundColor = "white";
                }
                else {
                    el.style.backgroundColor = currentColor;
                }
            });
            row.appendChild(el);
        }
        container.appendChild(row);
    }
}

const deleteBoard = function () {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const reset = function() {
    container.querySelectorAll(".el").forEach((el)=>{
        el.removeAttribute("class");
        el.classList.add("el");
    });
    let rows = document.querySelector(".row-count").value;
    let cols = document.querySelector(".col-count").value;
    deleteBoard();
    drawBoard(rows, cols);
}

const colors = ["black", "gray", "brown", "red", "orange", "yellow", "green", "limegreen", "blue", "deepskyblue", "purple"];

let cs = document.querySelector(".color-select");

const resetColors = function() {
    cs.querySelectorAll(".color").forEach((color) => {
        color.classList.remove("selected");
    });
}

colors.forEach((colorName) => {
    let color = document.createElement("div");
    color.classList.add("color");
    color.style.backgroundColor = colorName;
    color.addEventListener('click', () => {
        currentColor = color.style.backgroundColor;
        resetColors();
        color.classList.add("selected");
    });
    cs.appendChild(color);
});

let rows = document.querySelector(".row-count").value;
let cols = document.querySelector(".col-count").value;
drawBoard(rows, cols);
cs.firstChild.classList.add("selected");
currentColor = cs.firstChild.style.backgroundColor;



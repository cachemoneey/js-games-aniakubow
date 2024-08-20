const king = document.querySelector(".chess-piece");
const squares = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

king.addEventListener("drag", dragging);
king.addEventListener("dragstart", dragStart);

squares.forEach(square => {
    square.addEventListener("dragover", dragOver);
    square.addEventListener("dragenter", dragEnter);
    square.addEventListener("dragleave", dragLeave);
    square.addEventListener("drop", dragDrop);
    square.addEventListener("dragend", dragEnd);
});

let beingDragged;

function dragStart(e) {
    beingDragged = e.target;
    console.log("dragging has started on " + beingDragged.id);
}

function dragging(e) {
    infoDisplay.textContent = "You are dragging a " + beingDragged.id;
}

function dragOver(e) {
    e.preventDefault();
    console.log("You are dragging something over " + e.target.classList);
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("highlight");
    console.log("You are entering the space of " + e.target.classList);
}

function dragLeave(e) {
    console.log("You are leaving the space of " + e.target.classList);
    e.target.classList.remove("highlight");
}

function dragDrop(e) {
    e.preventDefault();
    e.target.append(beingDragged);
    e.target.classList.remove("highlight");
}

function dragEnd(e) {
    e.target.classList.add("target");
    setTimeout(() => e.target.classList.remove("target"), 100);
    console.log("The drag has ended in " + e.target.classList);
    infoDisplay.textContent = "";
}

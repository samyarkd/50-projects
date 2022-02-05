const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
const empT = document.createElement("span");
empT.innerText = "Drop Here";

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Image
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.classList = "fill";
}

// Box

function dragEnter(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
  if (!this.classList.contains("hovered")) {
    this.className += " hovered";
    this.append(empT);
  }
}
function dragLeave(e) {
  e.preventDefault();
  this.className = "empty";
  this.removeChild(empT);
}

function dragDrop(e) {
  this.className = "empty";
  this.appendChild(fill);
  this.removeChild(empT);
}

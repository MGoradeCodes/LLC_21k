console.log("Initialized and Working");

function Response() {
  console.log("Got double clicked");
  window.location.href = "Selection.html";
}

const img = document.getElementById("obj");

img.ondragstart = () => false;

let isDragging = false;
let offsetX, offsetY;

img.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - img.offsetLeft;   // FIXED
  offsetY = e.clientY - img.offsetTop;
  img.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  img.style.left = (e.clientX - offsetX) + "px";
  img.style.top  = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  img.style.cursor = "grab";
});

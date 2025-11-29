const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

// Make canvas match displayed size
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Fill canvas with white
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Scratch settings
ctx.globalCompositeOperation = "destination-out";
ctx.lineWidth = 30; // size of scratch
ctx.lineCap = "round";

let isDrawing = false;

// Get mouse or touch position
function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  if (e.touches && e.touches.length > 0) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    };
  } else {
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }
}

// Start scratching
function startDraw(e) {
  e.preventDefault();
  isDrawing = true;
  const pos = getPos(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

// Draw scratch
function draw(e) {
  e.preventDefault();
  if (!isDrawing) return;
  const pos = getPos(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

// Stop scratching
function endDraw(e) {
  e.preventDefault();
  isDrawing = false;
}

// Mouse events
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", endDraw);
canvas.addEventListener("mouseleave", endDraw);

// Touch events
canvas.addEventListener("touchstart", startDraw);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", endDraw);

// Optional: Click anywhere to reveal instantly
canvas.addEventListener("click", () => {
  canvas.style.transition = "opacity 0.5s ease";
  canvas.style.opacity = 0;
  setTimeout(() => canvas.remove(), 500);
  
});

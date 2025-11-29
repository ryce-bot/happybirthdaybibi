// IMAGE HOVER CHANGES
const img = document.getElementById("flowers-img");
const img2 = document.getElementById("sweets-img");
const img3 = document.getElementById("message-img");

// BUTTONS
const flowersBtn = document.getElementById("flowers");
const sweetsBtn = document.getElementById("sweets");
const messageBtn = document.getElementById("message");

// FLOWERS hover
img.addEventListener("mouseover", () => {
  img.src = "https://raw.githubusercontent.com/ryce-bot/happybirthdaybibi.github.io/refs/heads/photos/bigflowers_final.png";
});

img.addEventListener("mouseout", () => {
  img.src = "https://raw.githubusercontent.com/ryce-bot/happybirthdaybibi.github.io/refs/heads/photos/shyflowers_final.png";
});

// SWEETS hover
img2.addEventListener("mouseover", () => {
  img2.src = "https://raw.githubusercontent.com/ryce-bot/happybirthdaybibi.github.io/refs/heads/photos/flashingme.png";
});

img2.addEventListener("mouseout", () => {
  img2.src = "https://raw.githubusercontent.com/ryce-bot/happybirthdaybibi.github.io/refs/heads/photos/sweets.png";
});

// MESSAGE hover
img3.addEventListener("mouseover", () => {
  img3.src = "https://raw.githubusercontent.com/ryce-bot/happybirthdaybibi.github.io/refs/heads/photos/happycat.png";
});

img3.addEventListener("mouseout", () => {
  img3.src = "https://raw.githubusercontent.com/ryce-bot/happybirthdaybibi.github.io/refs/heads/photos/shycat.png";
});

// CLICK ACTIONS
flowersBtn.onclick = () => window.location.href = "flowers.html";
sweetsBtn.onclick = () => window.location.href = "sweets.html";
messageBtn.onclick = () => window.location.href = "message.html";

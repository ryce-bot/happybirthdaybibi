const raffleBox = document.getElementById("raffleBox");
const ticket = document.getElementById("ticket");
const boxImg = document.querySelector(".box-img");

raffleBox.addEventListener("click", () => {
  boxImg.classList.add("stop-shake");
  ticket.classList.add("revealed");

  // 1) stop shake
  boxImg.style.animation = "none";

  // 2) after 300ms, open box
  setTimeout(() => {
    boxImg.src = "https://raw.githubusercontent.com/ryce-bot/happybirthdaybibi/refs/heads/photos/giftoped.png";
  }, 300);

  // 3) after 500ms, reveal ticket
  setTimeout(() => {
    ticket.classList.add("revealed");
  }, 500);

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", () => {
      window.location.href = "sweets.html"; // replace with your specific page
  });
  

});

const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");

// run-away button events
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton); // phones

function moveButton() {
  let x = Math.random() * 200 - 100;
  let y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// redirect yes button
yesBtn.onclick = function () {
  window.location.href = "birthday.html"; 
};

noBtn.onclick = function () {
    window.location.href = "sad.html"; 
  };

  
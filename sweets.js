document.addEventListener("DOMContentLoaded", function () {
    const cake = document.querySelector(".cake");
    const candleCountDisplay = document.getElementById("candleCount");
    let candles = [];
    let audioContext;
    let analyser;
    let microphone;
  
    function updateCandleCount() {
      const activeCandles = candles.filter(
        (candle) => !candle.classList.contains("out")
      ).length;
      candleCountDisplay.textContent = activeCandles;
    }
  
    function addCandle(left, top) {
      const candle = document.createElement("div");
      candle.className = "candle";
      candle.style.left = left + "px";
      candle.style.top = top + "px";
  
      const flame = document.createElement("div");
      flame.className = "flame";
      candle.appendChild(flame);
  
      cake.appendChild(candle);
      candles.push(candle);
      updateCandleCount();
    }
  
    cake.addEventListener("click", function (event) {
        const rect = cake.getBoundingClientRect();
        let left = event.clientX - rect.left;
        let top = event.clientY - rect.top;
      
        // LIMIT candles to the icing area (top ~20px of cake)
        if (top < 0) top = 0;
        if (top > 40) top = 40; // adjust this if needed
      
        addCandle(left, top);
      });
      
  
    function isBlowing() {
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);
  
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      let average = sum / bufferLength;
  
      return average > 40; //
    }
  
    function blowOutCandles() {
      let blownOut = 0;
  
      if (isBlowing()) {
        candles.forEach((candle) => {
          if (!candle.classList.contains("out") && Math.random() > 0.5) {
            candle.classList.add("out");
            blownOut++;
          }
        });
      }
  
      if (blownOut > 0) {
        updateCandleCount();
      }
    }
  
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
          analyser = audioContext.createAnalyser();
          microphone = audioContext.createMediaStreamSource(stream);
          microphone.connect(analyser);
          analyser.fftSize = 256;
          setInterval(blowOutCandles, 200);
        })
        .catch(function (err) {
          console.log("Unable to access microphone: " + err);
        });
    } else {
      console.log("getUserMedia not supported on your browser!");
    }
  });
  // BALLOON POP LINKS + NO OVERLAP SYSTEM
  function placeBalloon(balloon, balloons) {
    let placed = false;
    const bWidth = 110, bHeight = 150;
  
    while (!placed) {
      let left = Math.random() * (window.innerWidth - bWidth);
      let top = Math.random() * (window.innerHeight * 0.25); // stay high
  
      let overlaps = false;
  
      balloons.forEach(b => {
        const rect = b.getBoundingClientRect();
        if (
          left < rect.right &&
          left + bWidth > rect.left &&
          top < rect.bottom &&
          top + bHeight > rect.top
        ) {
          overlaps = true;
        }
      });
  
      if (!overlaps) {
        // USE THE SAME VALUES YOU CHECKED
        balloon.style.left = left + "px";
        balloon.style.top = top + "px";
        placed = true;
      }
    }
  }
  
  
  // Initialize balloons
  const bArr = [];
  
  document.querySelectorAll(".balloon").forEach(balloon => {
    placeBalloon(balloon, bArr);
    bArr.push(balloon);
  
    balloon.addEventListener("click", () => {
      const link = balloon.getAttribute("data-link");
      balloon.classList.add("pop");
      setTimeout(() => {
        window.location.href = link;
      }, 250);
    });
    const cakeZoneTop = 40;  // top % of screen where cake sits
const cakeZoneBottom = 70;

function randomBalloonPosition() {
  let y;
  do {
    y = Math.random() * 80; 
  } while (y > cakeZoneTop && y < cakeZoneBottom);
  return y;
}
function spawnDecor() {
    const decor = document.createElement("div");
    decor.className = "floating-decor";
    decor.textContent = Math.random() > 0.5 ? "✨" : "💕";
    decor.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(decor);
  
    setTimeout(() => decor.remove(), 8000);
  }
  
  setInterval(spawnDecor, 1200);
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", () => {
      window.location.href = "birthday.html"; // replace with your specific page
  });

  });


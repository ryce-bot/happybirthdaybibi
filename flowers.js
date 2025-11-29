// --- Canvas setup ---
var c = document.getElementById("canv");
var $ = c.getContext("2d");
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

$.fillStyle = 'hsla(0, 0%, 5%, 1)';
$.fillRect(0,0,w,h);

window.addEventListener('resize', function(){
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  w = c.width;
  h = c.height;
}, false);

var rnd = n => Math.floor(n * Math.random());
var rad = n => n * Math.PI / 180;

var n = 0, t = 1;
var col = [];
var shape = (1 + Math.sqrt(5)) / 2;
var x, y, num, r, g, b, max;

var go = function() {
  if (n % 100 == 1) {
    num = (n - 1) / 100;
    r = rnd(2) + 1, g = rnd(3), b = rnd(5);
    max = 1 - rnd(40)/100;
    if(num%2==0) x=rnd(w), y=rnd(h);
    if(num%2==1) x=(x+w*shape)%w, y=(y+h*shape)%h;
    th = rad(rnd(360));
  }

  var m = (n % 100);
  col[n-1] = 130 - rnd(30 + (m - m % 2)/2);
  $.shadowBlur=15;
  $.shadowColor="rgba("+(col[n-m]*r-50)+","+(col[n-m]*g-50)+","+(col[n-m]*b-50)+",1)";
  $.globalCompositeOperation = '';
  m *= max;
  for(var i=0; i<m; i++){
    $.save();
    $.translate(x, y);
    $.rotate(Math.PI*2/(1+shape)*i+th);
    $.translate((m-i)*Math.sin(rad(m-i)), 0);
    $.beginPath();
    $.scale(Math.sin(rad(m-i)), 0.8);
    $.moveTo((m-i), 0);
    $.arc(0, 0, (m-i), -0.5, Math.PI*2+0.5, true);
    $.fillStyle = "rgba("+col[i]*r+","+col[i]*g+","+col[i]*b+",1)";
    $.closePath();
    $.fill();
    $.restore();
  }
};

window.requestAnimFrame = window.requestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  function(callback){window.setTimeout(callback, 1000/60);};

function run(){
  t=1;
  n++;
  go();
  window.requestAnimFrame(run);
}
run();

// --- Message box fade-in ---
const messageBox = document.getElementById("message-box");
setTimeout(() => {
    messageBox.style.opacity = 1;
}, 4000); // fade in after 4 seconds

// --- Back button ---
const backButton = document.getElementById("back-button");
backButton.addEventListener("click", () => {
    window.location.href = "birthday.html"; // replace with your specific page
});

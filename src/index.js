import './less/index.less'

// Your code goes here!

//Mouseover
const introh2 = document.querySelector('.intro h2');
console.log(introh2);

introh2.addEventListener("mouseenter", function(event){
    event.target.style.color = 'yellow';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

//Double Click
const midImg = document.querySelector('.img-content img');
console.log(midImg);

midImg.addEventListener('dblclick', function (e) {
  midImg.style.opacity = "0.5";
  midImg.style.border = "10px dotted black";
  setTimeout(function() {
    midImg.style.opacity = "";
    midImg.style.border = "";
  }, 500);
}, false);

//Keydown
const introp = document.querySelector('.intro p');

introp.addEventListener('keydown', spamKey);

function spamKey(event) {
    introp.textContent += ` ${event.code}`;
}

//Wheel
const midText = document.querySelector('.inverse-content .text-content p');

console.log(midText)

document.addEventListener('wheel', zoom);

function zoom(event) {
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -1;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 1;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    midText.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
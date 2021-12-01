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

midImg.addEventListener('dblclick', function() {
  midImg.style.opacity = "0.5";
  midImg.style.border = "10px dotted black";
  setTimeout(function() {
    midImg.style.opacity = "";
    midImg.style.border = "";
  }, 500);
});

//Keydown
const introp = document.querySelector('.intro p');

introp.addEventListener('keydown', function(event) {
    introp.textContent += ` ${event.code}`;
});

//Wheel
const midText = document.querySelector('.inverse-content .text-content p');

console.log(midText)

document.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
      scale *= event.deltaY * -1;
    }
    else {
      scale /= event.deltaY * 1;
    }
    scale = Math.min(Math.max(.1, scale), 2);
    midText.style.transform = `scale(${scale})`;
  });
  let scale = 1;

//Focus
  const contentPick = document.querySelector('.content-pick .destination');
  console.log(contentPick);

  contentPick.addEventListener('focus', function(){
    contentPick.style.background = 'pink';
  });

//Resize
  const purple = document.querySelector('.content-destination');
  console.log(purple);

  window.addEventListener('resize', function(){
    purple.style.background = 'purple';
    setTimeout(function() {
        purple.style.background = '';
      }, 1500);
    });

//Select
const footerP = document.querySelector('.footer p');
console.log(footerP);

footerP.addEventListener('select', function() {
    bottomImg.style.background = 'pink'
  setTimeout(function() {
    bottomImg.style.background = "";
  }, 750);
});

//Click
const bottomImg = document.querySelector('.content-destination img');
console.log(bottomImg);

bottomImg.addEventListener('click', function() {
    bottomImg.style.opacity = "0%";
  setTimeout(function() {
    bottomImg.style.opacity = "";
  }, 1500);
});


  
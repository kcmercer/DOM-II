import './less/index.less'

// Your code goes here

// 1 Mouseover
const introh2 = document.querySelector('.intro h2');
// console.log(introh2);

introh2.addEventListener("mouseenter", function(event){
    event.target.style.color = 'yellow';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

// 2 Double Click
const midImg = document.querySelector('.img-content img');
// console.log(midImg);

midImg.addEventListener('dblclick', function() {
  midImg.style.opacity = "0.5";
  midImg.style.border = "10px dotted black";
  setTimeout(function() {
    midImg.style.opacity = "";
    midImg.style.border = "";
  }, 500);
});

// 3 Keydown
const introp = document.querySelector('.intro p');
introp.setAttribute("tabindex", 0);


introp.addEventListener('keydown', function() {
    introp.textContent += ` whoops`;
});

// 4 Wheel
const midText = document.querySelector('.inverse-content .text-content p');

// console.log(midText)

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

// 5 Focus (can only get to work on click)
  const contentPick = document.querySelector('.content-pick .destination');
//   console.log(contentPick);
  contentPick.setAttribute("tabindex", 0);

  contentPick.addEventListener('focus', function(){
        contentPick.style.background = 'pink';
        setTimeout(function() {
            contentPick.style.background = "";
          }, 500);
  });

// 6 Resize
  const purple = document.querySelector('.content-destination');
//   console.log(purple);

  window.addEventListener('resize', function(){
    purple.style.background = 'purple';
    setTimeout(function() {
        purple.style.background = '';
      }, 1500);
    });

// 7 Prevent Default
const buttons = document.querySelectorAll('.btn');
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', function(event){
        event.preventDefualt()
    })
});

// 8 Click
const bottomImg = document.querySelector('.content-destination img');
// console.log(bottomImg);

bottomImg.addEventListener('click', function() {
    bottomImg.style.opacity = "0%";
  setTimeout(function() {
    bottomImg.style.opacity = "";
  }, 1500);
});

// 9 DomContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Careful! Things get a little weird around here');
});

// 10 Mouse Leave
const nav = document.querySelector('nav');
// console.log(nav);

nav.addEventListener('mouseleave', function(){
    nav.replaceWith('Oops! Lost your chance.')
});
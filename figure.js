
// Animation
const figures = Array(50);

for (let j = 0; j < figures.length; j++) {
   //create img
   const img = document.createElement('img');
   //src for img
   img.src = './img/mz.png';
   //size img
   img.width = Math.round(Math.random() * 6 + 5); // от 0 включительно до 6 не включительно
   //show img
   document.body.prepend(img);

   figures[j] = {
      elem: img,
      x: window.innerWidth / figures.length * j,
      y: Math.round(window.innerHeight * Math.random()),
      yDirection: Math.random() * 3 + 1,
      xDirection: 0,
   };
}

let intervalId = setInterval(function () {
   for (let j = 0; j < figures.length; j++) {
      const element = figures[j];

      let figureHeight = parseInt(getComputedStyle(element.elem).height),
         figureWidth = parseInt(getComputedStyle(element.elem).width);

      element.x += element.xDirection;
      element.y += element.yDirection;

      if (element.y + figureHeight >= window.innerHeight) {
         element.y = -figureHeight;
         element.x = Math.floor(window.innerWidth * Math.random());
      }

      if (element.x + figureWidth >= window.innerWidth - 30) {
         element.x = -figureWidth;
         element.y = Math.floor(window.innerHeight * Math.random());
      }

      element.elem.style.top = element.y + 'px';
      element.elem.style.left = element.x + 'px';
      element.elem.style.position = 'absolute';
   }

}, 17);

document.onmousemove = function (e) {
   let lineCenter = window.innerWidth / 2;
   let direction;

   if (e.clientX < lineCenter) {
      direction = lineCenter / e.clientX * -1;
      if (direction < -3) {
         direction = -3;
      }
   } else {
      //реверсия координат курсора
      let clientXRevers = lineCenter - (e.clientX % lineCenter);
      direction = lineCenter / clientXRevers;
      if (direction > 3) {
         direction = 3;
      }
   }

   for (let j = 0; j < figures.length; j++) {
      const figure = figures[j];
      figure.xDirection = direction;
   }
}




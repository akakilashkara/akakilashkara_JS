// function lab10_task1() {

//     const greenSquare = document.createElement('div');
//     greenSquare.classList.add('green-square');

//     const posX = Math.floor(Math.random() * window.innerWidth);
//     const posY = Math.floor(Math.random() * window.innerHeight);
//     greenSquare.style.left = `${posX}px`;
//     greenSquare.style.top = `${posY}px`;

//     document.body.appendChild(greenSquare);

//     setTimeout(() => {
//       greenSquare.remove();
//     }, 2000);
//   }

//   function generateGreenSquares() {
//     setInterval(() => {
//       createGreenSquare();
//     }, 2000);
//   }

//   window.onload = generateGreenSquares;

const scale = document.querySelector('.scale');
const mark = document.querySelector('.mark');

let isDragging = false;

mark.addEventListener('mousedown', (e) => {
  isDragging = true;
  mark.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  mark.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const scaleRect = scale.getBoundingClientRect();
    const mouseX = e.clientX;

    const newPosition = Math.min(Math.max(mouseX - scaleRect.left, 0), scaleRect.width);
    
    mark.style.left = newPosition + 'px';
  }
});


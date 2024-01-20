const startDate = new Date('2016-01-01T00:00:00Z');

const currentDate = new Date()

const timeDifference = currentDate - startDate

const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

console.log(`Since January 1, 2016:\n${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`);


function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = timeString;
  }
  
  function startClock() {
    updateTime();
    setInterval(updateTime, 1000);
  }
  
  startClock();
  
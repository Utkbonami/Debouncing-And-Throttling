function eventHandler(i) {
  console.log(`Debounce Function Invoked`);
}

function tHandler(){
  console.log('INvoked from Throttled function')
}

function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function throttle(cb, delay = 2000){
  let wait = false; 

  return (...args) => {
    if(wait){
      return;
    }
    cb(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  }
}

function saveInput() {
  console.log("Normal function invoked");
}
var i = 1;
const processChange = debounce(() => eventHandler());

const tProcess = throttle(() => tHandler());


const button = document.getElementById('u');
const button2 = document.getElementById('n');
const button3 = document.getElementById('t');

button.addEventListener('click', processChange);

button2.addEventListener('click', saveInput);

button3.addEventListener('click', tProcess);



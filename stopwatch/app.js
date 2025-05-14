const display = document.getElementById('display');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const stop = document.getElementById('stop');

let timer;
let hour = 0;
let mint = 0;
let sec = 0;
let isRunning = false;

const updateDisplay = () => {
    // display.innerText = `${hour}:${mint}:${sec}`
    const h = String(hour).padStart(2, '0');
    const m = String(mint).padStart(2, '0');
    const s = String(sec).padStart(2, '0');
    display.innerText = `${h}:${m}:${s}`;

}

const startTimer = () => {
    if(!isRunning){
        isRunning = true
        timer = setInterval(() => {
            sec++;
            if(sec == 60){
                sec = 0;
                mint++
            }
            if (mint == 60) {
                mint = 0
                hour++
            }
            updateDisplay()
        },1000)
    }
};

const stopTimer = () => {
    clearInterval(timer)
    isRunning = false
};

const resetTimer = () => {
    clearInterval(timer)
    hour = 0
    mint = 0
    sec = 0
    isRunning = false
    updateDisplay()
};
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);
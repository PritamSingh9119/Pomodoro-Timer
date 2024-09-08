const pomodoroBtn = document.querySelector('.pomodoro');
const breakBtn = document.querySelector('.break');
const startBtn = document.querySelector('.start');
const refreshBtn = document.querySelector('.refresh');

const timerContainer = document.querySelector('.timer-container');

let pomodoroTime = 25 * 60;
let breakTime = 5 * 60;
let timerInterval;
let timeRemaining = pomodoroTime;
let isRunning = false;

function formatTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2,'0')}:${String(remainingSeconds).padStart(2,'0')}`;        
}

function setTimerDisplay(seconds) {
    timerContainer.innerHTML = `<h1>${formatTime(seconds)}</h1>`;
}

setTimerDisplay(timeRemaining);

function toggleTimer(){
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.innerHTML = `<h1>start</h1>`;
    }else{
        isRunning = true;
        startBtn.innerHTML = `<h1>pause</h1>`;
        timerInterval = setInterval(() =>{
            timeRemaining--;
            setTimerDisplay(timeRemaining);
            
            if (timeRemaining <=0){
                clearInterval(timerInterval);
                timeRemaining = 0;
                setTimerDisplay(timeRemaining);
                isRunning = false;
                startBtn.innerHTML = `<h1>start</h1>`;
            }
        },1000);
    }
}

function resetButtonStates(){
    pomodoroBtn.classList.remove('button-active');
    breakBtn.classList.remove('button-active');
}

pomodoroBtn.addEventListener('click',()=>{
    clearInterval(timerInterval);
    timeRemaining=pomodoroTime;
    isRunning=false;
    startBtn.innerHTML = `<h1>start</h1>`;
    resetButtonStates();
    pomodoroBtn.classList.add('button-active');
    setTimerDisplay(timeRemaining);
});


breakBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timeRemaining=breakTime;
    isRunning=false;
    startBtn.innerHTML = `<h1>start</h1>`;
    resetButtonStates();
    breakBtn.classList.add('button-active');
    setTimerDisplay(timeRemaining);
});


startBtn.addEventListener('click', toggleTimer);

refreshBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timeRemaining=pomodoroTime;
    isRunning=false;
    startBtn.innerHTML = `<h1>start</h1>`;
    resetButtonStates();
    setTimerDisplay(timeRemaining);
});



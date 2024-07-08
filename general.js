/*
jQuery(function($) {
    $(document).ready(function() {
    
    $('.overlay').click(function(){
    $('.nav-list').removeClass('show');
    $('.overlay').removeClass('show');
    });

    $('.menu-button').click(function(){
        $('.nav-list').toggleClass('show');
        $('.overlay').toggleClass('show');
    });
    
});
});
*/
/*
var hours = document.getElementById("countdown-h").textContent;
var minutes = document.getElementById("countdown-m").textContent;
var seconds = document.getElementById("countdown-s").textContent;
var totalSeconds = hours*3600 + minutes*60 + seconds;
var countdown;


function startTimer()
{
    countdown = setInterval(function() {
        totalSeconds--;
        var temp = totalSeconds--;
        if(totalSeconds == 1)
        {
            document.getElementById("plural").textContent = "";
        }else{
            document.getElementById("plural").textContent = "s";
        }
        hours = Math.floor(temp/3600);
        temp = temp % 60;
        minutes = Math.floor(temp/60)
        temp = temp % 60;
        seconds = temp;
        if(totalSeconds <= 0)
        {
            endTimer();
        } 
    }, 1000);
}

function endTimer()
{
    clearInterval(countdown);
}
*/
let timerInterval;
let totalSeconds = 0;
let isRunning = false;
let isPaused = false;

function updateTimeDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById('time-display').textContent = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
}

function startTimer() {
    if (!isRunning && totalSeconds > 0) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateTimeDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        isPaused = true;
        document.getElementById('pause').textContent = 'Unpause';
    } else if (isPaused) {
        startTimer();
        isPaused = false;
        document.getElementById('pause').textContent = 'Pause';
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isPaused = false;
    document.getElementById('pause').textContent = 'Pause';
    totalSeconds = 0;
    updateTimeDisplay();
}

document.getElementById('start').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    updateTimeDisplay();
    startTimer();
});

document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

updateTimeDisplay(); // Initialize display
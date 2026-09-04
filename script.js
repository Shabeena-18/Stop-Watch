// Variables
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

// Get HTML Elements
let display = document.getElementById("display");

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");


// Start Button
startBtn.addEventListener("click", function(){

    // Prevent multiple timers
    if(timer !== null){
        return;
    }

    timer = setInterval(updateTime, 1000);

});


// Stop Button
stopBtn.addEventListener("click", function(){

    clearInterval(timer);
    timer = null;

});


// Reset Button
resetBtn.addEventListener("click", function(){

    clearInterval(timer);

    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    display.innerHTML = "00 : 00 : 00";

});


// Function to update time
function updateTime(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    let displayHours;
    let displayMinutes;
    let displaySeconds;

    if(hours < 10){
        displayHours = "0" + hours;
    }else{
        displayHours = hours;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes;
    }else{
        displayMinutes = minutes;
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds;
    }else{
        displaySeconds = seconds;
    }

    display.innerHTML =
        displayHours + " : " +
        displayMinutes + " : " +
        displaySeconds;

}
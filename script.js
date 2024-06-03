let second = 0;
let minute = 0;
let hour = 0;

let timer;
let isRunning = false;

const showSecond = function() {
    document.getElementById("displayHour").innerHTML= hour;
    document.getElementById("displayMinute").innerHTML= minute;
    document.getElementById("displaySecond").innerHTML= second;
    second = second + 1;
    if(minute === 60){
        hour = hour + 1;
        minute = 0;
    }
    else if (second === 60) {
        minute = minute + 1;
        second = 0;
    }
}

function clearAllNumber() {
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById("displayHour").innerHTML= hour;
    document.getElementById("displayMinute").innerHTML= minute;
    document.getElementById("displaySecond").innerHTML= second;
}

function start() {
    if (isRunning === false) {
        if (second === 0 && minute === 0 && hour === 0){
        second = 1;
        timer = setInterval(showSecond, 1000);
        isRunning = true;
        } 
        else {
        timer = setInterval(showSecond, 1000);
        isRunning = true;
        }
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
}


function stop() {
    clearInterval(timer);
    isRunning = false;
    clearAllNumber();
}



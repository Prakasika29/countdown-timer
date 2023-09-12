let timer;
let time = 0;
let isRunning = false;

function updateTime() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.getElementById("display").textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("start").addEventListener("click", function () {
    if (!isRunning) {
        timer = setInterval(function () {
            time--;
            if (time < 0) {
                clearInterval(timer);
                isRunning = false;
            }
            updateTime();
        }, 1000);
        isRunning = true;
    }
});

document.getElementById("stop").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    updateTime();
});

document.getElementById("restart").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
    time = 60; 
    updateTime();
});
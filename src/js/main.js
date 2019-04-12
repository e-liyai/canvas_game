let canvas;
let canvasContext;
let ballx = 50;
let ballSpeedx = 5;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    let framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything() {
    ballx = ballx + ballSpeedx;
    if(ballx > canvas.width || ballx < 0) {
        ballSpeedx = -ballSpeedx;
    }
}

function drawEverything() {
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0,210, 10, 100);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ballx,100, 10, 10);
}
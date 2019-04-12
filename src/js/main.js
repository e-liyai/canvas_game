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
    colorRect(0,0, canvas.width, canvas.height, 'blue');
    colorRect(0,210, 10, 100, 'white');

    // draw ball
    colorCircle(ballx, 100, 10, 'white')
}

function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height)
}
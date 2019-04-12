let canvas;
let canvasContext;
let ballx = 50;
let bally = 50;
let ballSpeedx = 10;
let ballSpeedy = 5;

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
    bally = bally + ballSpeedy;
    if(ballx > canvas.width || ballx < 0) {
        ballSpeedx = -ballSpeedx;
    }

    if(bally > canvas.height || bally < 0) {
        ballSpeedy = -ballSpeedy;
    }
}

function drawEverything() {
    colorRect(0,0, canvas.width, canvas.height, 'blue');
    colorRect(0,210, 10, 100, 'white');

    // draw ball
    colorCircle(ballx, bally, 10, 'white')
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
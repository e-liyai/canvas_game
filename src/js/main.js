window.onload = function () {
    let canvas = document.getElementById('gameCanvas');
    let canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
}